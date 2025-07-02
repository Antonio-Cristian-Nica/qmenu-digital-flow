
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
    t('interest.menu'),
    t('interest.payments'),
    t('interest.orders'),
    t('interest.analytics'),
    t('interest.delivery'),
    t('interest.reservations')
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
          {t('form.title')}
        </CardTitle>
        <p className="text-gray-400 text-center">
          {t('form.subtitle')}
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              {t('form.email')} * <span className="text-gray-400 text-sm">{t('form.email.help')}</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder={t('form.email.placeholder')}
              className="bg-gray-800/50 border-gray-700 text-white"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="restaurantName" className="text-white">
              {t('form.restaurant')} <span className="text-gray-400 text-sm">{t('form.restaurant.optional')}</span>
            </Label>
            <Input
              id="restaurantName"
              value={formData.restaurantName}
              onChange={(e) => setFormData(prev => ({ ...prev, restaurantName: e.target.value }))}
              placeholder={t('form.restaurant.placeholder')}
              className="bg-gray-800/50 border-gray-700 text-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="tableCount" className="text-white">
                {t('form.tables')}
              </Label>
              <Input
                id="tableCount"
                type="number"
                value={formData.tableCount}
                onChange={(e) => setFormData(prev => ({ ...prev, tableCount: e.target.value }))}
                placeholder={t('form.tables.placeholder')}
                className="bg-gray-800/50 border-gray-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentSystem" className="text-white">
                {t('form.system')}
              </Label>
              <Input
                id="currentSystem"
                value={formData.currentSystem}
                onChange={(e) => setFormData(prev => ({ ...prev, currentSystem: e.target.value }))}
                placeholder={t('form.system.placeholder')}
                className="bg-gray-800/50 border-gray-700 text-white"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-white">{t('form.interests')}</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
              {t('form.demo')}
            </Label>
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 py-3 text-base sm:text-lg"
          >
            {isSubmitting ? t('form.submitting') : t('form.submit')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SurveyForm;
