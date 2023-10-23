FROM node:16.14
WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY ./ ./
ENTRYPOINT [ "npm", "run" ]
CMD ["start"]