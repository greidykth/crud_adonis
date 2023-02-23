FROM node:latest
# RUN mkdir -p /usr/src
# WORKDIR /usr/src
WORKDIR /appadonis
COPY package*.json /appadonis
RUN npm install
COPY . /appadonis
EXPOSE 3333
CMD ["npm", "run", "dev"]