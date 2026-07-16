FROM node:18-alpine

LABEL maintainer="nith@abc.com"
LABEL description="Node.js Demo App"
LABEL version="1.0.0"

ARG BUILD_VERSION=local-dev
ENV APP_BUILD_VER=$BUILD_VERSION

WORKDIR /usr/src/app

ENV PORT=3000
ENV NODE_ENV=production

COPY package*.json ./

RUN npm install --omit=dev

# ADD https://githubusercontent.com ./CONTRIBUTING_DOCKER.md

COPY . .


USER node

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => r.statusCode === 200 ? process.exit(0) : process.exit(1))"

ONBUILD RUN echo "Building a child image based on core Node framework"

ENTRYPOINT ["node"]

CMD ["server.js"]
