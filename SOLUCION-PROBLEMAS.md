# 🔧 Solución de Problemas - Formulario no se guarda

## 📋 **Checklist de Diagnóstico**

### ✅ **Paso 1: Verificar configuración actual**

1. **Abre la aplicación** en http://localhost:8080
2. **Abre la consola** del navegador (F12 → Console)
3. **Llena el formulario** y envíalo
4. **Busca en la consola** estos mensajes:

```
🔍 Form Submission Debug
📧 Email: [tu-email]
🏪 Restaurant: [nombre]
...
❌ Google Apps Script submission failed: Google Apps Script URL not configured
```

### ✅ **Paso 2: Configurar Google Apps Script**

Si ves "Google Apps Script URL not configured":

1. **Ve a** https://script.google.com
2. **Crear nuevo proyecto**
3. **Borra todo** el código predeterminado
4. **Copia y pega** el contenido completo de `google-apps-script.js`
5. **Guardar** (Ctrl+S)

### ✅ **Paso 3: Implementar como Web App**

1. **Implementar** → **Nueva implementación**
2. **Tipo**: Aplicación web
3. **Ejecutar como**: Tu dirección de email
4. **Quién tiene acceso**: **Cualquiera** (¡Importante!)
5. **Implementar**
6. **Autorizar acceso** (Google te pedirá permisos)
7. **Copiar la URL** que aparece (algo como: `https://script.google.com/macros/s/AKfycby.../exec`)

### ✅ **Paso 4: Configurar en el proyecto**

1. **Abre** `.env` en VS Code
2. **Pega la URL** en:
```
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/TU_URL_AQUI/exec
```
3. **Guarda** el archivo
4. **Reinicia el servidor**:
```bash
# Detener el servidor (Ctrl+C)
npm run dev
```

### ✅ **Paso 5: Probar nuevamente**

1. **Llena el formulario** otra vez
2. **Revisa la consola** - deberías ver:
```
✅ Google Apps Script submission successful
```
3. **Verifica tu Google Sheets** - debe aparecer una nueva fila

## 🚨 **Problemas Comunes y Soluciones**

### Error: "Access denied" o "Permission denied"
**Solución:**
1. En Google Apps Script → **Ejecutar** → `testScript`
2. **Autorizar** todos los permisos que pida
3. Verificar que la implementación tenga acceso "Cualquiera"

### Error: "The script completed but did not return anything"
**Solución:**
1. Verificar que el código esté completo en Apps Script
2. Asegurar que la función `doPost` exista
3. Verificar que el SPREADSHEET_ID sea correcto

### Error: "Invalid range" o "Spreadsheet not found"
**Solución:**
1. Verificar que el ID del Spreadsheet sea correcto: `1ewzzbgjD7z0NJOOiqBGibDCSk_xK-rt3JYBkpjeNIng`
2. Asegurar que tienes permisos de edición en la hoja

### Los datos aparecen en localStorage pero no en Google Sheets
**Solución:**
1. El sistema guarda local como backup - esto está bien
2. Configurar Google Apps Script para que funcione la sincronización
3. Los datos locales se reintentarán automáticamente cada 5 minutos

## 🔍 **Verificar que todo está bien configurado**

### En la consola del navegador deberías ver:
```
🔍 Form Submission Debug
📧 Email: test@ejemplo.com
📊 Apps Script URL: https://script.google.com/macros/s/.../exec
✅ Google Apps Script submission successful
```

### En tu Google Sheets deberías ver:
- Una hoja llamada "Formularios"
- Headers automáticos en la primera fila
- Nueva fila con los datos del formulario

## 📞 **Si nada funciona**

1. **Copia los logs** de la consola (F12)
2. **Verifica** que el enlace de Google Sheets sea accesible
3. **Prueba** ejecutar `testScript()` manualmente en Apps Script
4. **Asegúrate** de que el archivo `.env` esté guardado y el servidor reiniciado

## 🎯 **URL para configurar Apps Script:**
https://script.google.com

**Tu Spreadsheet:**
https://docs.google.com/spreadsheets/d/1ewzzbgjD7z0NJOOiqBGibDCSk_xK-rt3JYBkpjeNIng/edit
