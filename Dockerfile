#!/bin/bash
# Stage 1: Build the React app
FROM --platform=linux/amd64 node:14 AS build


WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM --platform=linux/amd64 nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
