# 📋 Configuración de Envío de Formularios

Este documento explica cómo configurar el envío de datos del formulario a diferentes servicios.

## 🎯 Opciones de Configuración

### 1. Google Apps Script (Recomendado)

Es la opción más fácil y confiable para conectar con Google Sheets.

#### Pasos de configuración:

1. **Crear Google Spreadsheet**
   - Ve a [sheets.google.com](https://sheets.google.com)
   - Crea una nueva hoja de cálculo
   - Copia el ID de la URL (la parte entre `/d/` y `/edit`)

2. **Crear Google Apps Script**
   - Ve a [script.google.com](https://script.google.com)
   - Nuevo proyecto → "Proyecto sin título"
   - Borra el código existente
   - Copia y pega el código de `google-apps-script.js`
   - Reemplaza `TU_SPREADSHEET_ID_AQUI` con el ID de tu hoja

3. **Implementar como Web App**
   - Implementar → Nueva implementación
   - Tipo: Aplicación web
   - Ejecutar como: tu cuenta de email
   - Quién tiene acceso: Cualquiera
   - Click en "Implementar"
   - Copia la URL de la aplicación web

4. **Configurar en el proyecto**
   - Abre el archivo `.env`
   - Pega la URL en `VITE_GOOGLE_APPS_SCRIPT_URL`

### 2. Google Forms + Sheets

Alternativa usando Google Forms existente.

#### Pasos de configuración:

1. **Crear Google Form**
   - Ve a [forms.google.com](https://forms.google.com)
   - Crea un nuevo formulario
   - Añade campos que coincidan con el formulario web

2. **Conectar con Sheets**
   - En el formulario: Respuestas → Crear hoja de cálculo

3. **Obtener URL de envío**
   - Inspecciona elemento en el botón "Enviar" del formulario
   - Busca la URL que termina en `/formResponse`
   - Copia esta URL

4. **Configurar en el proyecto**
   - Abre el archivo `.env`
   - Pega la URL en `VITE_GOOGLE_SHEETS_URL`

### 3. API Custom

Si tienes tu propio backend.

#### Configuración:

1. **Endpoint esperado**: `POST /api/surveys`
2. **Formato de datos**:
```json
{
  "email": "usuario@ejemplo.com",
  "restaurantName": "Mi Restaurante",
  "tableCount": "10",
  "currentSystem": "Manual",
  "interests": ["Menú digital", "Pagos móviles"],
  "wantsDemo": true,
  "timestamp": "2025-07-02T10:30:00.000Z",
  "source": "forka-landing"
}
```

3. **Configurar en el proyecto**
   - Abre el archivo `.env`
   - Configura `VITE_API_URL` con tu dominio

## 🧪 Testing

### Probar Google Apps Script

1. En el editor de Apps Script, ejecuta la función `testScript()`
2. Verifica que aparezca una nueva fila en tu Google Sheet

### Probar en la aplicación

1. Llena el formulario en la landing page
2. Envía los datos
3. Verifica en la consola del navegador (F12) los logs de envío
4. Confirma que los datos aparezcan en Google Sheets

## 🔧 Troubleshooting

### Error: "Google Apps Script URL not configured"
- Verifica que hayas configurado `VITE_GOOGLE_APPS_SCRIPT_URL` en el archivo `.env`
- Reinicia el servidor de desarrollo después de cambiar el `.env`

### Error: "Access denied"
- Asegúrate de que la aplicación web esté configurada con acceso "Cualquiera"
- Verifica que hayas autorizado el script

### Los datos no aparecen en Sheets
- Verifica el ID del Spreadsheet en el código de Apps Script
- Ejecuta `testScript()` para probar manualmente
- Revisa los logs en Apps Script (Ver → Registros de ejecución)

## 📁 Archivos Importantes

- `.env` - Variables de entorno (no subir a git)
- `.env.example` - Ejemplo de configuración
- `src/services/api.ts` - Servicios de envío
- `src/hooks/useSurvey.ts` - Hook principal del formulario
- `google-apps-script.js` - Código para Google Apps Script

## 🔒 Seguridad

- El archivo `.env` está en `.gitignore` para evitar exponer URLs
- Google Apps Script valida automáticamente el origen
- Los datos se almacenan localmente como backup
