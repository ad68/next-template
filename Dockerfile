FROM node:21-alpine

ARG NEXT_PUBLIC_API_URL

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@10.7.0

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm","run","start"]

