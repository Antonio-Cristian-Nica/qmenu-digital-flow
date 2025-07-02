#!/bin/bash

# 🚀 Script de Despliegue para Hostinger
# Ejecutar: bash deploy-hostinger.sh

echo "🎯 Iniciando despliegue para Hostinger..."

# Verificar que existe .env.production
if [ ! -f .env.production ]; then
    echo "❌ Error: No existe .env.production"
    echo "📋 Crear archivo .env.production con:"
    echo "VITE_SHEETDB_API_URL=https://sheetdb.io/api/v1/2kml8y757oq23"
    exit 1
fi

echo "✅ Archivo .env.production encontrado"

# Instalar dependencias si no existen
if [ ! -d node_modules ]; then
    echo "📦 Instalando dependencias..."
    npm install
fi

# Crear build de producción
echo "🔨 Creando build de producción..."
npm run build

# Verificar que se creó el build
if [ ! -d dist ]; then
    echo "❌ Error: No se pudo crear el build"
    exit 1
fi

echo "✅ Build creado exitosamente en carpeta 'dist/'"

# Crear ZIP para subir a Hostinger
echo "📦 Creando archivo ZIP para Hostinger..."
cd dist
zip -r ../forka-website.zip .
cd ..

echo "🎉 ¡Listo para Hostinger!"
echo ""
echo "📋 Próximos pasos:"
echo "1. Descargar 'forka-website.zip'"
echo "2. Subir a Hostinger File Manager"
echo "3. Extraer en public_html/"
echo "4. ¡Tu web estará online!"
echo ""
echo "🌐 URL del ZIP: $(pwd)/forka-website.zip"
