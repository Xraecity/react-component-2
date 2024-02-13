# Dockerfile
FROM node:alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package-lock.json ./
RUN npm install --silent

COPY . ./

# Add a non-root user
RUN addgroup -g 1001 -S appuser && adduser -u 1001 -S appuser -G appuser
USER appuser

# Expose the port (adjust as needed)
EXPOSE 8084

CMD ["npm", "start", "--", "--host", "0.0.0.0"]