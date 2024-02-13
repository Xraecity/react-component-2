# Dockerfile
FROM node:21.6.1

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package-lock.json ./


COPY . ./

RUN npm install --silent



# Expose the port (adjust as needed)
EXPOSE 6006

CMD ["npm", "run", "storybook"]