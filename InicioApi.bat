@echo off
echo Iniciando servidor...
cd C:\Users\FGarcia\Documents\ApicontenedoresApp
npx pm2 start src/main.ts --interpreter node --interpreter-args "-r ts-node/register