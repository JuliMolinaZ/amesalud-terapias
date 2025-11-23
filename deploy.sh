#!/bin/bash

# Script de despliegue para AME Salud
# Uso: ./deploy.sh

set -e

echo "🚀 Iniciando despliegue de AME Salud..."

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: No se encontró package.json. Asegúrate de estar en el directorio del proyecto.${NC}"
    exit 1
fi

# Verificar que Node.js está instalado
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Error: Node.js no está instalado. Por favor instálalo primero.${NC}"
    exit 1
fi

echo -e "${YELLOW}📦 Instalando dependencias...${NC}"
npm install

echo -e "${YELLOW}🔨 Construyendo aplicación para producción...${NC}"
npm run build

echo -e "${GREEN}✅ Build completado exitosamente!${NC}"
echo ""
echo -e "${YELLOW}📋 Próximos pasos:${NC}"
echo ""
echo "1. Sube los archivos al servidor SSH:"
echo "   rsync -avz --exclude 'node_modules' --exclude '.next' --exclude '.git' ./ amesalud:~/amesalud/"
echo ""
echo "2. O usa SCP para subir todo:"
echo "   scp -r . amesalud:~/amesalud/"
echo ""
echo "3. En el servidor SSH, ejecuta:"
echo "   cd ~/amesalud"
echo "   npm install --production"
echo "   npm run build"
echo "   pm2 start ecosystem.config.js"
echo "   pm2 save"
echo ""
echo -e "${GREEN}✨ ¡Listo para desplegar!${NC}"

