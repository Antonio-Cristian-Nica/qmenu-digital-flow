# Internacionalización (i18n) - Forka

## 🌍 Idiomas Soportados

El sitio web de Forka ahora soporta automáticamente **5 idiomas**:

- 🇪🇸 **Español** (por defecto)
- 🇺🇸 **English**
- 🇫🇷 **Français**
- 🇮🇹 **Italiano**
- 🇷🇴 **Română**

## 🚀 Detección Automática

La página **detecta automáticamente** el idioma del navegador y muestra el contenido en el idioma preferido del usuario:

1. **Detección automática**: Usa el idioma configurado en el navegador
2. **Memoria local**: Recuerda la selección manual del usuario
3. **Idioma de respaldo**: Si no encuentra el idioma, usa español por defecto

## 🔧 Selector Manual

Los usuarios pueden cambiar manualmente el idioma usando:
- **Icono de globo** (🌐) en la barra de navegación superior
- **Menú desplegable** con todos los idiomas disponibles
- **Persistencia**: La selección se guarda localmente

## 🎯 Cobertura Completa

**Todo el contenido está traducido**:
- ✅ Navegación
- ✅ Sección Hero
- ✅ Características QR
- ✅ Cómo Funciona
- ✅ App Mobile
- ✅ Funciones IA
- ✅ FAQ
- ✅ Formulario de registro
- ✅ CTA y Footer
- ✅ Testimonios

## 🛠️ Implementación Técnica

### Tecnologías Usadas
- **react-i18next**: Biblioteca principal de internacionalización
- **i18next-browser-languagedetector**: Detección automática del idioma
- **i18next-http-backend**: Carga de traducciones (futuro uso)

### Archivos Principales
- `/src/i18n/index.ts`: Configuración y todas las traducciones
- `/src/components/LanguageSwitcher.tsx`: Selector de idioma
- `/src/main.tsx`: Inicialización del sistema i18n

## 📖 Cómo Usar

### Para Desarrolladores
```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return <h1>{t('hero.title')}</h1>;
}
```

### Para Usuarios
1. **Automático**: El sitio se mostrará en tu idioma del navegador
2. **Manual**: Haz clic en 🌐 en la esquina superior derecha
3. **Selecciona** tu idioma preferido del menú

## 🔄 Cómo Agregar Nuevos Idiomas

1. Edita `/src/i18n/index.ts`
2. Agrega el nuevo objeto de idioma con todas las claves de traducción
3. Actualiza `/src/components/LanguageSwitcher.tsx` con el nuevo idioma
4. Reinicia el servidor de desarrollo

## 🌟 Características Avanzadas

- **Detección inteligente**: Prioriza navegador → localStorage → HTML lang
- **Fallback robusto**: Siempre muestra contenido, nunca claves de traducción
- **Rendimiento optimizado**: Traducciones cargadas solo cuando se necesitan
- **SEO amigable**: Soporte futuro para URLs localizadas

## 🎉 Resultado

Ahora **Forka es accesible globalmente**, ofreciendo una experiencia localizada para usuarios de diferentes países y culturas, aumentando significativamente el alcance y la usabilidad del producto.
