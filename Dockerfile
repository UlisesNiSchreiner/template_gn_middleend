FROM node:18-alpine3.14

WORKDIR /app
COPY . .
#RUN yarn install --production
RUN npm install
RUN npm run build

CMD ["node", "/app/build"]