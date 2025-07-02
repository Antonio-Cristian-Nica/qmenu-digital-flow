// SheetDB API configuration
const SHEETDB_API_URL = import.meta.env.VITE_SHEETDB_API_URL || '';
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://your-api-endpoint.com';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface SurveySubmissionData {
  email: string;
  restaurantName?: string;
  tableCount?: string;
  currentSystem?: string;
  interests: string[];
  wantsDemo: boolean;
}

// Function to submit data to your API
export const submitToAPI = async (data: SurveySubmissionData): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/surveys`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        source: 'forka-landing'
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    console.error('API submission error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
};

// Function to submit data to SheetDB (Primary method)
export const submitToSheetDB = async (data: SurveySubmissionData): Promise<ApiResponse> => {
  if (!SHEETDB_API_URL) {
    console.warn('SheetDB API URL not configured');
    return { success: false, error: 'SheetDB API URL not configured' };
  }

  try {
    const payload = {
      timestamp: new Date().toLocaleString('es-ES'),
      email: data.email,
      restaurantName: data.restaurantName || '',
      tableCount: data.tableCount || '',
      currentSystem: data.currentSystem || '',
      interests: data.interests.join(', '),
      wantsDemo: data.wantsDemo ? 'Sí' : 'No',
      source: 'forka-landing'
    };

    console.log('📊 Sending to SheetDB:', payload);

    const response = await fetch(SHEETDB_API_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const result = await response.json();
    console.log('✅ SheetDB response:', result);
    
    return { success: true, data: result };
  } catch (error) {
    console.error('❌ SheetDB submission error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
};

// Alternative backup method using Google Apps Script (Optional)
export const submitToGoogleAppsScript = async (data: SurveySubmissionData): Promise<ApiResponse> => {
  const GOOGLE_APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || '';
  
  if (!GOOGLE_APPS_SCRIPT_URL) {
    console.warn('Google Apps Script URL not configured (backup method)');
    return { success: false, error: 'Google Apps Script URL not configured' };
  }

  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
      }),
    });

    const result = await response.json();
    
    if (result.success) {
      return { success: true, data: result };
    } else {
      throw new Error(result.error || 'Google Apps Script error');
    }
  } catch (error) {
    console.error('Google Apps Script submission error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
};

// Function to retry failed submissions from localStorage
export const retryFailedSubmissions = async (): Promise<void> => {
  const failedSubmissions = JSON.parse(localStorage.getItem('forka_failed_submissions') || '[]');
  
  if (failedSubmissions.length === 0) return;

  console.log(`🔄 Attempting to retry ${failedSubmissions.length} failed submissions...`);

  const stillFailed: any[] = [];

  for (const submission of failedSubmissions) {
    try {
      const results = await Promise.allSettled([
        submitToSheetDB(submission.data),
        submitToAPI(submission.data),
        submitToGoogleAppsScript(submission.data)
      ]);

      const hasSuccess = results.some(result => 
        result.status === 'fulfilled' && result.value.success
      );

      if (!hasSuccess) {
        stillFailed.push(submission);
      } else {
        console.log('✅ Retry successful for submission:', submission.data.email);
      }
    } catch (error) {
      console.error('❌ Retry failed for submission:', submission.data.email, error);
      stillFailed.push(submission);
    }
  }

  // Update localStorage with submissions that still failed
  localStorage.setItem('forka_failed_submissions', JSON.stringify(stillFailed));
};

// Function to save failed submission for later retry
export const saveFailedSubmission = (data: SurveySubmissionData): void => {
  const failedSubmissions = JSON.parse(localStorage.getItem('forka_failed_submissions') || '[]');
  failedSubmissions.push({
    data,
    timestamp: new Date().toISOString(),
    retryCount: 0
  });
  localStorage.setItem('forka_failed_submissions', JSON.stringify(failedSubmissions));
};

// Auto-retry failed submissions when the app loads
export const initAutoRetry = (): void => {
  // Retry failed submissions when the app loads
  setTimeout(() => {
    retryFailedSubmissions();
  }, 2000);

  // Set up periodic retry (every 5 minutes)
  setInterval(() => {
    retryFailedSubmissions();
  }, 5 * 60 * 1000);
};

// Enhanced logging for debugging
export const debugSubmission = (data: SurveySubmissionData): void => {
  console.group('🔍 Form Submission Debug');
  console.log('📧 Email:', data.email);
  console.log('🏪 Restaurant:', data.restaurantName);
  console.log('🪑 Table Count:', data.tableCount);
  console.log('💻 Current System:', data.currentSystem);
  console.log('❤️ Interests:', data.interests);
  console.log('🎬 Wants Demo:', data.wantsDemo);
  console.log('🌐 API URL:', import.meta.env.VITE_API_URL);
  console.log('📊 SheetDB URL:', import.meta.env.VITE_SHEETDB_API_URL);
  console.log('📜 Apps Script URL (backup):', import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL);
  console.groupEnd();
};
