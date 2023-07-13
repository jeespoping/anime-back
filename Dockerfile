FROM node:16.14.2 as build
WORKDIR /usr/src/app-back
COPY . .
RUN yarn
RUN yarn build
CMD [ "yarn", "develop" ]