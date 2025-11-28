# frontend/Dockerfile

# Build stage
FROM node:18-alpine AS build

WORKDIR /app

ENV CI=true

COPY package.json package-lock.json* yarn.lock* ./
RUN if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    else npm install; \
    fi

COPY . .

RUN npm run build

# Production stage
FROM nginx:1.27-alpine

COPY --from=build /app/build /usr/share/nginx/html

# Simple default nginx config
RUN rm /etc/nginx/conf.d/default.conf
COPY <<EOF /etc/nginx/conf.d/default.conf
server {
  listen       80;
  server_name  _;

  root   /usr/share/nginx/html;
  index  index.html index.htm;

  location / {
    try_files \$uri /index.html;
  }
}
EOF

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
