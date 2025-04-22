# Etapa de construcción
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g typescript
RUN npm run build

