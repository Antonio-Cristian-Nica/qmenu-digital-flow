#!/bin/bash

# 🧪 Script para verificar configuración de Google Analytics

echo "🔍 Verificando configuración de Google Analytics..."

# Verificar si existe el archivo .env.local
if [ -f .env.local ]; then
    echo "✅ Archivo .env.local encontrado"
    
    # Verificar si tiene el ID de Google Analytics
    if grep -q "VITE_GA_MEASUREMENT_ID" .env.local; then
        GA_ID=$(grep "VITE_GA_MEASUREMENT_ID" .env.local | cut -d'=' -f2)
        if [ "$GA_ID" != "G-XXXXXXXXXX" ] && [ -n "$GA_ID" ]; then
            echo "✅ ID de Google Analytics configurado: $GA_ID"
        else
            echo "❌ ID de Google Analytics no configurado correctamente"
            echo "💡 Edita .env.local y reemplaza G-XXXXXXXXXX con tu ID real"
        fi
    else
        echo "❌ Variable VITE_GA_MEASUREMENT_ID no encontrada en .env.local"
    fi
else
    echo "❌ Archivo .env.local no encontrado"
    echo "💡 Crea el archivo .env.local con tu ID de Google Analytics"
fi

# Verificar si existe el archivo .env.production
if [ -f .env.production ]; then
    echo "✅ Archivo .env.production encontrado"
    
    # Verificar si tiene el ID de Google Analytics
    if grep -q "VITE_GA_MEASUREMENT_ID" .env.production; then
        GA_ID_PROD=$(grep "VITE_GA_MEASUREMENT_ID" .env.production | cut -d'=' -f2)
        if [ "$GA_ID_PROD" != "G-XXXXXXXXXX" ] && [ -n "$GA_ID_PROD" ]; then
            echo "✅ ID de Google Analytics configurado para producción: $GA_ID_PROD"
        else
            echo "❌ ID de Google Analytics no configurado correctamente para producción"
            echo "💡 Edita .env.production y reemplaza G-XXXXXXXXXX con tu ID real"
        fi
    else
        echo "❌ Variable VITE_GA_MEASUREMENT_ID no encontrada en .env.production"
    fi
else
    echo "❌ Archivo .env.production no encontrado"
fi

# Verificar si los archivos de configuración existen
echo ""
echo "🔍 Verificando archivos de configuración..."

if [ -f "src/hooks/useGoogleAnalytics.ts" ]; then
    echo "✅ Hook de Google Analytics encontrado"
else
    echo "❌ Hook de Google Analytics no encontrado"
fi

if [ -f "GOOGLE-ANALYTICS-SETUP.md" ]; then
    echo "✅ Documentación de configuración encontrada"
else
    echo "❌ Documentación de configuración no encontrada"
fi

echo ""
echo "📋 Próximos pasos:"
echo "1. Obtén tu ID de Google Analytics desde https://analytics.google.com/"
echo "2. Configura las variables de entorno en .env.local y .env.production"
echo "3. Construye y despliega tu aplicación"
echo "4. Verifica que los eventos se trackeen correctamente"
echo ""
echo "📖 Lee GOOGLE-ANALYTICS-SETUP.md para instrucciones detalladas"
