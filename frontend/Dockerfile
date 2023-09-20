FROM node:16

WORKDIR /frontend

COPY package*.json /frontend/
RUN npm install --legacy-peer-deps

COPY . /frontend/

CMD ["npm", "start"]
