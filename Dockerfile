FROM node:16 AS nws-material

WORKDIR /app

COPY . /app
RUN npm ci && npm run build

ENV NUXT_PORT=3000

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]