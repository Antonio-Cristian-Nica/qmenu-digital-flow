## 🚀 Configuración Súper Rápida - SheetDB (2 minutos)

### Paso 1: Registrarse en SheetDB
1. Ve a **https://sheetdb.io**
2. **Sign up** gratis
3. **Conecta con Google** (autoriza el acceso)

### Paso 2: Crear API
1. Click **"Create"**
2. Pega tu Google Sheets URL:
```
https://docs.google.com/spreadsheets/d/1ewzzbgjD7z0NJOOiqBGibDCSk_xK-rt3JYBkpjeNIng/edit
```
3. Click **"Create API"**
4. **Copia la URL de API** (algo como: `https://sheetdb.io/api/v1/abc123`)

### Paso 3: Configurar en el proyecto
1. Abre `.env` en VS Code
2. Pega tu URL:
```
VITE_SHEETDB_API_URL=https://sheetdb.io/api/v1/TU_API_ID
```
3. Guarda y reinicia: `npm run dev`

### 🧪 Probar
1. Llena el formulario en la web
2. ¡Los datos aparecen al instante en Google Sheets!
3. En consola (F12): `✅ SheetDB submission successful`

## ✅ Ventajas vs Google Apps Script

| SheetDB | Google Apps Script |
|---------|-------------------|
| ⚡ 2 minutos | ⏰ 15+ minutos |
| 🎯 Solo URL | 💻 Código complejo |
| ✅ Siempre funciona | ❌ Puede fallar |
| 🆓 1000 requests/mes | 🆓 Pero difícil setup |

¡Mucho más fácil! 🎉
