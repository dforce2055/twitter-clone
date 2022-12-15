FROM node:16

RUN mkdir -p /var/www/dockerize-nuxt/nuxt-app
WORKDIR /var/www/dockerize-nuxt/nuxt-app

# Copy only the package.json and the .output directory
COPY package*.json ./
COPY .output ./.output/

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3000

CMD [ "yarn", "start" ]