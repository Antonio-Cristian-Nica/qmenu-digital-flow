# 🔄 Instrucciones de Recuperación del Proyecto

## 📋 Información del Proyecto

- **Nombre**: Forka - Digital Restaurant Flow
- **Google Sheets ID**: `1ewzzbgjD7z0NJOOiqBGibDCSk_xK-rt3JYBkpjeNIng`
- **SheetDB API**: `https://sheetdb.io/api/v1/2kml8y757oq23`
- **Último commit**: ✨ Implementación completa de SheetDB y sistema de formularios

## 🚀 Para clonar y configurar en nueva máquina:

### 1. Clonar el repositorio
```bash
git clone [URL_DEL_REPOSITORIO]
cd qmenu-digital-flow
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
```bash
# Copiar el archivo de ejemplo
cp .env.example .env

# Editar .env y configurar:
VITE_SHEETDB_API_URL=https://sheetdb.io/api/v1/2kml8y757oq23
```

### 4. Ejecutar
```bash
npm run dev
```

## ✅ Todo está configurado y funcionando:

- ✅ SheetDB integrado y funcionando
- ✅ Formularios enviando a Google Sheets
- ✅ Sistema de backup local
- ✅ Retry automático
- ✅ Debug completo
- ✅ Documentación completa

## 📁 Archivos importantes guardados:

- `src/services/api.ts` - Toda la lógica de envío
- `SHEETDB-SETUP.md` - Setup de SheetDB
- `SETUP-RAPIDO.md` - Configuración rápida
- `.env.example` - Variables de entorno
- Todos los componentes implementados

## 🔗 Enlaces importantes:

- **Google Sheets**: https://docs.google.com/spreadsheets/d/1ewzzbgjD7z0NJOOiqBGibDCSk_xK-rt3JYBkpjeNIng/edit
- **SheetDB Dashboard**: https://sheetdb.io
- **API URL**: https://sheetdb.io/api/v1/2kml8y757oq23

## 🎯 Nota:
El archivo `.env` no se sube a GitHub por seguridad, pero tienes el `.env.example` con la configuración completa. Solo copia y pega tu API URL de SheetDB.

**¡Todo está respaldado y listo para usar!** 🎉

## 🌐 Para publicar en Hostinger (o cualquier hosting):

### 1. Preparar build de producción
```bash
# En tu máquina local:
git clone [TU_REPOSITORIO]
cd qmenu-digital-flow
npm install

# Configurar variables de entorno para producción
cp .env.example .env.production
# Editar .env.production con:
VITE_SHEETDB_API_URL=https://sheetdb.io/api/v1/2kml8y757oq23
```

### 2. Crear build optimizado
```bash
npm run build
```
Esto creará una carpeta `dist/` con todos los archivos optimizados.

### 3. Subir a Hostinger
- **Comprimir** la carpeta `dist/` en un ZIP
- **Subir** el ZIP al panel de Hostinger (File Manager)
- **Extraer** en la carpeta `public_html/` (o tu dominio)
- **¡Listo!** Tu web estará online

### 4. Configurar dominio personalizado
En Hostinger puedes:
- Usar un subdominio gratuito (ej: `forka.hostinger-site.com`)
- Conectar tu dominio propio (ej: `tudominio.com`)

## ⚡ Alternativa: GitHub Pages (Gratis)
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar scripts al package.json:
"homepage": "https://tu-usuario.github.io/qmenu-digital-flow",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Publicar
npm run deploy
```

## 🔧 Variables de entorno en producción:

**Opción 1: Archivo .env en build**
- Incluir `.env.production` antes del build
- La URL de SheetDB se "hornea" en el código

**Opción 2: Variables del hosting**
- Algunos hostings permiten variables de entorno
- Configura `VITE_SHEETDB_API_URL` en el panel

## 🎯 Resumen para Hostinger:

1. **Local**: Clonar → `npm install` → configurar `.env.production`
2. **Build**: `npm run build` (crea carpeta `dist/`)
3. **Upload**: Subir contenido de `dist/` a Hostinger
4. **¡Online!** Tu web funciona con formularios

**¡Es casi automático!** La configuración de SheetDB se mantiene igual. 🚀
