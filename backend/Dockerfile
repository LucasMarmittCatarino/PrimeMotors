# Imagem base
FROM node:18-slim

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de configuração primeiro (cache das dependências)
COPY package*.json ./

# Instala dependências
RUN npm install --production

# Copia restante do projeto
COPY . .

# Expõe a porta usada pelo Express
EXPOSE 3000

# Comando de inicialização
CMD ["npm", "start"]