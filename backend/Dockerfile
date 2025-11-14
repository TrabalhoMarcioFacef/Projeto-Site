# --- 1. Imagem Base ---
# Começamos com uma imagem oficial do Node.js (versão 20, leve "alpine")
FROM node:20-alpine

# --- 2. Define o Diretório de Trabalho ---
# Cria a pasta 'app' dentro do container
WORKDIR /app

# --- 3. Copia os ficheiros de dependência ---
# Copia o package.json e o package-lock.json (se existir)
#
COPY package*.json ./

# --- 4. Instala as Dependências ---
# Instala os pacotes do npm
RUN npm install

# --- 5. Copia o Código da Aplicação ---
# Copia o resto dos teus ficheiros (index.js, controllers, routes, etc.)
#
COPY . .

# --- 6. Expõe a Porta ---
# Informa ao Docker que o container vai usar a porta 3001
# (como definido no teu index.js)
EXPOSE 3001

# --- 7. Comando de Arranque ---
# O comando para iniciar o servidor (o teu "npm run server")
#
CMD [ "npm", "run", "server" ]