FROM node:14-alpine



# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY app/package*.json /usr/src/app/
RUN npm install

# Bundle app source
COPY app /usr/src/app
ENV PORT 80
ENV NODE_ENV production
EXPOSE 80

RUN npm run build
CMD [ "npm", "start" ]