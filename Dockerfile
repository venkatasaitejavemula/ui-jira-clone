FROM node:16-alpine as BUILD_IMAGE

WORKDIR /app

COPY package*.json .
COPY vite.config.js .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=BUILD_IMAGE /app/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
