FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .

ENV REACT_APP_API_URL=https://k9f03505f0e8ba.user-app.krampoline.com/api/

RUN npm ci
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "build"]

