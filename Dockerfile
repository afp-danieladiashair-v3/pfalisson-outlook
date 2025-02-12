# Estágio de build
#FROM node:20 AS build

# Instala dependências do sistema
#RUN apt-get update && apt-get install -y \
#    python3 \
#    build-essential \
#    && rm -rf /var/lib/apt/lists/*

# Define o diretório de trabalho dentro do container
#WORKDIR /app

# Copia os arquivos de definição de dependências
#COPY package.json yarn.lock* ./

# Instala as dependências
#RUN npm install

# Copia o restante dos arquivos do projeto
#COPY . .

# Compila o projeto (gera os arquivos na pasta `dist`)
#RUN npm run build

# Estágio final (imagem leve)
#FROM node:20-alpine

# Define o diretório de trabalho
#WORKDIR /app

# Copia apenas os arquivos necessários do estágio de build
#COPY --from=build /app/dist ./dist
#COPY --from=build /app/node_modules ./node_modules
#COPY --from=build /app/package.json ./package.json

# Expõe a porta que a aplicação vai rodar
#EXPOSE 4173

# Comando para rodar a aplicação
#CMD ["npm", "start"]

####################

# Usa uma imagem base do Node.js
FROM node:20

# Instala dependências do sistema
RUN apt-get update && apt-get install -y \
    python3 \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de definição de dependências
COPY package.json yarn.lock* ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Compila o TypeScript para JavaScript
RUN npm run build

# Expõe a porta que a aplicação vai rodar
EXPOSE 4173

# Comando para rodar a aplicação
CMD ["npm", "start"]