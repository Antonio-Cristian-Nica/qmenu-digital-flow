import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traducciones
const resources = {
  es: {
    translation: {
      // Navegación
      "nav.demo": "Demo",
      
      // Hero Section
      "hero.badge": "En desarrollo: ¡próximamente!",
      "hero.title1": "Transforma tu",
      "hero.title2": "restaurante",
      "hero.subtitle": "Tus clientes piden y pagan desde la mesa.",
      "hero.subtitle2": "Solo 0,65% de comisión por transacción móvil.",
      "hero.cta": "Mas Información",
      "hero.feature1": "Facil de instalar",
      "hero.feature2": "Setup 5 min",
      "hero.feature3": "Soporte 24/7",
      
      // QR Section
      "qr.title": "¡Escanea y Disfruta!",
      "qr.subtitle": "Sin apps, sin esperas. Solo escanea el QR y comienza a pedir.",
      "qr.step1": "Escanea QR",
      "qr.step2": "Elige platos",
      "qr.step3": "Paga fácil",
      "qr.cta": "Únete a la Beta",
      "qr.badge": "La mejor experiencia",
      
      // How it Works
      "how.title": "Simple para clientes",
      "how.subtitle": "Tres pasos. Cero fricción.",
      "how.step1.title": "Escanea",
      "how.step1.desc": "QR → Menú digital instantáneo",
      "how.step2.title": "Pide",
      "how.step2.desc": "Platos con fotos y descripciones",
      "how.step3.title": "Paga",
      "how.step3.desc": "Móvil seguro o efectivo en caja",
      
      // App Section
      "app.badge": "App Móvil",
      "app.title": "Control total",
      "app.subtitle": "Gestiona pedidos, actualiza menú, genera QR y analiza todo desde una app intuitiva.",
      "app.feature1": "Pedidos en tiempo real",
      "app.feature2": "Estado de platos actualizable",
      "app.feature3": "QR por mesa",
      "app.feature4": "Analytics avanzados",
      "app.feature5": "Gestión de pagos",
      "app.feature6": "Roles de empleados",
      "app.stores": "Próximamente disponible en App Store y Google Play",
      
      // Stats
      "stats.orders": "Pedidos",
      "stats.tables": "Mesas",
      "stats.today": "Hoy",
      "stats.time": "Tiempo",
      
      // FAQ
      "faq.title": "FAQ",
      "faq.q1": "¿Cuánto cuesta?",
      "faq.a1": "Solo 0,65% por pago móvil. Si pagan en caja, gratis. Setup súper fácil y 1€ primer mes, luego 10€/mes.",
      "faq.q2": "¿Cuánto tarda la implementación?",
      "faq.a2": "Setup en 5 minutos. Te ayudamos con menú y configuración de mesas.",
      "faq.q3": "¿Los clientes necesitan una app?",
      "faq.a3": "No. Solo escanean el QR y acceden a la web app. Sin descargas.",
      "faq.q4": "¿Funciona sin internet?",
      "faq.a4": "Modo offline básico para pedidos. Se sincroniza al reconectar.",
      
      // CTA Final
      "cta.title": "¿Listo para revolucionar?",
      "cta.subtitle": "Únete a la beta y transforma tu restaurante",
      "cta.button": "Acceso Beta Gratuito",
      "cta.disclaimer": "Solo actualizaciones importantes sobre el lanzamiento",
      
      // Footer
      "footer.tagline": "Innovando la experiencia gastronómica",
      
      // Form
      "form.title": "Únete a la Beta de Forka",
      "form.subtitle": "Ayúdanos a entender mejor tus necesidades",
      "form.email": "Email",
      "form.email.placeholder": "tu@restaurante.com",
      "form.email.help": "(para contactarte)",
      "form.restaurant": "Nombre del restaurante",
      "form.restaurant.placeholder": "El Rincón Gastronómico",
      "form.restaurant.optional": "(opcional)",
      "form.tables": "Número de mesas",
      "form.tables.placeholder": "15",
      "form.system": "Sistema actual",
      "form.system.placeholder": "TPV tradicional",
      "form.interests": "¿Qué te interesa más?",
      "form.demo": "Quiero una demo personalizada",
      "form.submit": "Unirme a la Beta",
      "form.submitting": "Enviando...",
      
      // Interest options
      "interest.menu": "Menú digital con IA",
      "interest.payments": "Pagos móviles",
      "interest.orders": "Gestión de pedidos",
      "interest.analytics": "Analytics avanzados",
      "interest.delivery": "Integración con delivery",
      "interest.reservations": "Sistema de reservas",
      
      // AI Features
      "ai.badge": "Inteligencia Artificial",
      "ai.title": "IA que trabaja para ti",
      "ai.feature1.title": "Lectura de Menús",
      "ai.feature1.desc": "Sube una foto y la IA extrae platos, ingredientes y alérgenos automáticamente",
      "ai.feature2.title": "Filtros Inteligentes",
      "ai.feature2.desc": "Filtrado por alergias, dietas veganas, sin gluten y preferencias personales",
      "ai.feature3.title": "Analytics Predictivos",
      "ai.feature3.desc": "Platos populares, tiempos de espera y optimización de rendimiento",
      
      // Tech Stack
      "tech.title": "Tecnología de vanguardia",
      
      // Subscription
      "subscription.title": "Suscripción Premium:",
      "subscription.price": "1€ primer mes, luego 10€/mes",
      "subscription.feature1.title": "Menú Digital IA:",
      "subscription.feature1.desc": "OCR + IA extrae platos, ingredientes y alérgenos desde foto; edición y organización manual.",
      "subscription.feature2.title": "Pedidos & Pagos QR:",
      "subscription.feature2.desc": "QRs ilimitados por mesa · Carrito colaborativo con líder de mesa · Split inteligente · Stripe (tarjeta, Apple/Google Pay) + Bizum + pago en caja.",
      "subscription.feature3.title": "App Móvil React Native:",
      "subscription.feature3.desc": "Panel \"Propietario\" (CRUD menú, QRs, ajustes) · Panel \"Empleado\" (ver/actualizar estados de pedido).",
      "subscription.feature4.title": "Dashboard & Analíticas:",
      "subscription.feature4.desc": "Estadísticas en tiempo real · Informes exportables (CSV/PDF) · Gráficas de ingresos, platos más vendidos y tiempos de preparación.",
      "subscription.feature5.title": "IA Avanzada:",
      "subscription.feature5.desc": "Recomendaciones de plato · Filtros por dieta/alérgenos · Predicción de demanda para optimizar stock.",
      "subscription.feature6.title": "Comunicación Instantánea:",
      "subscription.feature6.desc": "Notificaciones WebSocket · Chat ligero cliente–empleado · \"Llamar al camarero\" en la app.",
      "subscription.feature7.title": "Seguridad & Soporte:",
      "subscription.feature7.desc": "Multi‑tenant seguro (roles aislados) · Backups automáticos + GDPR · Soporte Premium 24/7 (< 4 h) · Acceso anticipado a nuevas funciones.",
      
      // Testimonials
      "testimonials.title": "Restaurantes que confían",
      "testimonials.1.name": "María González",
      "testimonials.1.role": "Propietaria, Tapas & Co",
      "testimonials.1.content": "Reducimos 40% el tiempo de pedido. Los clientes están encantados.",
      "testimonials.2.name": "Carlos Ruiz",
      "testimonials.2.role": "Gerente, Bistro Moderno", 
      "testimonials.2.content": "La IA digitalizó nuestro menú en 5 minutos. Increíble.",
      "testimonials.3.name": "Ana Martín",
      "testimonials.3.role": "Chef, El Rincón Verde",
      "testimonials.3.content": "Perfecto para filtrar platos veganos. Clientes más seguros."
    }
  },
  en: {
    translation: {
      // Navigation
      "nav.demo": "Demo",
      
      // Hero Section
      "hero.badge": "In development: coming soon!",
      "hero.title1": "Transform your",
      "hero.title2": "restaurant",
      "hero.subtitle": "Your customers order and pay from their table.",
      "hero.subtitle2": "Only 0.65% commission per mobile transaction.",
      "hero.cta": "More Information",
      "hero.feature1": "Easy to install",
      "hero.feature2": "5 min setup",
      "hero.feature3": "24/7 support",
      
      // QR Section
      "qr.title": "Scan and Enjoy!",
      "qr.subtitle": "No apps, no waiting. Just scan the QR and start ordering.",
      "qr.step1": "Scan QR",
      "qr.step2": "Choose dishes",
      "qr.step3": "Pay easy",
      "qr.cta": "Join Beta",
      "qr.badge": "The best experience",
      
      // How it Works
      "how.title": "Simple for customers",
      "how.subtitle": "Three steps. Zero friction.",
      "how.step1.title": "Scan",
      "how.step1.desc": "QR → Instant digital menu",
      "how.step2.title": "Order",
      "how.step2.desc": "Dishes with photos and descriptions",
      "how.step3.title": "Pay",
      "how.step3.desc": "Secure mobile or cash at counter",
      
      // App Section
      "app.badge": "Mobile App",
      "app.title": "Total control",
      "app.subtitle": "Manage orders, update menu, generate QR and analyze everything from an intuitive app.",
      "app.feature1": "Real-time orders",
      "app.feature2": "Updatable dish status",
      "app.feature3": "QR per table",
      "app.feature4": "Advanced analytics",
      "app.feature5": "Payment management",
      "app.feature6": "Employee roles",
      "app.stores": "Coming soon on App Store and Google Play",
      
      // Stats
      "stats.orders": "Orders",
      "stats.tables": "Tables",
      "stats.today": "Today",
      "stats.time": "Time",
      
      // FAQ
      "faq.title": "FAQ",
      "faq.q1": "How much does it cost?",
      "faq.a1": "Only 0.65% per mobile payment. If they pay at counter, it's free. Super easy setup and €1 first month, then €10/month.",
      "faq.q2": "How long does implementation take?",
      "faq.a2": "5-minute setup. We help you with menu and table configuration.",
      "faq.q3": "Do customers need an app?",
      "faq.a3": "No. They just scan the QR and access the web app. No downloads.",
      "faq.q4": "Does it work without internet?",
      "faq.a4": "Basic offline mode for orders. Syncs when reconnected.",
      
      // CTA Final
      "cta.title": "Ready to revolutionize?",
      "cta.subtitle": "Join the beta and transform your restaurant",
      "cta.button": "Free Beta Access",
      "cta.disclaimer": "Only important updates about the launch",
      
      // Footer
      "footer.tagline": "Innovating the gastronomic experience",
      
      // Form
      "form.title": "Join Forka's Beta",
      "form.subtitle": "Help us better understand your needs",
      "form.email": "Email",
      "form.email.placeholder": "you@restaurant.com",
      "form.email.help": "(to contact you)",
      "form.restaurant": "Restaurant name",
      "form.restaurant.placeholder": "The Gastronomic Corner",
      "form.restaurant.optional": "(optional)",
      "form.tables": "Number of tables",
      "form.tables.placeholder": "15",
      "form.system": "Current system",
      "form.system.placeholder": "Traditional POS",
      "form.interests": "What interests you most?",
      "form.demo": "I want a personalized demo",
      "form.submit": "Join Beta",
      "form.submitting": "Sending...",
      
      // Interest options
      "interest.menu": "AI-powered digital menu",
      "interest.payments": "Mobile payments",
      "interest.orders": "Order management",
      "interest.analytics": "Advanced analytics",
      "interest.delivery": "Delivery integration",
      "interest.reservations": "Reservation system",
      
      // AI Features
      "ai.badge": "Artificial Intelligence",
      "ai.title": "IA that works for you",
      "ai.feature1.title": "Menu Reading",
      "ai.feature1.desc": "Upload a photo and AI automatically extracts dishes, ingredients and allergens",
      "ai.feature2.title": "Smart Filters",
      "ai.feature2.desc": "Filtering by allergies, vegan diets, gluten-free and personal preferences",
      "ai.feature3.title": "Predictive Analytics",
      "ai.feature3.desc": "Popular dishes, waiting times and performance optimization",
      
      // Tech Stack
      "tech.title": "Cutting-edge technology",
      
      // Subscription
      "subscription.title": "Premium Subscription:",
      "subscription.price": "€1 first month, then €10/month",
      "subscription.feature1.title": "AI Digital Menu:",
      "subscription.feature1.desc": "OCR + AI extracts dishes, ingredients and allergens from photo; manual editing and organization.",
      "subscription.feature2.title": "QR Orders & Payments:",
      "subscription.feature2.desc": "Unlimited QRs per table · Collaborative cart with table leader · Smart split · Stripe (card, Apple/Google Pay) + Bizum + cash payment.",
      "subscription.feature3.title": "React Native Mobile App:",
      "subscription.feature3.desc": "\"Owner\" panel (menu CRUD, QRs, settings) · \"Employee\" panel (view/update order statuses).",
      "subscription.feature4.title": "Dashboard & Analytics:",
      "subscription.feature4.desc": "Real-time statistics · Exportable reports (CSV/PDF) · Revenue charts, best-selling dishes and preparation times.",
      "subscription.feature5.title": "Advanced AI:",
      "subscription.feature5.desc": "Dish recommendations · Diet/allergen filters · Demand prediction to optimize stock.",
      "subscription.feature6.title": "Instant Communication:",
      "subscription.feature6.desc": "WebSocket notifications · Light client–employee chat · \"Call waiter\" in app.",
      "subscription.feature7.title": "Security & Support:",
      "subscription.feature7.desc": "Secure multi‑tenant (isolated roles) · Automatic backups + GDPR · Premium 24/7 support (< 4 h) · Early access to new features.",
      
      // Testimonials
      "testimonials.title": "Restaurants that trust us",
      "testimonials.1.name": "María González",
      "testimonials.1.role": "Owner, Tapas & Co",
      "testimonials.1.content": "We reduced order time by 40%. Customers are delighted.",
      "testimonials.2.name": "Carlos Ruiz",
      "testimonials.2.role": "Manager, Modern Bistro", 
      "testimonials.2.content": "AI digitized our menu in 5 minutes. Incredible.",
      "testimonials.3.name": "Ana Martín",
      "testimonials.3.role": "Chef, The Green Corner",
      "testimonials.3.content": "Perfect for filtering vegan dishes. Customers feel safer."
    }
  },
  ro: {
    translation: {
      // Navigation
      "nav.demo": "Demo",
      
      // Hero Section
      "hero.badge": "În dezvoltare: în curând!",
      "hero.title1": "Transformă-ți",
      "hero.title2": "restaurantul",
      "hero.subtitle": "Clienții tăi comandă și plătesc de la masă.",
      "hero.subtitle2": "Doar 0,65% comision per tranzacție mobilă.",
      "hero.cta": "Mai multe informații",
      "hero.feature1": "Ușor de instalat",
      "hero.feature2": "Configurare 5 min",
      "hero.feature3": "Suport 24/7",
      
      // QR Section
      "qr.title": "Scanează și bucură-te!",
      "qr.subtitle": "Fără aplicații, fără așteptare. Doar scanează QR-ul și începe să comanzi.",
      "qr.step1": "Scanează QR",
      "qr.step2": "Alege mâncarea",
      "qr.step3": "Plătește ușor",
      "qr.cta": "Alătură-te Beta",
      "qr.badge": "Cea mai bună experiență",
      
      // How it Works
      "how.title": "Simplu pentru clienți",
      "how.subtitle": "Trei pași. Zero fricțiune.",
      "how.step1.title": "Scanează",
      "how.step1.desc": "QR → Meniu digital instant",
      "how.step2.title": "Comandă",
      "how.step2.desc": "Mâncăruri cu poze și descrieri",
      "how.step3.title": "Plătește",
      "how.step3.desc": "Mobil securizat sau cash la casă",
      
      // App Section
      "app.badge": "Aplicație Mobilă",
      "app.title": "Control total",
      "app.subtitle": "Gestionează comenzile, actualizează meniul, generează QR și analizează totul dintr-o aplicație intuitivă.",
      "app.feature1": "Comenzi în timp real",
      "app.feature2": "Status mâncăruri actualizabil",
      "app.feature3": "QR per masă",
      "app.feature4": "Analize avansate",
      "app.feature5": "Gestiunea plăților",
      "app.feature6": "Roluri angajați",
      "app.stores": "În curând disponibilă pe App Store și Google Play",
      
      // Stats
      "stats.orders": "Comenzi",
      "stats.tables": "Mese",
      "stats.today": "Astăzi",
      "stats.time": "Timp",
      
      // FAQ
      "faq.title": "Întrebări frecvente",
      "faq.q1": "Cât costă?",
      "faq.a1": "Doar 0,65% per plată mobilă. Dacă plătesc la casă, gratis. Configurare super ușoară și 1€ prima lună, apoi 10€/lună.",
      "faq.q2": "Cât durează implementarea?",
      "faq.a2": "Configurare în 5 minute. Te ajutăm cu meniul și configurarea meselor.",
      "faq.q3": "Clienții au nevoie de o aplicație?",
      "faq.a3": "Nu. Doar scanează QR-ul și accesează aplicația web. Fără descărcări.",
      "faq.q4": "Funcționează fără internet?",
      "faq.a4": "Mod offline de bază pentru comenzi. Se sincronizează la reconectare.",
      
      // CTA Final
      "cta.title": "Gata să revoluționezi?",
      "cta.subtitle": "Alătură-te beta și transformă-ți restaurantul",
      "cta.button": "Acces Beta Gratuit",
      "cta.disclaimer": "Doar actualizări importante despre lansare",
      
      // Footer
      "footer.tagline": "Inovând experiența gastronomică",
      
      // Form
      "form.title": "Alătură-te Beta Forka",
      "form.subtitle": "Ajută-ne să înțelegem mai bine nevoile tale",
      "form.email": "Email",
      "form.email.placeholder": "tu@restaurant.ro",
      "form.email.help": "(pentru a te contacta)",
      "form.restaurant": "Numele restaurantului",
      "form.restaurant.placeholder": "Colțul Gastronomic",
      "form.restaurant.optional": "(opțional)",
      "form.tables": "Numărul de mese",
      "form.tables.placeholder": "15",
      "form.system": "Sistemul actual",
      "form.system.placeholder": "POS tradițional",
      "form.interests": "Ce te interesează cel mai mult?",
      "form.demo": "Vreau o demonstrație personalizată",
      "form.submit": "Alătură-te Beta",
      "form.submitting": "Se trimite...",
      
      // Interest options
      "interest.menu": "Meniu digital cu AI",
      "interest.payments": "Plăți mobile",
      "interest.orders": "Gestiunea comenzilor",
      "interest.analytics": "Analize avansate",
      "interest.delivery": "Integrare cu livrarea",
      "interest.reservations": "Sistem de rezervări",
      
      // AI Features
      "ai.badge": "Inteligență Artificială",
      "ai.title": "AI care lucrează pentru tine",
      "ai.feature1.title": "Citirea Meniurilor",
      "ai.feature1.desc": "Încarcă o poză și AI extrage automat mâncărurile, ingredientele și alergenii",
      "ai.feature2.title": "Filtre Inteligente",
      "ai.feature2.desc": "Filtrare după alergii, diete vegane, fără gluten și preferințe personale",
      "ai.feature3.title": "Analize Predictive",
      "ai.feature3.desc": "Mâncăruri populare, timpii de așteptare și optimizarea performanței",
      
      // Tech Stack
      "tech.title": "Tehnologie de ultimă generație",
      
      // Subscription
      "subscription.title": "Abonament Premium:",
      "subscription.price": "1€ prima lună, apoi 10€/lună",
      "subscription.feature1.title": "Meniu Digital AI:",
      "subscription.feature1.desc": "OCR + AI extrage mâncăruri, ingrediente și alergeni din poză; editare și organizare manuală.",
      "subscription.feature2.title": "Comenzi & Plăți QR:",
      "subscription.feature2.desc": "QR-uri nelimitate pe masă · Coș colaborativ cu liderul mesei · Împărțire inteligentă · Stripe (card, Apple/Google Pay) + Bizum + plată cash.",
      "subscription.feature3.title": "Aplicație Mobilă React Native:",
      "subscription.feature3.desc": "Panoul \"Proprietar\" (CRUD meniu, QR-uri, setări) · Panoul \"Angajat\" (vezi/actualizează statusurile comenzilor).",
      "subscription.feature4.title": "Dashboard & Analize:",
      "subscription.feature4.desc": "Statistici în timp real · Rapoarte exportabile (CSV/PDF) · Grafice de venituri, mâncăruri best-seller și timpii de preparare.",
      "subscription.feature5.title": "AI Avansat:",
      "subscription.feature5.desc": "Recomandări de mâncăruri · Filtre pentru dietă/alergeni · Predicția cererii pentru optimizarea stocului.",
      "subscription.feature6.title": "Comunicare Instantanee:",
      "subscription.feature6.desc": "Notificări WebSocket · Chat ușor client–angajat · \"Cheamă ospătarul\" în aplicație.",
      "subscription.feature7.title": "Securitate & Suport:",
      "subscription.feature7.desc": "Multi‑tenant securizat (roluri izolate) · Backup-uri automate + GDPR · Suport Premium 24/7 (< 4 h) · Acces timpuriu la funcții noi.",
      
      // Testimonials
      "testimonials.title": "Restaurante care au încredere",
      "testimonials.1.name": "María González",
      "testimonials.1.role": "Proprietară, Tapas & Co",
      "testimonials.1.content": "Am redus timpul de comandă cu 40%. Clienții sunt încântați.",
      "testimonials.2.name": "Carlos Ruiz",
      "testimonials.2.role": "Manager, Bistro Modern", 
      "testimonials.2.content": "AI a digitalizat meniul nostru în 5 minute. Incredibil.",
      "testimonials.3.name": "Ana Martín",
      "testimonials.3.role": "Chef, Colțul Verde",
      "testimonials.3.content": "Perfect pentru filtrarea mâncărurilor vegane. Clienții se simt mai în siguranță."
    }
  },
  fr: {
    translation: {
      // Navigation
      "nav.demo": "Démo",
      
      // Hero Section
      "hero.badge": "En développement : bientôt disponible !",
      "hero.title1": "Transformez votre",
      "hero.title2": "restaurant",
      "hero.subtitle": "Vos clients commandent et paient depuis leur table.",
      "hero.subtitle2": "Seulement 0,65% de commission par transaction mobile.",
      "hero.cta": "Plus d'informations",
      "hero.feature1": "Facile à installer",
      "hero.feature2": "Configuration 5 min",
      "hero.feature3": "Support 24/7",
      
      // QR Section
      "qr.title": "Scannez et profitez !",
      "qr.subtitle": "Pas d'applications, pas d'attente. Il suffit de scanner le QR et de commencer à commander.",
      "qr.step1": "Scanner QR",
      "qr.step2": "Choisir plats",
      "qr.step3": "Payer facilement",
      "qr.cta": "Rejoindre la Bêta",
      "qr.badge": "La meilleure expérience",
      
      // How it Works
      "how.title": "Simple pour les clients",
      "how.subtitle": "Trois étapes. Zéro friction.",
      "how.step1.title": "Scanner",
      "how.step1.desc": "QR → Menu numérique instantané",
      "how.step2.title": "Commander",
      "how.step2.desc": "Plats avec photos et descriptions",
      "how.step3.title": "Payer",
      "how.step3.desc": "Mobile sécurisé ou espèces au comptoir",
      
      // App Section
      "app.badge": "Application Mobile",
      "app.title": "Contrôle total",
      "app.subtitle": "Gérez les commandes, mettez à jour le menu, générez des QR et analysez tout depuis une application intuitive.",
      "app.feature1": "Commandes en temps réel",
      "app.feature2": "Statut des plats modifiable",
      "app.feature3": "QR par table",
      "app.feature4": "Analyses avancées",
      "app.feature5": "Gestion des paiements",
      "app.feature6": "Rôles des employés",
      "app.stores": "Bientôt disponible sur App Store et Google Play",
      
      // Stats
      "stats.orders": "Commandes",
      "stats.tables": "Tables",
      "stats.today": "Aujourd'hui",
      "stats.time": "Temps",
      
      // FAQ
      "faq.title": "FAQ",
      "faq.q1": "Combien ça coûte ?",
      "faq.a1": "Seulement 0,65% par paiement mobile. S'ils paient au comptoir, c'est gratuit. Configuration super facile et 1€ le premier mois, puis 10€/mois.",
      "faq.q2": "Combien de temps prend l'implémentation ?",
      "faq.a2": "Configuration en 5 minutes. Nous vous aidons avec le menu et la configuration des tables.",
      "faq.q3": "Les clients ont-ils besoin d'une application ?",
      "faq.a3": "Non. Ils scannent simplement le QR et accèdent à l'application web. Pas de téléchargements.",
      "faq.q4": "Ça marche sans internet ?",
      "faq.a4": "Mode hors ligne basique pour les commandes. Se synchronise à la reconnexion.",
      
      // CTA Final
      "cta.title": "Prêt à révolutionner ?",
      "cta.subtitle": "Rejoignez la bêta et transformez votre restaurant",
      "cta.button": "Accès Bêta Gratuit",
      "cta.disclaimer": "Seulement les mises à jour importantes sur le lancement",
      
      // Footer
      "footer.tagline": "Innover l'expérience gastronomique",
      
      // Form
      "form.title": "Rejoindre la Bêta de Forka",
      "form.subtitle": "Aidez-nous à mieux comprendre vos besoins",
      "form.email": "Email",
      "form.email.placeholder": "vous@restaurant.fr",
      "form.email.help": "(pour vous contacter)",
      "form.restaurant": "Nom du restaurant",
      "form.restaurant.placeholder": "Le Coin Gastronomique",
      "form.restaurant.optional": "(optionnel)",
      "form.tables": "Nombre de tables",
      "form.tables.placeholder": "15",
      "form.system": "Système actuel",
      "form.system.placeholder": "TPV traditionnel",
      "form.interests": "Qu'est-ce qui vous intéresse le plus ?",
      "form.demo": "Je veux une démo personnalisée",
      "form.submit": "Rejoindre la Bêta",
      "form.submitting": "Envoi...",
      
      // Interest options
      "interest.menu": "Menu numérique avec IA",
      "interest.payments": "Paiements mobiles",
      "interest.orders": "Gestion des commandes",
      "interest.analytics": "Analyses avancées",
      "interest.delivery": "Intégration livraison",
      "interest.reservations": "Système de réservations",
      
      // AI Features
      "ai.badge": "Intelligence Artificielle",
      "ai.title": "IA qui travaille pour vous",
      "ai.feature1.title": "Lecture de Menus",
      "ai.feature1.desc": "Téléchargez une photo et l'IA extrait automatiquement les plats, ingrédients et allergènes",
      "ai.feature2.title": "Filtres Intelligents",
      "ai.feature2.desc": "Filtrage par allergies, régimes végans, sans gluten et préférences personnelles",
      "ai.feature3.title": "Analyses Prédictives",
      "ai.feature3.desc": "Plats populaires, temps d'attente et optimisation des performances",
      
      // Tech Stack
      "tech.title": "Technologie de pointe",
      
      // Subscription
      "subscription.title": "Abonnement Premium :",
      "subscription.price": "1€ le premier mois, puis 10€/mois",
      "subscription.feature1.title": "Menu Numérique IA :",
      "subscription.feature1.desc": "OCR + IA extrait plats, ingrédients et allergènes depuis photo ; édition et organisation manuelle.",
      "subscription.feature2.title": "Commandes & Paiements QR :",
      "subscription.feature2.desc": "QR illimités par table · Panier collaboratif avec leader de table · Split intelligent · Stripe (carte, Apple/Google Pay) + Bizum + paiement comptant.",
      "subscription.feature3.title": "Application Mobile React Native :",
      "subscription.feature3.desc": "Panneau \"Propriétaire\" (CRUD menu, QR, paramètres) · Panneau \"Employé\" (voir/mettre à jour statuts commandes).",
      "subscription.feature4.title": "Tableau de Bord & Analyses :",
      "subscription.feature4.desc": "Statistiques temps réel · Rapports exportables (CSV/PDF) · Graphiques revenus, plats best-sellers et temps préparation.",
      "subscription.feature5.title": "IA Avancée :",
      "subscription.feature5.desc": "Recommandations de plats · Filtres régime/allergènes · Prédiction demande pour optimiser stock.",
      "subscription.feature6.title": "Communication Instantanée :",
      "subscription.feature6.desc": "Notifications WebSocket · Chat léger client–employé · \"Appeler serveur\" dans app.",
      "subscription.feature7.title": "Sécurité & Support :",
      "subscription.feature7.desc": "Multi‑tenant sécurisé (rôles isolés) · Sauvegardes automatiques + RGPD · Support Premium 24/7 (< 4 h) · Accès anticipé nouvelles fonctions.",
      
      // Testimonials
      "testimonials.title": "Restaurants qui nous font confiance",
      "testimonials.1.name": "María González",
      "testimonials.1.role": "Propriétaire, Tapas & Co",
      "testimonials.1.content": "Nous avons réduit le temps de commande de 40%. Les clients sont ravis.",
      "testimonials.2.name": "Carlos Ruiz",
      "testimonials.2.role": "Manager, Bistro Moderne", 
      "testimonials.2.content": "L'IA a numérisé notre menu en 5 minutes. Incroyable.",
      "testimonials.3.name": "Ana Martín",
      "testimonials.3.role": "Chef, Le Coin Vert",
      "testimonials.3.content": "Parfait pour filtrer les plats végans. Les clients se sentent plus en sécurité."
    }
  },
  it: {
    translation: {
      // Navigation
      "nav.demo": "Demo",
      
      // Hero Section
      "hero.badge": "In sviluppo: presto disponibile!",
      "hero.title1": "Trasforma il tuo",
      "hero.title2": "ristorante",
      "hero.subtitle": "I tuoi clienti ordinano e pagano dal tavolo.",
      "hero.subtitle2": "Solo 0,65% di commissione per transazione mobile.",
      "hero.cta": "Maggiori informazioni",
      "hero.feature1": "Facile da installare",
      "hero.feature2": "Setup 5 min",
      "hero.feature3": "Supporto 24/7",
      
      // QR Section
      "qr.title": "Scansiona e goditi!",
      "qr.subtitle": "Nessuna app, nessuna attesa. Basta scansionare il QR e iniziare a ordinare.",
      "qr.step1": "Scansiona QR",
      "qr.step2": "Scegli piatti",
      "qr.step3": "Paga facilmente",
      "qr.cta": "Unisciti alla Beta",
      "qr.badge": "La migliore esperienza",
      
      // How it Works
      "how.title": "Semplice per i clienti",
      "how.subtitle": "Tre passi. Zero attrito.",
      "how.step1.title": "Scansiona",
      "how.step1.desc": "QR → Menu digitale istantaneo",
      "how.step2.title": "Ordina",
      "how.step2.desc": "Piatti con foto e descrizioni",
      "how.step3.title": "Paga",
      "how.step3.desc": "Mobile sicuro o contanti alla cassa",
      
      // App Section
      "app.badge": "App Mobile",
      "app.title": "Controllo totale",
      "app.subtitle": "Gestisci ordini, aggiorna menu, genera QR e analizza tutto da un'app intuitiva.",
      "app.feature1": "Ordini in tempo reale",
      "app.feature2": "Stato piatti aggiornabile",
      "app.feature3": "QR per tavolo",
      "app.feature4": "Analisi avanzate",
      "app.feature5": "Gestione pagamenti",
      "app.feature6": "Ruoli dipendenti",
      "app.stores": "Presto disponibile su App Store e Google Play",
      
      // Stats
      "stats.orders": "Ordini",
      "stats.tables": "Tavoli",
      "stats.today": "Oggi",
      "stats.time": "Tempo",
      
      // FAQ
      "faq.title": "FAQ",
      "faq.q1": "Quanto costa?",
      "faq.a1": "Solo 0,65% per pagamento mobile. Se pagano alla cassa, è gratis. Setup super facile e 1€ primo mese, poi 10€/mese.",
      "faq.q2": "Quanto tempo richiede l'implementazione?",
      "faq.a2": "Setup in 5 minuti. Ti aiutiamo con menu e configurazione tavoli.",
      "faq.q3": "I clienti hanno bisogno di un'app?",
      "faq.a3": "No. Basta scansionare il QR e accedere alla web app. Nessun download.",
      "faq.q4": "Funziona senza internet?",
      "faq.a4": "Modalità offline base per ordini. Si sincronizza alla riconnessione.",
      
      // CTA Final
      "cta.title": "Pronto a rivoluzionare?",
      "cta.subtitle": "Unisciti alla beta e trasforma il tuo ristorante",
      "cta.button": "Accesso Beta Gratuito",
      "cta.disclaimer": "Solo aggiornamenti importanti sul lancio",
      
      // Footer
      "footer.tagline": "Innovando l'esperienza gastronomica",
      
      // Form
      "form.title": "Unisciti alla Beta di Forka",
      "form.subtitle": "Aiutaci a capire meglio le tue esigenze",
      "form.email": "Email",
      "form.email.placeholder": "tu@ristorante.it",
      "form.email.help": "(per contattarti)",
      "form.restaurant": "Nome del ristorante",
      "form.restaurant.placeholder": "L'Angolo Gastronomico",
      "form.restaurant.optional": "(opzionale)",
      "form.tables": "Numero di tavoli",
      "form.tables.placeholder": "15",
      "form.system": "Sistema attuale",
      "form.system.placeholder": "POS tradizionale",
      "form.interests": "Cosa ti interessa di più?",
      "form.demo": "Voglio una demo personalizzata",
      "form.submit": "Unisciti alla Beta",
      "form.submitting": "Invio...",
      
      // Interest options
      "interest.menu": "Menu digitale con IA",
      "interest.payments": "Pagamenti mobili",
      "interest.orders": "Gestione ordini",
      "interest.analytics": "Analisi avanzate",
      "interest.delivery": "Integrazione delivery",
      "interest.reservations": "Sistema prenotazioni",
      
      // AI Features
      "ai.badge": "Intelligenza Artificiale",
      "ai.title": "IA che lavora per te",
      "ai.feature1.title": "Lettura Menu",
      "ai.feature1.desc": "Carica una foto e l'IA estrae automaticamente piatti, ingredienti e allergeni",
      "ai.feature2.title": "Filtri Intelligenti",
      "ai.feature2.desc": "Filtraggio per allergie, diete vegane, senza glutine e preferenze personali",
      "ai.feature3.title": "Analisi Predittive",
      "ai.feature3.desc": "Piatti popolari, tempi di attesa e ottimizzazione delle prestazioni",
      
      // Tech Stack
      "tech.title": "Tecnologia all'avanguardia",
      
      // Subscription
      "subscription.title": "Abbonamento Premium:",
      "subscription.price": "1€ primo mese, poi 10€/mese",
      "subscription.feature1.title": "Menu Digitale IA:",
      "subscription.feature1.desc": "OCR + IA estrae piatti, ingredienti e allergeni da foto; editing e organizzazione manuale.",
      "subscription.feature2.title": "Ordini & Pagamenti QR:",
      "subscription.feature2.desc": "QR illimitati per tavolo · Carrello collaborativo con leader tavolo · Split intelligente · Stripe (carta, Apple/Google Pay) + Bizum + pagamento contanti.",
      "subscription.feature3.title": "App Mobile React Native:",
      "subscription.feature3.desc": "Pannello \"Proprietario\" (CRUD menu, QR, impostazioni) · Pannello \"Dipendente\" (vedi/aggiorna stati ordini).",
      "subscription.feature4.title": "Dashboard & Analisi:",
      "subscription.feature4.desc": "Statistiche tempo reale · Report esportabili (CSV/PDF) · Grafici ricavi, piatti più venduti e tempi preparazione.",
      "subscription.feature5.title": "IA Avanzata:",
      "subscription.feature5.desc": "Raccomandazioni piatti · Filtri dieta/allergeni · Previsione domanda per ottimizzare stock.",
      "subscription.feature6.title": "Comunicazione Istantanea:",
      "subscription.feature6.desc": "Notifiche WebSocket · Chat leggera cliente–dipendente · \"Chiama cameriere\" nell'app.",
      "subscription.feature7.title": "Sicurezza & Supporto:",
      "subscription.feature7.desc": "Multi‑tenant sicuro (ruoli isolati) · Backup automatici + GDPR · Supporto Premium 24/7 (< 4 h) · Accesso anticipato nuove funzioni.",
      
      // Testimonials
      "testimonials.title": "Ristoranti che si fidano",
      "testimonials.1.name": "María González",
      "testimonials.1.role": "Proprietaria, Tapas & Co",
      "testimonials.1.content": "Abbiamo ridotto del 40% il tempo di ordinazione. I clienti sono entusiasti.",
      "testimonials.2.name": "Carlos Ruiz",
      "testimonials.2.role": "Manager, Bistro Moderno", 
      "testimonials.2.content": "L'IA ha digitalizzato il nostro menu in 5 minuti. Incredibile.",
      "testimonials.3.name": "Ana Martín",
      "testimonials.3.role": "Chef, L'Angolo Verde",
      "testimonials.3.content": "Perfetto per filtrare piatti vegani. I clienti si sentono più sicuri."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto
    debug: false,
    
    detection: {
      order: ['navigator', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },

    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
