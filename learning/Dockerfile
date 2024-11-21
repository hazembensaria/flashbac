FROM node

WORKDIR /app/learning

COPY package.json .

RUN npm install

COPY  . .

EXPOSE 3002

CMD [ "npm" , "start" ]
