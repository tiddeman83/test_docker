FROM node:18.3.0-alpine3.14 as build-step
WORKDIR /app

COPY package.json /app
COPY ./src /app/src
COPY ./public /app/public
EXPOSE 3000
RUN npm install
RUN npm run build
