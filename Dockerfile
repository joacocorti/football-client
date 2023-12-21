FROM node:16

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

CMD ["yarn", "start"]
