
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

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
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const surveyEntry: SurveyData = {
        ...data,
        id: crypto.randomUUID(),
        submittedAt: new Date()
      };

      // Store in localStorage (simulating database)
      const existingSurveys = JSON.parse(localStorage.getItem('forka_surveys') || '[]');
      existingSurveys.push(surveyEntry);
      localStorage.setItem('forka_surveys', JSON.stringify(existingSurveys));

      toast({
        title: "¡Registrado exitosamente!",
        description: "Te contactaremos pronto con novedades sobre Forka.",
      });

      return true;
    } catch (error) {
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
