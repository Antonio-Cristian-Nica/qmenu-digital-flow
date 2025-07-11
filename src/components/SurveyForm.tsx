
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSurvey } from '@/hooks/useSurvey';
import { trackGAEvent } from '@/hooks/useGoogleAnalytics';

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
    
    // Trackear evento de envío de formulario
    trackGAEvent('form_submit', {
      form_name: 'survey_form',
      has_restaurant_name: !!formData.restaurantName,
      has_table_count: !!formData.tableCount,
      interests_count: formData.interests.length,
      wants_demo: formData.wantsDemo
    });
    
    const success = await submitSurvey({
      email: formData.email,
      restaurantName: formData.restaurantName || undefined,
      tableCount: formData.tableCount ? parseInt(formData.tableCount) : undefined,
      currentSystem: formData.currentSystem || undefined,
      interests: formData.interests,
      wantsDemo: formData.wantsDemo
    });

    if (success) {
      // Trackear evento de éxito
      trackGAEvent('form_success', {
        form_name: 'survey_form',
        conversion_type: 'lead'
      });
      
      setFormData({
        email: '',
        restaurantName: '',
        tableCount: '',
        currentSystem: '',
        interests: [],
        wantsDemo: false
      });
      onSuccess?.();
    } else {
      // Trackear evento de error
      trackGAEvent('form_error', {
        form_name: 'survey_form',
        error_type: 'submission_failed'
      });
    }
  };

  return (
    <Card className="card">
      <CardHeader>
        <CardTitle className="text-2xl text-center font-heading text-primary heading-normal">
          {t('form.title')}
        </CardTitle>
        <p className="text-text-secondary text-center text-normal">
          {t('form.subtitle')}
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-primary">
              {t('form.email')} * <span className="text-text-secondary text-sm">{t('form.email.help')}</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder={t('form.email.placeholder')}
              className="input"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="restaurantName" className="text-primary">
              {t('form.restaurant')} <span className="text-text-secondary text-sm">{t('form.restaurant.optional')}</span>
            </Label>
            <Input
              id="restaurantName"
              value={formData.restaurantName}
              onChange={(e) => setFormData(prev => ({ ...prev, restaurantName: e.target.value }))}
              placeholder={t('form.restaurant.placeholder')}
              className="input"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="tableCount" className="text-primary">
                {t('form.tables')}
              </Label>
              <Input
                id="tableCount"
                type="number"
                value={formData.tableCount}
                onChange={(e) => setFormData(prev => ({ ...prev, tableCount: e.target.value }))}
                placeholder={t('form.tables.placeholder')}
                className="input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentSystem" className="text-primary">
                {t('form.system')}
              </Label>
              <Input
                id="currentSystem"
                value={formData.currentSystem}
                onChange={(e) => setFormData(prev => ({ ...prev, currentSystem: e.target.value }))}
                placeholder={t('form.system.placeholder')}
                className="input"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-primary">{t('form.interests')}</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {interestOptions.map((interest) => (
                <div key={interest} className="flex items-center space-x-2">
                  <Checkbox
                    id={interest}
                    checked={formData.interests.includes(interest)}
                    onCheckedChange={(checked) => 
                      handleInterestChange(interest, checked as boolean)
                    }
                    className="border-primary"
                  />
                  <Label 
                    htmlFor={interest} 
                    className="text-sm text-text cursor-pointer"
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
              className="border-primary"
            />
            <Label htmlFor="wantsDemo" className="text-text cursor-pointer">
              {t('form.demo')}
            </Label>
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="btn w-full py-3 text-base sm:text-lg"
          >
            {isSubmitting ? t('form.submitting') : t('form.submit')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SurveyForm;
