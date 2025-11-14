# --- ETAPA 1: O "BUILDER" (Construtor) ---
FROM node:20-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os ficheiros de dependência
#
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código fonte do frontend
#
COPY . .

# Executa o comando de build (definido no teu package.json)
#
RUN npm run build

# O resultado disto será uma pasta /app/dist

# --- ETAPA 2: O "SERVER" (Servidor) ---
# Começamos uma nova imagem, leve, com Nginx
FROM nginx:stable-alpine

# Copia os ficheiros estáticos (HTML, CSS, JS) da etapa "builder"
# para a pasta padrão que o Nginx usa para servir sites
COPY --from=builder /app/dist /usr/share/nginx/html

# Precisamos de um ficheiro de configuração para o React Router funcionar
# Vamos criar o 'nginx.conf' no próximo passo
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80 (porta padrão do Nginx)
EXPOSE 80

# Comando para iniciar o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]