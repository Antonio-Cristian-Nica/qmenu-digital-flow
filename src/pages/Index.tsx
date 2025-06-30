
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
  ArrowUp,
  Sparkles,
  Zap,
  Target
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

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

  const handleBetaSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "¡Gracias por tu interés!",
        description: "Te contactaremos pronto para el acceso beta.",
      });
      setEmail('');
    }
  };

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-xl z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              RestaurantOS
            </span>
          </div>
          <Button variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
            Demo
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="hero" 
        ref={addToRefs}
        className={`pt-32 pb-20 px-6 transition-all duration-1000 ${
          isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <div className="space-y-8">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Beta Disponible
            </Badge>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Transforma tu
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                restaurante
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Tus clientes piden y pagan desde la mesa.<br />
              <span className="text-white font-medium">Solo 2% por transacción móvil.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-8 py-6 text-lg h-auto">
                Solicitar Demo
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 px-8 py-6 text-lg h-auto">
                Ver Demo
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex justify-center gap-12 text-sm text-gray-500 mt-16">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-400" />
                Sin instalación
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

          {/* Hero Visual */}
          <div className="mt-20 relative">
            <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-3xl p-1 backdrop-blur-sm border border-purple-500/20">
              <div className="bg-gray-900 rounded-3xl p-8">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                  <div className="h-2 bg-gray-700 rounded-full"></div>
                  <div className="h-2 bg-gray-700 rounded-full"></div>
                </div>
                <div className="text-left space-y-4">
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-cyan-600 h-12 rounded-xl mt-6 flex items-center justify-center">
                  <span className="text-white font-semibold">Menú Digital</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              QR Scan
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section 
        id="how-it-works" 
        ref={addToRefs}
        className={`py-24 px-6 transition-all duration-1000 delay-200 ${
          isVisible['how-it-works'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
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

      {/* Restaurant App */}
      <section 
        id="restaurant-app" 
        ref={addToRefs}
        className={`py-24 px-6 transition-all duration-1000 delay-300 ${
          isVisible['restaurant-app'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 mb-6">
                <Zap className="w-4 h-4 mr-2" />
                App Móvil
              </Badge>
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Control total
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
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
              <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-3xl p-8 border border-purple-500/20">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Pedidos", value: "23", color: "from-purple-500 to-purple-600" },
                    { title: "Mesas", value: "12", color: "from-cyan-500 to-cyan-600" },
                    { title: "Hoy", value: "€1,234", color: "from-purple-500 to-cyan-500" },
                    { title: "Tiempo", value: "8min", color: "from-cyan-500 to-purple-500" }
                  ].map((stat, index) => (
                    <div key={index} className="bg-gray-900/80 rounded-xl p-6 border border-gray-800">
                      <div className={`w-8 h-8 bg-gradient-to-r ${stat.color} rounded-lg mb-3`}></div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.title}</div>
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
        className={`py-24 px-6 transition-all duration-1000 delay-400 ${
          isVisible['ai-features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
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

      {/* Tech Stack */}
      <section 
        id="tech" 
        ref={addToRefs}
        className={`py-16 px-6 transition-all duration-1000 delay-500 ${
          isVisible.tech ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-400">Tecnología de vanguardia</h3>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {[
              "Next.js", "React Native", "NestJS", "PostgreSQL", 
              "Stripe", "Socket.io", "Cloud Vision", "Expo"
            ].map((tech, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm border-gray-700 text-gray-400 hover:border-purple-500/50">
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
        className={`py-24 px-6 transition-all duration-1000 delay-600 ${
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
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                FAQ
              </span>
            </h2>
          </div>

          <div className="space-y-6">
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
        className={`py-24 px-6 transition-all duration-1000 delay-800 ${
          isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-3xl p-12 border border-purple-500/20 backdrop-blur-sm">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ¿Listo para revolucionar?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Únete a la beta y transforma tu restaurante
            </p>

            <div className="max-w-md mx-auto">
              <form onSubmit={handleBetaSignup} className="space-y-4">
                <Input
                  type="email"
                  placeholder="tu-email@restaurante.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-400 h-12"
                  required
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 font-semibold h-12"
                >
                  Acceso Beta Gratuito
                </Button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                Solo actualizaciones importantes sobre el lanzamiento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  RestaurantOS
                </span>
              </div>
              <p className="text-gray-400">
                Transformando la experiencia gastronómica
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Producto</h4>
              <div className="space-y-2 text-gray-400">
                <div>Características</div>
                <div>Precios</div>
                <div>Demo</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Empresa</h4>
              <div className="space-y-2 text-gray-400">
                <div>Sobre nosotros</div>
                <div>Blog</div>
                <div>Contacto</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Soporte</h4>
              <div className="space-y-2 text-gray-400">
                <div>Centro de ayuda</div>
                <div>Documentación</div>
                <div>Soporte</div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
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
