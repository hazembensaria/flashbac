FROM node

WORKDIR /app/user

COPY package.json .

RUN npm install

COPY  . .

EXPOSE 3003

CMD [ "npm" , "start" ]