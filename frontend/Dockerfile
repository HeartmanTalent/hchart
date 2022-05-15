FROM node:17-alpine

# Create app directory
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies 
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm ci
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache


CMD [ "npm",  "start" ]