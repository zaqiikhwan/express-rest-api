FROM node:18-alpine as development

WORKDIR /app

COPY package.json .

RUN npm install morgan --save
RUN npm install @mapbox/node-pre-gyp --save
RUN npm install

COPY . .

RUN npm run build

CMD ["node", "build/index.js"]