FROM node:18.3.0-alpine3.14 as build-step
WORKDIR /app

COPY package.json /app
COPY ./src /app/src
COPY ./public /app/public
RUN npm install
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
COPY deployment/nginx.default.conf /etc/nginx/conf.d/default.conf
