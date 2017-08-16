FROM node:latest

COPY ./package.json /app/package.json

COPY ./bin ./app/bin

RUN cd /app && npm install
