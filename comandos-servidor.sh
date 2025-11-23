#!/bin/bash
# Comandos para ejecutar en el servidor SSH después de subir .next

echo "📦 Verificando archivos necesarios..."

# Verificar que .next existe
if [ ! -d ".next" ]; then
    echo "❌ Error: La carpeta .next no existe"
    exit 1
fi

# Subir public si no existe (desde local ejecuta: scp -r public amesalud:~/amesalud/)
if [ ! -d "public" ]; then
    echo "⚠️  Advertencia: La carpeta public no existe. Necesitas subirla desde local:"
    echo "   scp -r public amesalud:~/amesalud/"
fi

# Verificar package.json
if [ ! -f "package.json" ]; then
    echo "⚠️  Advertencia: package.json no existe. Necesitas subirlo desde local:"
    echo "   scp package.json amesalud:~/amesalud/"
fi

# Instalar dependencias de producción
echo "📦 Instalando dependencias de producción..."
npm install --production

# Crear directorio de logs si no existe
mkdir -p logs

# Reiniciar con PM2
echo "🔄 Reiniciando aplicación con PM2..."
pm2 restart ecosystem.config.js || pm2 start ecosystem.config.js

# Guardar configuración PM2
pm2 save

echo ""
echo "✅ ¡Despliegue completado!"
echo ""
echo "📊 Verifica el estado:"
echo "   pm2 status"
echo ""
echo "📋 Ver logs:"
echo "   pm2 logs amesalud"
echo ""

