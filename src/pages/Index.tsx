
import React, { useRef, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowDown, 
  Check, 
  MessageSquare, 
  Users, 
  Youtube,
  ArrowUp
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState({});
  const sectionsRef = useRef([]);

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

  const handleBetaSignup = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "¡Gracias por tu interés!",
        description: "Te contactaremos pronto para el acceso beta.",
      });
      setEmail('');
    }
  };

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            RestaurantOS
          </div>
          <Button variant="outline" className="hover:bg-blue-50">
            Solicitar Demo
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="hero" 
        ref={addToRefs}
        className={`pt-24 pb-16 px-6 transition-all duration-1000 ${
          isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                  🚀 Únete a la Beta
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Transforma la experiencia
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    en tu restaurante
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Tus clientes piden y pagan desde la mesa. Tú lo gestionas todo desde una app.
                  <br />
                  <span className="font-semibold text-slate-800">Solo cobramos 2% por transacción móvil.</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
                  Solicitar Demo Gratis
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-2 hover:bg-slate-50">
                  Ver Cómo Funciona
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Sin instalación
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Setup en 5 minutos
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Soporte 24/7
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-4">
                  <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full"></div>
                  <div className="space-y-3">
                    <div className="h-3 bg-slate-100 rounded-full w-3/4"></div>
                    <div className="h-3 bg-slate-100 rounded-full w-full"></div>
                    <div className="h-3 bg-slate-100 rounded-full w-5/6"></div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-12 rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold">Menú Digital</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
                QR Scan
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - Customer Flow */}
      <section 
        id="how-it-works" 
        ref={addToRefs}
        className={`py-20 px-6 bg-slate-50 transition-all duration-1000 delay-200 ${
          isVisible['how-it-works'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Así de simple para tus clientes
              </span>
            </h2>
            <p className="text-xl text-slate-600">Tres pasos. Cero complicaciones. Máxima satisfacción.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Escanea QR",
                description: "El cliente escanea el código QR de su mesa y accede al menú digital instantáneamente",
                icon: "📱"
              },
              {
                step: "02", 
                title: "Pedido Colaborativo",
                description: "Todos los comensales pueden añadir platos al mismo pedido desde sus móviles",
                icon: "🍽️"
              },
              {
                step: "03",
                title: "Pago Inteligente", 
                description: "Pagan juntos o dividen la cuenta. Bizum, tarjeta, Apple Pay o Google Pay",
                icon: "💳"
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-sm font-bold text-blue-600 mb-2">PASO {item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant App Features */}
      <section 
        id="restaurant-app" 
        ref={addToRefs}
        className={`py-20 px-6 transition-all duration-1000 delay-300 ${
          isVisible['restaurant-app'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-700 mb-4">
                📱 App Móvil iOS & Android
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Control total desde tu móvil
                </span>
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Gestiona pedidos, actualiza el menú, genera QR por mesa y analiza estadísticas. 
                Todo desde una app intuitiva para propietarios y empleados.
              </p>

              <div className="space-y-4">
                {[
                  "Gestión de pedidos en tiempo real",
                  "Actualización de estado de platos",
                  "Generación de códigos QR por mesa",
                  "Estadísticas y analytics avanzados",
                  "Gestión de métodos de pago",
                  "Roles para empleados y propietarios"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Pedidos", value: "23", color: "bg-blue-500" },
                    { title: "Mesas", value: "12", color: "bg-green-500" },
                    { title: "Hoy", value: "€1,234", color: "bg-orange-500" },
                    { title: "Tiempo", value: "8min", color: "bg-purple-500" }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                      <div className={`w-8 h-8 ${stat.color} rounded-lg mb-2`}></div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-slate-500">{stat.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section 
        id="ai-features" 
        ref={addToRefs}
        className={`py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 transition-all duration-1000 delay-400 ${
          isVisible['ai-features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">
              🤖 Inteligencia Artificial
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                La IA trabajando para ti
              </span>
            </h2>
            <p className="text-xl text-slate-600">Tecnología avanzada que simplifica tu gestión diaria</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📸",
                title: "Lectura de Menús",
                description: "Sube una foto de tu menú físico y la IA extrae automáticamente platos, ingredientes y alérgenos"
              },
              {
                icon: "🔍",
                title: "Filtros Inteligentes", 
                description: "Los clientes pueden filtrar por alergias, dietas veganas, sin gluten y preferencias personales"
              },
              {
                icon: "📊",
                title: "Analytics Predictivos",
                description: "Analiza platos más vendidos, tiempos de espera y rendimiento para optimizar tu negocio"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section 
        id="tech" 
        ref={addToRefs}
        className={`py-16 px-6 transition-all duration-1000 delay-500 ${
          isVisible.tech ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-8 text-slate-700">Tecnología de vanguardia</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            {[
              "Next.js", "React Native", "NestJS", "PostgreSQL", 
              "Stripe", "Socket.io", "Google Cloud Vision", "Expo"
            ].map((tech, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        id="testimonials" 
        ref={addToRefs}
        className={`py-20 px-6 bg-slate-50 transition-all duration-1000 delay-600 ${
          isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Restaurantes que ya confían en nosotros
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                role: "Propietaria, Tapas & Co",
                content: "Hemos reducido el tiempo de pedido en un 40% y los clientes están encantados con la experiencia digital.",
                rating: 5
              },
              {
                name: "Carlos Ruiz", 
                role: "Gerente, Bistro Moderno",
                content: "La IA para leer el menú nos ahorró horas de trabajo. En 5 minutos teníamos todo digitalizado.",
                rating: 5
              },
              {
                name: "Ana Martín",
                role: "Chef, El Rincón Verde", 
                content: "Perfecto para filtrar platos veganos y alérgenos. Nuestros clientes se sienten más seguros.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-slate-600 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
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
        className={`py-20 px-6 transition-all duration-1000 delay-700 ${
          isVisible.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Preguntas frecuentes
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "¿Cuánto cuesta implementar RestaurantOS?",
                a: "Solo cobramos un 2% de comisión por cada pago realizado desde el móvil. Si el cliente paga en caja, no hay comisión. Sin costes de setup ni mensualidades."
              },
              {
                q: "¿Cuánto tiempo tarda la implementación?",
                a: "El setup inicial toma menos de 5 minutos. Nuestro equipo te ayuda con la digitalización del menú y configuración de las mesas."
              },
              {
                q: "¿Los clientes necesitan descargar una app?",
                a: "No. Los clientes simplemente escanean el QR y acceden a una web app optimizada. No necesitan descargar nada."
              },
              {
                q: "¿Qué pasa si se va el internet?",
                a: "El sistema funciona offline básico para tomar pedidos. Una vez se restablece la conexión, se sincroniza todo automáticamente."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300 border border-slate-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
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
        className={`py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white transition-all duration-1000 delay-800 ${
          isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para revolucionar tu restaurante?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a la beta y sé de los primeros en transformar la experiencia de tus clientes
          </p>

          <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <form onSubmit={handleBetaSignup} className="space-y-4">
                <Input
                  type="email"
                  placeholder="tu-email@restaurante.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  required
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                >
                  Solicitar Acceso Beta Gratuito
                </Button>
              </form>
              <p className="text-sm opacity-80 mt-4">
                No spam. Solo actualizaciones importantes sobre el lanzamiento.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                RestaurantOS
              </div>
              <p className="text-slate-400">
                La plataforma que transforma la experiencia gastronómica.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <div className="space-y-2 text-slate-400">
                <div>Características</div>
                <div>Precios</div>
                <div>Demo</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <div className="space-y-2 text-slate-400">
                <div>Sobre nosotros</div>
                <div>Blog</div>
                <div>Contacto</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <div className="space-y-2 text-slate-400">
                <div>Centro de ayuda</div>
                <div>Documentación</div>
                <div>Contactar soporte</div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-slate-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400">
            <div>© 2024 RestaurantOS. Todos los derechos reservados.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span>Privacidad</span>
              <span>Términos</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
