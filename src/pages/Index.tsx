import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { trackButtonClick } from '@/hooks/useGoogleAnalytics';

import { 
  ArrowDown, 
  Check, 
  Sparkles,
  Zap,
  Target,
  QrCode,
  Smartphone,
  CreditCard
} from "lucide-react";
import SurveyForm from "@/components/SurveyForm";
import SectionReveal from "@/components/SectionReveal";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isHeaderDemoOpen, setIsHeaderDemoOpen] = useState(false);
  const [isEscaneaDemoOpen, setIsEscaneaDemoOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPositionDemo, setScrollPositionDemo] = useState(0);
  const [scrollPositionHeaderDemo, setScrollPositionHeaderDemo] = useState(0);
  const [scrollPositionEscaneaDemo, setScrollPositionEscaneaDemo] = useState(0);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  // Scroll to top on reload
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const handleSurveySuccess = () => {
    setIsDialogOpen(false);
  };

  const handleHeaderDemoDialogChange = (open: boolean) => {
    if (open) {
      setScrollPositionHeaderDemo(window.scrollY);
    }
    setIsHeaderDemoOpen(open);
    if (!open) {
      setTimeout(() => {
        window.scrollTo({ top: scrollPositionHeaderDemo, behavior: 'auto' });
      }, 10);
    }
  };

  const handleEscaneaDemoDialogChange = (open: boolean) => {
    if (open) {
      setScrollPositionEscaneaDemo(window.scrollY);
    }
    setIsEscaneaDemoOpen(open);
    if (!open) {
      setTimeout(() => {
        window.scrollTo({ top: scrollPositionEscaneaDemo, behavior: 'auto' });
      }, 10);
    }
  };

  // handleDialogChange debe seguir existiendo para los otros modales
  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open);
  };

  // Desactiva el scroll restoration automático del navegador
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Forzar scroll al top al recargar la página
  if (typeof window !== 'undefined') {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }

  return (
    <div className="min-h-screen bg-bg text-text">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b-2 border-primary z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/forka-logo.svg" alt="Forka Logo" className="w-8 h-8" />
            <span className="text-2xl font-heading font-bold text-primary uppercase heading-normal">
              Forka
            </span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Dialog open={isHeaderDemoOpen} onOpenChange={handleHeaderDemoDialogChange}>
              <DialogTrigger asChild>
                  <Button
                    className="btn"
                    onClick={() => {
                      trackButtonClick('demo_header', 'navigation');
                      handleHeaderDemoDialogChange(true);
                    }}
                  >
                    {t('nav.demo')}
                  </Button>
              </DialogTrigger>
              <DialogContent className="bg-white border-2 border-primary max-w-2xl max-h-[90vh] overflow-y-auto shadow-forka">
                <SurveyForm onSuccess={() => setIsHeaderDemoOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <SectionReveal>
        <section 
          id="hero" 
          ref={addToRefs}
          className={`pt-32 pb-20 px-6`}
        >
          <div className="container mx-auto max-w-6xl text-center">
            <div className="space-y-6 sm:space-y-8">
              <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm uppercase font-heading text-normal">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                {t('hero.badge')}
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight text-center text-primary uppercase heading-normal">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <img src="/forky-mascot.svg" alt="Forky Mascot" className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40" />
                </div>
                {t('hero.title1')}
                <br />
                <span className="accent-gradient bg-clip-text text-transparent">
                  {t('hero.title2')}
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-text max-w-2xl mx-auto leading-relaxed px-4 sm:px-0 font-body text-normal">
                {t('hero.subtitle')}<br />
                <span className="text-primary font-medium">{t('hero.subtitle2')}</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
                  <DialogTrigger asChild>
                    <Button 
                      size="lg" 
                      className="btn text-lg h-auto mx-auto"
                      onClick={() => trackButtonClick('cta_hero', 'hero')}
                    >
                      {t('hero.cta')}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-white border-2 border-primary max-w-2xl max-h-[90vh] overflow-y-auto shadow-forka">
                    <SurveyForm onSuccess={handleSurveySuccess} />
                  </DialogContent>
                </Dialog>
              </div>

              <div className="flex justify-center gap-12 text-sm text-text/70 mt-16 font-body text-normal">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  {t('hero.feature1')}
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  {t('hero.feature2')}
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  {t('hero.feature3')}
                </div>
              </div>
            </div>

            {/* Hero Visual - Updated CTA Style */}
            <div className="mt-20 relative">
              <div className="bg-primary/10 border-2 border-primary/30 rounded-forka p-6 shadow-forka">
                <div className="bg-white rounded-forka p-12 relative overflow-hidden border-2 border-primary/20">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-primary/5"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex justify-center mb-8">
                      <div className="accent-gradient p-4 rounded-forka shadow-forka">
                        <QrCode className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-heading font-bold mb-4 text-primary uppercase heading-normal">
                      {t('qr.title')}
                    </h3>
                    
                    <p className="text-text/70 mb-8 text-lg font-body text-normal">
                      {t('qr.subtitle')}
                    </p>
                    
                    {/* Demo Steps */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                      <div className="text-center group">
                        <div className="bg-primary/20 rounded-forka p-4 mb-3 border-2 border-primary/30 shadow-forka transition-transform duration-300 group-hover:scale-110">
                          <Smartphone className="w-8 h-8 mx-auto text-primary transition-transform duration-300 group-hover:scale-125" />
                        </div>
                        <div className="text-sm text-text font-body text-normal">{t('qr.step1')}</div>
                      </div>
                      <div className="text-center group">
                        <div className="bg-primary/20 rounded-forka p-4 mb-3 border-2 border-primary/30 shadow-forka transition-transform duration-300 group-hover:scale-110">
                          <Target className="w-8 h-8 mx-auto text-primary transition-transform duration-300 group-hover:scale-125" />
                        </div>
                        <div className="text-sm text-text font-body text-normal">{t('qr.step2')}</div>
                      </div>
                      <div className="text-center group">
                        <div className="bg-primary/20 rounded-forka p-4 mb-3 border-2 border-primary/30 shadow-forka transition-transform duration-300 group-hover:scale-110">
                          <CreditCard className="w-8 h-8 mx-auto text-primary transition-transform duration-300 group-hover:scale-125" />
                        </div>
                        <div className="text-sm text-text font-body text-normal">{t('qr.step3')}</div>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <Dialog open={isEscaneaDemoOpen} onOpenChange={handleEscaneaDemoDialogChange}>
                      <DialogTrigger asChild>
                        <Button 
                          size="lg" 
                          className="btn px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                          onClick={() => {
                            trackButtonClick('qr_demo', 'qr_section');
                            handleEscaneaDemoDialogChange(true);
                          }}
                        >
                          <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                          {t('qr.cta')}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-white border-2 border-primary max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto mx-4 shadow-forka">
                        <SurveyForm onSuccess={() => setIsEscaneaDemoOpen(false)} />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 accent-gradient text-white px-6 py-3 rounded-forka text-sm font-heading font-bold animate-pulse shadow-forka uppercase text-normal">
                {t('qr.badge')}
              </div>
              
              {/* Bottom highlight */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-primary/50 blur-sm"></div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* How it Works */}
      <SectionReveal delay={100}>
        <section 
          id="how-it-works" 
          ref={addToRefs}
          className={`py-24 px-6`}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-primary uppercase heading-normal">
                {t('how.title')}
              </h2>
              <p className="text-xl text-text/70 font-body text-normal">{t('how.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: t('how.step1.title'),
                  description: t('how.step1.desc'),
                  icon: "📱"
                },
                {
                  step: "02", 
                  title: t('how.step2.title'),
                  description: t('how.step2.desc'),
                  icon: "🤝"
                },
                {
                  step: "03",
                  title: t('how.step3.title'), 
                  description: t('how.step3.desc'),
                  icon: "💳"
                }
              ].map((item, index) => (
                <Card key={index} className="card group hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <div className="text-sm font-bold text-primary mb-2 uppercase font-heading text-normal">{item.step}</div>
                    <h3 className="text-2xl font-heading font-bold text-primary mb-3 uppercase heading-normal">{item.title}</h3>
                    <p className="text-text/70 leading-relaxed font-body text-normal">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Restaurant App */}
      <SectionReveal delay={200}>
        <section 
          id="restaurant-app" 
          ref={addToRefs}
          className={`py-16 sm:py-24 px-4 sm:px-6`}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div>
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-4 sm:mb-6 uppercase font-heading text-normal">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  {t('app.badge')}
                </Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6 text-primary uppercase heading-normal">
                  {t('app.title')}
                </h2>
                <p className="text-lg sm:text-xl text-text/70 mb-6 sm:mb-8 font-body text-normal">{t('app.subtitle')}</p>

                <div className="space-y-4">
                  {[
                    t('app.feature1'),
                    t('app.feature2'), 
                    t('app.feature3'),
                    t('app.feature4'),
                    t('app.feature5'),
                    t('app.feature6')
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 accent-gradient rounded-full"></div>
                      <span className="text-text/70 font-body text-normal">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-primary/10 border-2 border-primary/30 rounded-forka p-4 sm:p-6 lg:p-8 shadow-forka">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {[
                      { title: t('stats.orders'), value: "23", color: "accent-gradient", shadow: "shadow-forka" },
                      { title: t('stats.tables'), value: "12", color: "accent-gradient", shadow: "shadow-forka" },
                      { title: t('stats.today'), value: "€1,234", color: "accent-gradient", shadow: "shadow-forka" },
                      { title: t('stats.time'), value: "8min", color: "accent-gradient", shadow: "shadow-forka" }
                    ].map((stat, index) => (
                      <div key={index} className="card p-3 sm:p-4 lg:p-6 group transition-all duration-300 hover:-translate-y-1 text-left">
                        <div className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${stat.color} rounded-forka mb-2 sm:mb-3 flex items-center justify-start transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse group-hover:${stat.shadow}`}></div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-primary mb-1 uppercase heading-normal">{stat.value}</div>
                        <div className="text-xs sm:text-sm text-text/70 font-body text-normal">{stat.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* App Store & Google Play Badges - Próximamente */}
            <div className="w-full flex flex-col items-center justify-center py-6 sm:py-8 lg:py-10">
              <span className="text-base sm:text-lg font-heading font-bold text-primary mb-3 sm:mb-4 text-center px-4 uppercase heading-normal">{t('app.stores')}</span>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
                {/* App Store badge */}
                <a href="#" className="overflow-hidden rounded-lg shadow-lg" tabIndex={-1} aria-disabled>
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Disponible próximamente en App Store"
                    width="120"
                    height="40"
                    className="sm:w-[150px] sm:h-[50px] opacity-50"
                    style={{ pointerEvents: 'none' }}
                  />
                </a>
                {/* Google Play badge */}
                <a href="#" className="overflow-hidden rounded-lg shadow-lg" tabIndex={-1} aria-disabled>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Disponible próximamente en Google Play"
                    width="120"
                    height="40"
                    className="sm:w-[150px] sm:h-[50px] opacity-50"
                    style={{ pointerEvents: 'none' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* AI Features */}
      <SectionReveal delay={300}>
        <section 
          id="ai-features" 
          ref={addToRefs}
          className={`py-24 px-6`}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 uppercase font-heading text-normal">
                <Target className="w-4 h-4 mr-2" />
                {t('ai.badge')}
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-primary uppercase heading-normal">
                {t('ai.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "📸",
                  title: t('ai.feature1.title'),
                  description: t('ai.feature1.desc')
                },
                {
                  icon: "🔍",
                  title: t('ai.feature2.title'), 
                  description: t('ai.feature2.desc')
                },
                {
                  icon: "📊",
                  title: t('ai.feature3.title'),
                  description: t('ai.feature3.desc')
                }
              ].map((feature, index) => (
                <Card key={index} className="card group transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-primary mb-3 uppercase heading-normal">{feature.title}</h3>
                    <p className="text-text/70 leading-relaxed font-body text-normal">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Tech Stack */}
      <SectionReveal delay={400}>
        <section 
          id="tech" 
          ref={addToRefs}
          className={`py-16 px-6`}
        >
          <div className="container mx-auto max-w-4xl text-center">
            <h3 className="text-2xl font-heading font-bold mb-8 text-primary uppercase heading-normal">{t('tech.title')}</h3>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              {[
                "Next.js", "React Native", "NestJS", "PostgreSQL", 
                "Stripe", "Socket.io", "Cloud Vision", "Expo"
              ].map((tech, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm border-primary/30 text-primary hover:border-primary font-body text-normal">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Suscripción */}
      <SectionReveal delay={500}>
        <section id="suscripcion" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-primary/10 relative">
          <div className="container mx-auto max-w-4xl">
            <div className="relative">
              <div className="card p-6 sm:p-8 md:p-10 lg:p-16 text-center border-2 border-primary shadow-forka">
                <h2 className="subscription-title text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 sm:mb-6 text-primary uppercase heading-normal">
                  {t('subscription.title')} 
                  <span className="block mt-2 sm:mt-3 pricing-text-responsive accent-gradient bg-clip-text text-transparent">
                    {t('subscription.price')}
                  </span>
                </h2>
                <ul className="text-sm sm:text-base md:text-lg text-left mx-auto max-w-2xl space-y-4 sm:space-y-5 md:space-y-6 mt-6 sm:mt-8 md:mt-10 font-body text-normal">
                  <li className="text-text break-words">
                    <span className="font-bold text-primary break-words">{t('subscription.feature1.title')}</span><br />
                    <span className="break-words">{t('subscription.feature1.desc')}</span>
                  </li>
                  <li className="text-text break-words">
                    <span className="font-bold text-primary break-words">{t('subscription.feature2.title')}</span><br />
                    <span className="break-words">{t('subscription.feature2.desc')}</span>
                  </li>
                  <li className="text-text break-words">
                    <span className="font-bold text-primary break-words">{t('subscription.feature3.title')}</span><br />
                    <span className="break-words">{t('subscription.feature3.desc')}</span>
                  </li>
                  <li className="text-text break-words">
                    <span className="font-bold text-primary break-words">{t('subscription.feature4.title')}</span><br />
                    <span className="break-words">{t('subscription.feature4.desc')}</span>
                  </li>
                  <li className="text-text break-words">
                    <span className="font-bold text-primary break-words">{t('subscription.feature5.title')}</span><br />
                    <span className="break-words">{t('subscription.feature5.desc')}</span>
                  </li>
                  <li className="text-text break-words">
                    <span className="font-bold text-primary break-words">{t('subscription.feature6.title')}</span><br />
                    <span className="break-words">{t('subscription.feature6.desc')}</span>
                  </li>
                  <li className="text-text break-words">
                    <span className="font-bold text-primary break-words">{t('subscription.feature7.title')}</span><br />
                    <span className="break-words">{t('subscription.feature7.desc')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Testimonials */}
      <section 
        id="testimonials" 
        ref={addToRefs}
        className={`py-16 sm:py-24 px-4 sm:px-6 transition-all duration-1000 delay-600 ${
          isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-primary uppercase heading-normal">
              {t('testimonials.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: t('testimonials.1.name'),
                role: t('testimonials.1.role'),
                content: t('testimonials.1.content'),
                rating: 5
              },
              {
                name: t('testimonials.2.name'), 
                role: t('testimonials.2.role'),
                content: t('testimonials.2.content'),
                rating: 5
              },
              {
                name: t('testimonials.3.name'),
                role: t('testimonials.3.role'), 
                content: t('testimonials.3.content'),
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="card hover:shadow-forka-hover transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-primary text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-text italic leading-relaxed font-body text-normal">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-primary font-heading heading-normal">{testimonial.name}</div>
                    <div className="text-sm text-text/70 font-body text-normal">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section 
        id="faq" 
        ref={addToRefs}
        className={`py-24 px-6 transition-all duration-1000 delay-700 ${
          isVisible.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6 text-primary uppercase heading-normal">
              {t('faq.title')}
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                q: t('faq.q1'),
                a: t('faq.a1')
              },
              {
                q: t('faq.q2'),
                a: t('faq.a2')
              },
              {
                q: t('faq.q3'),
                a: t('faq.a3')
              },
              {
                q: t('faq.q4'),
                a: t('faq.a4')
              }
            ].map((faq, index) => (
              <Card key={index} className="card hover:shadow-forka-hover transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-primary font-heading heading-normal">{faq.q}</h3>
                  <p className="text-text/70 leading-relaxed font-body text-normal">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section 
        id="cta" 
        ref={addToRefs}
        className={`py-16 sm:py-24 px-4 sm:px-6 transition-all duration-1000 delay-800 ${
          isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <div className="card p-6 sm:p-12 border-2 border-primary shadow-forka">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6 text-primary uppercase heading-normal">
              {t('cta.title')}
            </h2>
            <p className="text-lg sm:text-xl text-text/70 mb-8 sm:mb-12 px-4 sm:px-0 font-body text-normal">
              {t('cta.subtitle')}
            </p>

            <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="btn px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                  onClick={() => trackButtonClick('cta_final', 'cta_section')}
                >
                  {t('cta.button')}
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white border-2 border-primary max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto mx-4 shadow-forka">
                <SurveyForm onSuccess={handleSurveySuccess} />
              </DialogContent>
            </Dialog>
            
            <p className="text-xs sm:text-sm text-text/50 mt-4 sm:mt-6 px-4 sm:px-0 font-body text-normal">
              {t('cta.disclaimer')}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 px-4 sm:px-6 border-t-2 border-primary">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <img src="/forka-logo.svg" alt="Forka Logo" className="w-6 h-6" />
            <span className="text-xl sm:text-2xl font-heading font-bold text-primary uppercase heading-normal">
              Forka
            </span>
          </div>
          <p className="text-text/70 text-xs sm:text-sm mb-4 font-body text-normal">{t('footer.tagline')}</p>
          <div className="flex justify-center gap-4 sm:gap-6 mb-4">
            {/* Instagram Logo */}
            <span className="inline-block" title="Instagram">
              <svg width="24" height="24" className="sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" className="text-primary"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" className="text-primary"></path>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" className="text-primary"></line>
              </svg>
            </span>
            {/* X (Twitter) Logo */}
            <span className="inline-block" title="X">
              <svg width="24" height="24" className="sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 6.5L6.5 17.5" className="text-primary"></path>
                <path d="M6.5 6.5l11 11" className="text-primary"></path>
              </svg>
            </span>
          </div>
          <div className="text-text/50 text-xs font-body text-normal">© 2024 Forka</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
