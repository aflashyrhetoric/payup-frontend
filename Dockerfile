FROM node:9.5

RUN mkdir -p /usr/src/payup-frontend

ENV PATH /usr/src/payup-frontend/node_modules/.bin:$PATH

WORKDIR /usr/src/payup-frontend

ADD . /usr/src/payup-frontend

RUN npm install --silent

RUN npm install react-scripts@1.1.0 -g --silent

CMD ["npm", "start"]

EXPOSE 3000

# to run, use below and then access http://localhost
# docker run -p 80:3000 payup:frontend

