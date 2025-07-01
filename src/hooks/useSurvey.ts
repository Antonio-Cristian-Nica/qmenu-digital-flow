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
      // Enviar datos a SheetDB
      const response = await fetch('https://sheetdb.io/api/v1/2kml8y757oq23', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            email: data.email,
            restaurantName: data.restaurantName || '',
            tableCount: data.tableCount?.toString() || '',
            currentSystem: data.currentSystem || '',
            interests: data.interests.join(', '),
            wantsDemo: data.wantsDemo ? 'Sí' : 'No',
            submittedAt: new Date().toISOString(),
          }
        })
      });
      if (!response.ok) throw new Error('No se pudo guardar en SheetDB');

      toast({
        title: "¡Registrado exitosamente!",
        description: "Te contactaremos pronto con novedades sobre Forka."
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

  return {
    submitSurvey,
    getSurveys: () => [], // Deshabilitado el guardado local
    isSubmitting
  };
};
