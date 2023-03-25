FROM node:18

RUN mkdir ./app

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "start:dev"]



