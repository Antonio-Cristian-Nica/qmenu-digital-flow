# 🌐 Guía de Despliegue - Todos los Hostings

## 🎯 Proceso General

Tu web usa **Vite + React**, así que necesitas:
1. **Build estático** (HTML, CSS, JS)
2. **Variables de entorno** configuradas
3. **Subir archivos** al hosting

## 🏠 Hostinger (Recomendado)

### Método Manual:
```bash
# 1. Preparar
npm install
cp .env.example .env.production
# Editar .env.production con tu SheetDB URL

# 2. Build
npm run build

# 3. Subir
# - Comprimir carpeta 'dist/' en ZIP
# - Subir a Hostinger File Manager
# - Extraer en public_html/
```

### Método Automático:
```bash
bash deploy-hostinger.sh
# Te crea el ZIP listo para subir
```

## ☁️ Netlify (Gratis)

```bash
# 1. Conectar repo GitHub
# Ir a netlify.com → New site from Git

# 2. Configurar build:
# Build command: npm run build
# Publish directory: dist

# 3. Variables de entorno:
# Site settings → Environment variables
# VITE_SHEETDB_API_URL = https://sheetdb.io/api/v1/2kml8y757oq23
```

## 🔥 Vercel (Gratis)

```bash
# 1. Instalar CLI
npm i -g vercel

# 2. Deploy
vercel --prod

# 3. Configurar variables:
# Dashboard → Project → Settings → Environment Variables
# VITE_SHEETDB_API_URL = https://sheetdb.io/api/v1/2kml8y757oq23
```

## 📄 GitHub Pages (Gratis)

```bash
# 1. Instalar gh-pages
npm install --save-dev gh-pages

# 2. Configurar package.json:
"homepage": "https://tu-usuario.github.io/qmenu-digital-flow",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# 3. Deploy
npm run deploy
```

## 🌟 Cloudflare Pages (Gratis)

```bash
# 1. Conectar repo en pages.cloudflare.com
# 2. Build settings:
# Build command: npm run build
# Output directory: dist
# 3. Variables de entorno en dashboard
```

## ⚙️ Variables de Entorno por Hosting

| Hosting | Configuración |
|---------|---------------|
| **Hostinger** | Archivo `.env.production` antes del build |
| **Netlify** | Dashboard → Environment Variables |
| **Vercel** | Dashboard → Settings → Environment Variables |
| **GitHub Pages** | Solo funciona con build "horneado" |
| **Cloudflare** | Dashboard → Environment Variables |

## 🔒 Seguridad

**✅ Archivo .env.production:**
```env
VITE_SHEETDB_API_URL=https://sheetdb.io/api/v1/2kml8y757oq23
```

**❌ NO subir** `.env.production` a GitHub - añadirlo al `.gitignore`

## 🎯 Recomendaciones:

1. **Hostinger**: Mejor para dominios personalizados
2. **Netlify**: Mejor para prototipos rápidos
3. **Vercel**: Mejor para apps React avanzadas
4. **GitHub Pages**: Mejor para proyectos open source

## 🧪 Testing en Producción:

1. **Subir la web**
2. **Abrir F12 → Console**
3. **Llenar formulario**
4. **Verificar**: `✅ SheetDB submission successful`
5. **Confirmar** datos en Google Sheets

**¡Tu web funcionará idéntica en cualquier hosting!** 🚀
