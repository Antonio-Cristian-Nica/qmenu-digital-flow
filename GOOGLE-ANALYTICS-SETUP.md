# 📊 Configuración de Google Analytics

## 🎯 Configuración Inicial

### 1. Crear Cuenta de Google Analytics
1. Ve a [Google Analytics](https://analytics.google.com/)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en "Empezar a medir"
4. Configura tu cuenta y propiedad

### 2. Configurar Propiedad para tu Sitio Web
1. Selecciona "Web" como plataforma
2. Configura tu sitio web:
   - **Nombre del sitio web**: Forka
   - **URL del sitio web**: https://tu-dominio.com
   - **Categoría del sector**: Restaurante/Alimentación
   - **Zona horaria**: Tu zona horaria

### 3. Obtener ID de Medición
1. Después de crear la propiedad, ve a **Administración**
2. En la columna "Propiedad", selecciona **Flujos de datos**
3. Haz clic en tu flujo de datos web
4. Copia el **ID de medición** (formato: G-XXXXXXXXXX)

### 4. Configurar Variables de Entorno
1. Abre el archivo `.env.production`
2. Reemplaza `G-XXXXXXXXXX` con tu ID real:
   ```
   VITE_GA_MEASUREMENT_ID=G-TU_ID_REAL
   ```

## 📈 Eventos que se Trackean Automáticamente

### Eventos Personalizados Configurados:
- **form_submit**: Cuando un usuario envía el formulario
- **form_success**: Cuando el formulario se envía exitosamente
- **form_error**: Cuando hay un error en el envío

### Parámetros que se Envían:
- `form_name`: Nombre del formulario
- `has_restaurant_name`: Si completó el nombre del restaurante
- `has_table_count`: Si completó el número de mesas
- `interests_count`: Número de intereses seleccionados
- `wants_demo`: Si solicitó una demo

## 🎨 Agregar Más Eventos

Para trackear eventos adicionales en cualquier componente:

```typescript
import { trackGAEvent } from '@/hooks/useGoogleAnalytics';

// Trackear un botón clickeado
const handleButtonClick = () => {
  trackGAEvent('button_click', {
    button_name: 'cta_header',
    section: 'hero'
  });
};

// Trackear scroll a una sección
const handleSectionView = () => {
  trackGAEvent('section_view', {
    section_name: 'pricing',
    scroll_depth: '50%'
  });
};
```

## 📊 Métricas Importantes que Puedes Ver

### En Google Analytics podrás ver:
- **Usuarios únicos**: Cuántas personas visitan tu sitio
- **Sesiones**: Cuántas veces visitan tu sitio
- **Páginas vistas**: Qué páginas son más populares
- **Tiempo en el sitio**: Cuánto tiempo pasan los usuarios
- **Dispositivos**: Móvil vs Desktop
- **Ubicación**: De dónde vienen tus visitantes
- **Fuentes de tráfico**: Cómo llegan a tu sitio

### Eventos Personalizados:
- **Formularios enviados**: Cuántos leads generas
- **Errores en formularios**: Dónde pierdes usuarios
- **Intereses más populares**: Qué servicios interesan más
- **Solicitudes de demo**: Cuántos quieren una demostración

## 🚀 Despliegue

1. **Configurar variables de entorno**:
   ```bash
   # En .env.production
   VITE_GA_MEASUREMENT_ID=G-TU_ID_REAL
   ```

2. **Construir para producción**:
   ```bash
   npm run build
   ```

3. **Verificar que funciona**:
   - Ve a tu sitio web
   - Abre las herramientas de desarrollador (F12)
   - Ve a la pestaña "Network"
   - Interactúa con tu sitio
   - Deberías ver requests a `google-analytics.com`

## 🔧 Solución de Problemas

### ❌ Google Analytics no está funcionando:
1. Verifica que el ID de medición sea correcto
2. Asegúrate de que las variables de entorno estén configuradas
3. Revisa la consola del navegador para errores
4. Verifica que el dominio esté configurado correctamente

### ❌ No veo datos en Google Analytics:
1. Los datos pueden tardar 24-48 horas en aparecer
2. Usa el "Informe en tiempo real" para ver actividad inmediata
3. Verifica que no tengas bloqueadores de anuncios activos

### ❌ Eventos personalizados no aparecen:
1. Ve a **Configuración** > **Eventos personalizados**
2. Verifica que los nombres de eventos coincidan
3. Los eventos pueden tardar unas horas en aparecer

## 📝 Próximos Pasos

1. **Configurar Objetivos**: Para medir conversiones específicas
2. **Configurar Audiencias**: Para segmentar usuarios
3. **Conectar con Google Ads**: Para remarketing
4. **Configurar Alertas**: Para notificaciones automáticas

¡Con esta configuración tendrás control completo sobre la actividad de tu sitio web! 🎉
