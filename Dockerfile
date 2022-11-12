FROM node:latest

WORKDIR /usr/src/nuxt-app

COPY . /usr/src/nuxt-app/
RUN npm ci
RUN npm run build

ENV NUXT_PORT=3000

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
