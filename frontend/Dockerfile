# # Swarna_Project_Medication\frontend\Dockerfile

# # --- Stage 1: Builder ---
# FROM node:20-alpine AS builder

# WORKDIR /app

# COPY package.json package-lock.json* ./
# RUN npm install

# COPY . .

# RUN npm run build

# # --- Stage 2: Serve with Nginx ---
# FROM nginx:stable-alpine

# COPY --from=builder /app/dist /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]



# Swarna_Project_Medication\frontend\Dockerfile

# --- Stage 1: Builder ---
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

# Correct way to pass mode to Vite
# RUN npm run build -- --mode docker
RUN npm run build 

# --- Stage 2: Serve with Nginx ---
FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
