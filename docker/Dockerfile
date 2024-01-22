FROM node:lts-alpine AS build

WORKDIR /app
COPY package-lock.json .
COPY package.json .
RUN npm ci
RUN npm install -g @angular/cli@14.2.10
COPY . .

RUN set NODE_OPTIONS=--max_old_space_size=8196
# RUN npm run build:ssr
RUN ng build --configuration production --base-href /fio --deploy-url /fio/ --output-path=fio

FROM nginxinc/nginx-unprivileged

#### copy nginx conf
#COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/fio /usr/share/nginx/html/fio
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
