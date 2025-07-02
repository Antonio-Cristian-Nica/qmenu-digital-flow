# 🎯 Configuración Específica para tu Google Sheets

## ✅ Tu Google Sheets
**URL**: https://docs.google.com/spreadsheets/d/1ewzzbgjD7z0NJOOiqBGibDCSk_xK-rt3JYBkpjeNIng/edit?usp=sharing
**ID**: `1ewzzbgjD7z0NJOOiqBGibDCSk_xK-rt3JYBkpjeNIng`

## 🚀 Pasos para Activar (5 minutos)

### 1. Crear Google Apps Script
1. Ve a https://script.google.com
2. **Nuevo proyecto**
3. Borra todo el código predeterminado
4. Copia **TODO** el contenido del archivo `google-apps-script.js`
5. Pégalo en el editor
6. **Guardar** (Ctrl+S) - Puedes ponerle nombre "Forka Survey API"

### 2. Implementar como Web App
1. En Apps Script: **Implementar** → **Nueva implementación**
2. **Tipo**: Selecciona "Aplicación web"
3. **Descripción**: "Forka Survey API"
4. **Ejecutar como**: Tu email
5. **Quién tiene acceso**: **Cualquiera** (importante!)
6. Click **Implementar**
7. **Autorizar acceso** (puede pedir permisos de Google)
8. **Copiar la URL** de la aplicación web

### 3. Configurar en el proyecto
1. Abre el archivo `.env` en VS Code
2. Pega tu URL en esta línea:
```
VITE_GOOGLE_APPS_SCRIPT_URL=TU_URL_AQUI
```
3. Guarda el archivo
4. **Reinicia el servidor**: Ctrl+C y luego `npm run dev`

## 🧪 Probar que funciona

1. Ve a tu página web (http://localhost:8080)
2. Llena el formulario de "Mas Información"
3. Envía los datos
4. **Verifica en tu Google Sheets** que aparezca una nueva fila
5. En la consola del navegador (F12) deberías ver: ✅ Google Apps Script submission successful

## 📋 Estructura automática en Google Sheets

El script creará automáticamente una hoja llamada "Formularios" con estas columnas:

| Fecha y Hora | Email | Nombre del Restaurante | Número de Mesas | Sistema Actual | Intereses | Quiere Demo |
|--------------|-------|------------------------|-----------------|----------------|-----------|-------------|

## ⚠️ Troubleshooting

**Si no funciona:**
1. Verifica que el Apps Script tenga acceso "Cualquiera"
2. Checa que hayas copiado la URL correcta al .env
3. Reinicia el servidor después de cambiar .env
4. Revisa la consola del navegador (F12) para errores

**Si ves errores de permisos:**
1. En Apps Script → Ejecutar → testScript
2. Autoriza todos los permisos que pida Google
3. Vuelve a probar

## 📞 URL de tu Apps Script
Una vez que tengas la URL, pégala aquí para referencia:
```
VITE_GOOGLE_APPS_SCRIPT_URL=___PENDIENTE___
```

¡Todo está listo! Solo necesitas crear el Apps Script y configurar la URL. 🎉
