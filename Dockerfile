FROM node:12.6.0-alpine as node
RUN mkdir -p /src/app
WORKDIR /src/app
COPY package.json /src/app/package.json
RUN npm install
COPY . /src/app
RUN npm run build

FROM node:12.6.0-alpine
RUN mkdir -p /app
COPY package.json /app/package.json
WORKDIR /app
RUN npm install --production
COPY --from=node /src/app/dist /app/src
RUN ls /app
RUN ls /app/src
EXPOSE 3000
CMD [ "node", "/app/src/main.js"]