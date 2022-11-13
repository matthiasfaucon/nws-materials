FROM node:16

WORKDIR /app

COPY . /app
RUN npm ci

ENV NUXT_PORT=3000

EXPOSE 3000

CMD [ "/bin/sh", "-c", "npm run dev -- --host 0.0.0.0" ]
