
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSurvey } from '@/hooks/useSurvey';

interface SurveyFormProps {
  onSuccess?: () => void;
}

const SurveyForm: React.FC<SurveyFormProps> = ({ onSuccess }) => {
  const { submitSurvey, isSubmitting } = useSurvey();
  const [formData, setFormData] = useState({
    email: '',
    restaurantName: '',
    tableCount: '',
    currentSystem: '',
    interests: [] as string[],
    wantsDemo: false
  });

  const interestOptions = [
    'Menú digital con IA',
    'Pagos móviles',
    'Gestión de pedidos',
    'Analytics avanzados',
    'Integración con delivery',
    'Sistema de reservas'
  ];

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await submitSurvey({
      email: formData.email,
      restaurantName: formData.restaurantName || undefined,
      tableCount: formData.tableCount ? parseInt(formData.tableCount) : undefined,
      currentSystem: formData.currentSystem || undefined,
      interests: formData.interests,
      wantsDemo: formData.wantsDemo
    });

    if (success) {
      setFormData({
        email: '',
        restaurantName: '',
        tableCount: '',
        currentSystem: '',
        interests: [],
        wantsDemo: false
      });
      onSuccess?.();
    }
  };

  return (
    <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Únete a la Beta de Forka
        </CardTitle>
        <p className="text-gray-400 text-center">
          Ayúdanos a entender mejor tus necesidades
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email * <span className="text-gray-400 text-sm">(para contactarte)</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="tu@restaurante.com"
              className="bg-gray-800/50 border-gray-700 text-white"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="restaurantName" className="text-white">
              Nombre del restaurante <span className="text-gray-400 text-sm">(opcional)</span>
            </Label>
            <Input
              id="restaurantName"
              value={formData.restaurantName}
              onChange={(e) => setFormData(prev => ({ ...prev, restaurantName: e.target.value }))}
              placeholder="El Rincón Gastronómico"
              className="bg-gray-800/50 border-gray-700 text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="tableCount" className="text-white">
                Número de mesas
              </Label>
              <Input
                id="tableCount"
                type="number"
                value={formData.tableCount}
                onChange={(e) => setFormData(prev => ({ ...prev, tableCount: e.target.value }))}
                placeholder="15"
                className="bg-gray-800/50 border-gray-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentSystem" className="text-white">
                Sistema actual
              </Label>
              <Input
                id="currentSystem"
                value={formData.currentSystem}
                onChange={(e) => setFormData(prev => ({ ...prev, currentSystem: e.target.value }))}
                placeholder="TPV tradicional"
                className="bg-gray-800/50 border-gray-700 text-white"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-white">¿Qué te interesa más?</Label>
            <div className="grid grid-cols-2 gap-3">
              {interestOptions.map((interest) => (
                <div key={interest} className="flex items-center space-x-2">
                  <Checkbox
                    id={interest}
                    checked={formData.interests.includes(interest)}
                    onCheckedChange={(checked) => 
                      handleInterestChange(interest, checked as boolean)
                    }
                    className="border-gray-600"
                  />
                  <Label 
                    htmlFor={interest} 
                    className="text-sm text-gray-300 cursor-pointer"
                  >
                    {interest}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="wantsDemo"
              checked={formData.wantsDemo}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, wantsDemo: checked as boolean }))
              }
              className="border-gray-600"
            />
            <Label htmlFor="wantsDemo" className="text-gray-300 cursor-pointer">
              Quiero una demo personalizada
            </Label>
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
          >
            {isSubmitting ? 'Enviando...' : 'Unirme a la Beta'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SurveyForm;
