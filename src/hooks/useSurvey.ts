
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { submitToAPI, submitToSheetDB, submitToGoogleAppsScript, SurveySubmissionData, saveFailedSubmission, debugSubmission } from '@/services/api';

export interface SurveyData {
  id: string;
  email: string;
  restaurantName?: string;
  tableCount?: number;
  currentSystem?: string;
  interests: string[];
  wantsDemo: boolean;
  submittedAt: Date;
}

export const useSurvey = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitSurvey = async (data: Omit<SurveyData, 'id' | 'submittedAt'>): Promise<boolean> => {
    setIsSubmitting(true);
    
    try {
      // Prepare data for external services
      const submissionData: SurveySubmissionData = {
        email: data.email,
        restaurantName: data.restaurantName,
        tableCount: data.tableCount?.toString(),
        currentSystem: data.currentSystem,
        interests: data.interests,
        wantsDemo: data.wantsDemo
      };

      // Debug the submission data
      debugSubmission(submissionData);

      // Try to submit to multiple services (SheetDB as primary)
      const results = await Promise.allSettled([
        submitToSheetDB(submissionData),
        submitToAPI(submissionData),
        submitToGoogleAppsScript(submissionData)
      ]);

      // Check if at least one submission was successful
      let hasSuccessfulSubmission = false;
      let errorMessages: string[] = [];

      results.forEach((result, index) => {
        const serviceName = ['SheetDB', 'API', 'Google Apps Script (backup)'][index];
        
        if (result.status === 'fulfilled' && result.value.success) {
          hasSuccessfulSubmission = true;
          console.log(`✅ ${serviceName} submission successful`);
        } else {
          const error = result.status === 'fulfilled' 
            ? result.value.error 
            : result.reason?.message || 'Unknown error';
          console.warn(`❌ ${serviceName} submission failed:`, error);
          errorMessages.push(`${serviceName}: ${error}`);
        }
      });

      // Store locally as backup
      const surveyEntry: SurveyData = {
        ...data,
        id: crypto.randomUUID(),
        submittedAt: new Date()
      };

      const existingSurveys = JSON.parse(localStorage.getItem('forka_surveys') || '[]');
      existingSurveys.push(surveyEntry);
      localStorage.setItem('forka_surveys', JSON.stringify(existingSurveys));

      if (hasSuccessfulSubmission) {
        toast({
          title: "¡Registrado exitosamente!",
          description: "Te contactaremos pronto con novedades sobre Forka.",
        });
        return true;
      } else {
        // Save for retry
        saveFailedSubmission(submissionData);
        
        // Show warning but still consider it partially successful due to local storage
        toast({
          title: "Información guardada localmente",
          description: "Problemas de conexión, pero se guardó localmente. Revisa la consola (F12) para configurar SheetDB.",
          variant: "default"
        });
        
        // Log errors for debugging
        console.error('All submission methods failed:', errorMessages);
        console.log('📱 Para solucionar: 1) Configura SheetDB API, 2) Revisa F12 → Console para detalles');
        return true; // Still return true since we saved locally
      }
    } catch (error) {
      console.error('Survey submission error:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al registrar tu información. Inténtalo de nuevo.",
        variant: "destructive"
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSurveys = (): SurveyData[] => {
    return JSON.parse(localStorage.getItem('forka_surveys') || '[]');
  };

  return {
    submitSurvey,
    getSurveys,
    isSubmitting
  };
};
