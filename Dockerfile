FROM node:12-alpine

WORKDIR /weather
EXPOSE 3000

RUN apk update && \
    apk add git && \
    npm install

CMD ["npm", "start"]