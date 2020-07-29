FROM node:14-alpine

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY app/package*.json /usr/src/app/
RUN npm install

# Bundle app source
COPY app /usr/src/app
RUN npm run build

ENV NODE_ENV production
ENV API_URL "https://strapi.henrybergstrom.info"
EXPOSE 3000
CMD [ "npm", "start" ]