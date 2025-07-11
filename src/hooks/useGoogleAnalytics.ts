import { useEffect } from 'react';

// Declarar gtag globalmente
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Hook para usar Google Analytics
export const useGoogleAnalytics = () => {
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
      console.warn('Google Analytics: ID de medición no configurado. Configura VITE_GA_MEASUREMENT_ID en tu archivo .env');
      return;
    }

    // Evitar cargar múltiples veces
    if (window.gtag) {
      return;
    }

    try {
      // Configurar Google Analytics
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.onload = () => {
        console.log('Google Analytics cargado correctamente');
      };
      script.onerror = () => {
        console.error('Error al cargar Google Analytics');
      };
      document.head.appendChild(script);

      // Inicializar gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        // Configuración de privacidad
        anonymize_ip: true,
        allow_google_signals: false,
        cookie_expires: 63072000, // 2 años
      });

      // Trackear carga inicial de página
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
      });

    } catch (error) {
      console.error('Error al inicializar Google Analytics:', error);
    }
  }, [GA_MEASUREMENT_ID]);

  // Función para trackear eventos personalizados
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (!window.gtag) {
      console.warn('Google Analytics no está disponible');
      return;
    }
    
    try {
      window.gtag('event', eventName, parameters);
      console.log(`GA Event: ${eventName}`, parameters);
    } catch (error) {
      console.error('Error al trackear evento:', error);
    }
  };

  // Función para trackear conversiones
  const trackConversion = (conversionId: string, value?: number, currency?: string) => {
    if (!window.gtag) {
      console.warn('Google Analytics no está disponible');
      return;
    }
    
    try {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value,
        currency: currency || 'EUR'
      });
      console.log(`GA Conversion: ${conversionId}`, { value, currency });
    } catch (error) {
      console.error('Error al trackear conversión:', error);
    }
  };

  // Función para trackear páginas
  const trackPage = (pageTitle: string, pagePath: string) => {
    if (!window.gtag) {
      console.warn('Google Analytics no está disponible');
      return;
    }
    
    try {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: pageTitle,
        page_location: window.location.href,
        page_path: pagePath
      });
      console.log(`GA Page: ${pageTitle} - ${pagePath}`);
    } catch (error) {
      console.error('Error al trackear página:', error);
    }
  };

  return {
    trackEvent,
    trackConversion,
    trackPage,
    isLoaded: !!window.gtag && !!GA_MEASUREMENT_ID,
    measurementId: GA_MEASUREMENT_ID
  };
};

// Función standalone para trackear eventos
export const trackGAEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (!window.gtag) {
    console.warn('Google Analytics no está disponible');
    return;
  }
  
  try {
    window.gtag('event', eventName, parameters);
    console.log(`GA Event: ${eventName}`, parameters);
  } catch (error) {
    console.error('Error al trackear evento:', error);
  }
};

// Función standalone para trackear conversiones
export const trackGAConversion = (conversionId: string, value?: number, currency?: string) => {
  if (!window.gtag) {
    console.warn('Google Analytics no está disponible');
    return;
  }
  
  try {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: currency || 'EUR'
    });
    console.log(`GA Conversion: ${conversionId}`, { value, currency });
  } catch (error) {
    console.error('Error al trackear conversión:', error);
  }
};

// Función para trackear clics en botones
export const trackButtonClick = (buttonName: string, section?: string) => {
  trackGAEvent('button_click', {
    button_name: buttonName,
    section: section || 'unknown'
  });
};

// Función para trackear vistas de secciones
export const trackSectionView = (sectionName: string, scrollDepth?: string) => {
  trackGAEvent('section_view', {
    section_name: sectionName,
    scroll_depth: scrollDepth || 'unknown'
  });
};
