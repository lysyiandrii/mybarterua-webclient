# Development environment
FROM node:15-alpine
WORKDIR app
COPY . .
RUN npm i
CMD ["npm", "run", "serve"]