import React, { useRef, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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

const Index = () => {
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
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-xl z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Forka
            </span>
          </div>
          <Dialog open={isHeaderDemoOpen} onOpenChange={handleHeaderDemoDialogChange}>
            <DialogTrigger asChild>
                <Button
                  className="bg-gray-900 text-white hover:bg-gray-800 border border-gray-700"
                  onClick={() => handleHeaderDemoDialogChange(true)}
                >
                  Demo
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border-gray-800 max-w-2xl max-h-[90vh] overflow-y-auto">
              <SurveyForm onSuccess={() => setIsHeaderDemoOpen(false)} />
            </DialogContent>
          </Dialog>
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
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                En desarrollo: ¡próximamente!
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Transforma tu
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  restaurante
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                Tus clientes piden y pagan desde la mesa.<br />
                <span className="text-white font-medium">Solo 2% de comisión por transacción móvil.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-8 py-6 text-lg h-auto mx-auto">
                      Mas Información
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 border-gray-800 max-w-2xl max-h-[90vh] overflow-y-auto">
                    <SurveyForm onSuccess={handleSurveySuccess} />
                  </DialogContent>
                </Dialog>
              </div>

              <div className="flex justify-center gap-12 text-sm text-gray-500 mt-16">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  Facil de instalar
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  Setup 5 min
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  Soporte 24/7
                </div>
              </div>
            </div>

            {/* Hero Visual - Updated CTA Style */}
            <div className="mt-20 relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl p-1 backdrop-blur-sm border border-purple-500/30 shadow-2xl">
                <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-3xl p-12 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex justify-center mb-8">
                      <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-4 rounded-2xl">
                        <QrCode className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      ¡Escanea y Disfruta!
                    </h3>
                    
                    <p className="text-gray-400 mb-8 text-lg">
                      Sin apps, sin esperas. Solo escanea el QR y comienza a pedir.
                    </p>
                    
                    {/* Demo Steps */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                      <div className="text-center group">
                        <div className="bg-purple-500/20 rounded-xl p-4 mb-3 border border-purple-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(168,85,247,0.5)]">
                          <Smartphone className="w-8 h-8 mx-auto text-purple-400 transition-transform duration-300 group-hover:scale-125" />
                        </div>
                        <div className="text-sm text-gray-300">Escanea QR</div>
                      </div>
                      <div className="text-center group">
                        <div className="bg-cyan-500/20 rounded-xl p-4 mb-3 border border-cyan-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.5)]">
                          <Target className="w-8 h-8 mx-auto text-cyan-400 transition-transform duration-300 group-hover:scale-125" />
                        </div>
                        <div className="text-sm text-gray-300">Elige platos</div>
                      </div>
                      <div className="text-center group">
                        <div className="bg-green-500/20 rounded-xl p-4 mb-3 border border-green-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(34,197,94,0.5)]">
                          <CreditCard className="w-8 h-8 mx-auto text-green-400 transition-transform duration-300 group-hover:scale-125" />
                        </div>
                        <div className="text-sm text-gray-300">Paga fácil</div>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <Dialog open={isEscaneaDemoOpen} onOpenChange={handleEscaneaDemoDialogChange}>
                      <DialogTrigger asChild>
                        <Button 
                          size="lg" 
                          className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                          onClick={() => handleEscaneaDemoDialogChange(true)}
                        >
                          <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                          Únete a la Beta
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-gray-900 border-gray-800 max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
                        <SurveyForm onSuccess={() => setIsEscaneaDemoOpen(false)} />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-full text-sm font-semibold animate-pulse shadow-lg">
                La mejor experiencia
              </div>
              
              {/* Bottom highlight */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm"></div>
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
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Simple para clientes
                </span>
              </h2>
              <p className="text-xl text-gray-400">Tres pasos. Cero fricción.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Escanea",
                  description: "QR → Menú digital instantáneo",
                  icon: "📱"
                },
                {
                  step: "02", 
                  title: "Colabora",
                  description: "Todos añaden platos al pedido",
                  icon: "🤝"
                },
                {
                  step: "03",
                  title: "Paga", 
                  description: "Juntos o dividido. Bizum, tarjeta, Apple Pay",
                  icon: "💳"
                }
              ].map((item, index) => (
                <Card key={index} className="group bg-gray-900/50 border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <div className="text-sm font-bold text-purple-400 mb-2">{item.step}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
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
                <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 mb-4 sm:mb-6">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  App Móvil
                </Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Control total
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8">
                  Gestiona pedidos, actualiza menú, genera QR y analiza todo desde una app intuitiva.
                </p>

                <div className="space-y-4">
                  {[
                    "Pedidos en tiempo real",
                    "Estado de platos actualizable", 
                    "QR por mesa",
                    "Analytics avanzados",
                    "Gestión de pagos",
                    "Roles de empleados"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-purple-500/20">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {[
                      { title: "Pedidos", value: "23", color: "from-purple-500 to-purple-600", shadow: "shadow-[0_0_16px_rgba(168,85,247,0.3)]" },
                      { title: "Mesas", value: "12", color: "from-cyan-500 to-cyan-600", shadow: "shadow-[0_0_16px_rgba(34,211,238,0.3)]" },
                      { title: "Hoy", value: "€1,234", color: "from-purple-500 to-cyan-500", shadow: "shadow-[0_0_16px_rgba(34,197,94,0.3)]" },
                      { title: "Tiempo", value: "8min", color: "from-cyan-500 to-purple-500", shadow: "shadow-[0_0_16px_rgba(59,130,246,0.3)]" }
                    ].map((stat, index) => (
                      <div key={index} className="bg-gray-900/80 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-gray-800 group transition-all duration-300 hover:border-purple-500/30 hover:-translate-y-1 text-left">
                        <div className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-r ${stat.color} rounded-md sm:rounded-lg mb-2 sm:mb-3 flex items-center justify-start transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse group-hover:${stat.shadow}`}></div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-xs sm:text-sm text-gray-400">{stat.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* App Store & Google Play Badges - Próximamente */}
            <div className="w-full flex flex-col items-center justify-center py-6 sm:py-8 lg:py-10">
              <span className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 text-center px-4">Próximamente disponible en App Store y Google Play</span>
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
              <Badge className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border-purple-500/30 mb-6">
                <Target className="w-4 h-4 mr-2" />
                Inteligencia Artificial
              </Badge>
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  IA que trabaja para ti
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "📸",
                  title: "Lectura de Menús",
                  description: "Sube una foto y la IA extrae platos, ingredientes y alérgenos automáticamente"
                },
                {
                  icon: "🔍",
                  title: "Filtros Inteligentes", 
                  description: "Filtrado por alergias, dietas veganas, sin gluten y preferencias personales"
                },
                {
                  icon: "📊",
                  title: "Analytics Predictivos",
                  description: "Platos populares, tiempos de espera y optimización de rendimiento"
                }
              ].map((feature, index) => (
                <Card key={index} className="group bg-gray-900/30 border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:bg-gray-900/50">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
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
            <h3 className="text-2xl font-bold mb-8 text-white">Tecnología de vanguardia</h3>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              {[
                "Next.js", "React Native", "NestJS", "PostgreSQL", 
                "Stripe", "Socket.io", "Cloud Vision", "Expo"
              ].map((tech, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm border-gray-700 text-white hover:border-purple-500/50">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Suscripción */}
      <SectionReveal delay={500}>
        <section id="suscripcion" className="py-24 px-6 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative">
          <div className="container mx-auto max-w-2xl">
            <div className="relative">
              {/* Overlay negro semitransparente para oscurecer el gradiente */}
              <div className="absolute inset-0 bg-black/40 rounded-3xl z-0 pointer-events-none" />
              <div className="bg-gradient-to-r from-purple-700 to-cyan-700 rounded-3xl shadow-2xl p-10 md:p-16 text-white text-center border-2 border-purple-500/30 relative z-10">
                <h2 className="text-4xl font-bold mb-4">Suscripción Premium: <span className="text-5xl">79,99 €/mes</span></h2>
                <ul className="text-lg text-left mx-auto max-w-xl space-y-6 mt-10">
                  <li>
                    <span className="font-bold">Menú Digital IA:</span><br />
                    OCR + IA extrae platos, ingredientes y alérgenos desde foto; edición y organización manual.
                  </li>
                  <li>
                    <span className="font-bold">Pedidos & Pagos QR:</span><br />
                    QRs ilimitados por mesa · Carrito colaborativo con líder de mesa · Split inteligente · Stripe (tarjeta, Apple/Google Pay) + Bizum + pago en caja.
                  </li>
                  <li>
                    <span className="font-bold">App Móvil React Native:</span><br />
                    Panel “Propietario” (CRUD menú, QRs, ajustes) · Panel “Empleado” (ver/actualizar estados de pedido).
                  </li>
                  <li>
                    <span className="font-bold">Dashboard & Analíticas:</span><br />
                    Estadísticas en tiempo real · Informes exportables (CSV/PDF) · Gráficas de ingresos, platos más vendidos y tiempos de preparación.
                  </li>
                  <li>
                    <span className="font-bold">IA Avanzada:</span><br />
                    Recomendaciones de plato · Filtros por dieta/alérgenos · Predicción de demanda para optimizar stock.
                  </li>
                  <li>
                    <span className="font-bold">Comunicación Instantánea:</span><br />
                    Notificaciones WebSocket · Chat ligero cliente–empleado · “Llamar al camarero” en la app.
                  </li>
                  <li>
                    <span className="font-bold">Seguridad & Soporte:</span><br />
                    Multi‑tenant seguro (roles aislados) · Backups automáticos + GDPR · Soporte Premium 24/7 (&lt; 4 h) · Acceso anticipado a nuevas funciones.
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
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Restaurantes que confían
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                role: "Propietaria, Tapas & Co",
                content: "Reducimos 40% el tiempo de pedido. Los clientes están encantados.",
                rating: 5
              },
              {
                name: "Carlos Ruiz", 
                role: "Gerente, Bistro Moderno",
                content: "La IA digitalizó nuestro menú en 5 minutos. Increíble.",
                rating: 5
              },
              {
                name: "Ana Martín",
                role: "Chef, El Rincón Verde", 
                content: "Perfecto para filtrar platos veganos. Clientes más seguros.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-purple-500/30 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                FAQ
              </span>
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                q: "¿Cuánto cuesta?",
                a: "Solo 2% por pago móvil. Si pagan en caja, gratis. Sin setup ni mensualidades."
              },
              {
                q: "¿Cuánto tarda la implementación?",
                a: "Setup en 5 minutos. Te ayudamos con menú y configuración de mesas."
              },
              {
                q: "¿Los clientes necesitan una app?",
                a: "No. Solo escanean el QR y acceden a la web app. Sin descargas."
              },
              {
                q: "¿Funciona sin internet?",
                a: "Modo offline básico para pedidos. Se sincroniza al reconectar."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-gray-900/30 border-gray-800 hover:border-purple-500/30 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-white">{faq.q}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
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
          <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-purple-500/20 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ¿Listo para revolucionar?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 px-4 sm:px-0">
              Únete a la beta y transforma tu restaurante
            </p>

            <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 font-semibold px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  Acceso Beta Gratuito
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 border-gray-800 max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
                <SurveyForm onSuccess={handleSurveySuccess} />
              </DialogContent>
            </Dialog>
            
            <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6 px-4 sm:px-0">
              Solo actualizaciones importantes sobre el lanzamiento
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 px-4 sm:px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="text-xl sm:text-2xl font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Forka
            </span>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm mb-4">Innovando la experiencia gastronómica</p>
          <div className="flex justify-center gap-4 sm:gap-6 mb-4">
            {/* Instagram Logo */}
            <span className="inline-block" title="Instagram">
              <svg width="24" height="24" className="sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" className="text-pink-500"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" className="text-pink-500"></path>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" className="text-pink-500"></line>
              </svg>
            </span>
            {/* X (Twitter) Logo */}
            <span className="inline-block" title="X">
              <svg width="24" height="24" className="sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 6.5L6.5 17.5" className="text-gray-400"></path>
                <path d="M6.5 6.5l11 11" className="text-gray-400"></path>
              </svg>
            </span>
          </div>
          <div className="text-gray-700 text-xs">© 2024 Forka</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
