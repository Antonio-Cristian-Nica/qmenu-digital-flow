# 🎯 Configuración SheetDB - Método Más Simple

## ¿Qué es SheetDB?
SheetDB es un servicio que convierte tu Google Sheets en una API REST, eliminando la necesidad de Google Apps Script.

## 🚀 Configuración (2 minutos)

### Paso 1: Registrarse en SheetDB
1. Ve a https://sheetdb.io
2. **Sign up** (registrarse gratis)
3. **Conecta con Google** para autorizar acceso

### Paso 2: Conectar tu Google Sheets
1. En SheetDB Dashboard, click **"Create"**
2. **Pega tu URL de Google Sheets:**
   ```
   https://docs.google.com/spreadsheets/d/1ewzzbgjD7z0NJOOiqBGibDCSk_xK-rt3JYBkpjeNIng/edit
   ```
3. Click **"Create API"**

### Paso 3: Obtener tu API URL
1. SheetDB te dará una URL como:
   ```
   https://sheetdb.io/api/v1/abc123def456
   ```
2. **Copia esta URL**

### Paso 4: Configurar en el proyecto
1. Abre `.env` en VS Code
2. Pega tu URL en:
   ```
   VITE_SHEETDB_API_URL=https://sheetdb.io/api/v1/TU_API_ID
   ```
3. Guarda el archivo
4. Reinicia el servidor: `npm run dev`

## ✅ ¡Listo!

Ahora tu formulario:
- ✅ Se envía automáticamente a Google Sheets
- ✅ No necesita Google Apps Script
- ✅ Funciona en tiempo real
- ✅ Es más confiable

## 🧪 Probar

1. Llena el formulario en tu web
2. Los datos aparecerán inmediatamente en Google Sheets
3. En la consola (F12) verás: `✅ SheetDB submission successful`

## 📊 Estructura en Google Sheets

Los datos se guardarán con estas columnas:
- timestamp
- email
- restaurantName
- tableCount
- currentSystem
- interests
- wantsDemo
- source

## 💰 Costo

- **Gratis**: 1000 requests/mes
- **Perfecto** para landing pages y formularios

## 🔧 Ventajas de SheetDB vs Google Apps Script

| SheetDB | Google Apps Script |
|---------|-------------------|
| ✅ Setup 2 minutos | ❌ Setup 15+ minutos |
| ✅ No código | ❌ Requiere programación |
| ✅ API REST estándar | ❌ Configuración compleja |
| ✅ Siempre funciona | ❌ Puede fallar |
| ✅ Dashboard visual | ❌ Solo código |

## 🌐 Enlaces importantes

- **SheetDB**: https://sheetdb.io
- **Tu Google Sheets**: https://docs.google.com/spreadsheets/d/1ewzzbgjD7z0NJOOiqBGibDCSk_xK-rt3JYBkpjeNIng/edit
- **Documentación**: https://docs.sheetdb.io/

¡Es mucho más simple que Google Apps Script! 🎉
