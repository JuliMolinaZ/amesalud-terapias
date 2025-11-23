#!/bin/bash

# Script automatizado de despliegue a SSH
# Uso: ./deploy-to-ssh.sh

set -e

# Colores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🚀 Despliegue Automatizado - AME Salud${NC}"
echo ""

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: No se encontró package.json${NC}"
    exit 1
fi

# Verificar conexión SSH
echo -e "${YELLOW}📡 Verificando conexión SSH...${NC}"
if ! ssh -o ConnectTimeout=5 amesalud "echo 'Conexión exitosa'" &> /dev/null; then
    echo -e "${RED}❌ Error: No se puede conectar al servidor SSH 'amesalud'${NC}"
    echo "   Verifica tu configuración SSH en ~/.ssh/config"
    exit 1
fi
echo -e "${GREEN}✅ Conexión SSH verificada${NC}"
echo ""

# Construir localmente
echo -e "${YELLOW}🔨 Construyendo aplicación...${NC}"
npm run build
echo -e "${GREEN}✅ Build completado${NC}"
echo ""

# Subir archivos
echo -e "${YELLOW}📤 Subiendo archivos al servidor...${NC}"
rsync -avz \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude '.git' \
  --exclude '.DS_Store' \
  --exclude '*.log' \
  --exclude 'logs' \
  --exclude '.env*.local' \
  ./ amesalud:~/amesalud/

echo -e "${GREEN}✅ Archivos subidos${NC}"
echo ""

# Instalar y construir en el servidor
echo -e "${YELLOW}⚙️  Configurando en el servidor...${NC}"
ssh amesalud << 'ENDSSH'
cd ~/amesalud
echo "📦 Instalando dependencias..."
npm install --production
echo "🔨 Construyendo aplicación..."
npm run build
echo "📁 Creando directorio de logs..."
mkdir -p logs
echo "✅ Configuración completada"
ENDSSH

echo ""
echo -e "${YELLOW}🔄 Reiniciando aplicación con PM2...${NC}"
ssh amesalud << 'ENDSSH'
cd ~/amesalud
pm2 restart ecosystem.config.js || pm2 start ecosystem.config.js
pm2 save
ENDSSH

echo ""
echo -e "${GREEN}✨ ¡Despliegue completado exitosamente!${NC}"
echo ""
echo -e "${BLUE}📋 Verifica el estado:${NC}"
echo "   ssh amesalud 'pm2 status'"
echo ""
echo -e "${BLUE}📊 Ver logs:${NC}"
echo "   ssh amesalud 'pm2 logs amesalud'"
echo ""

