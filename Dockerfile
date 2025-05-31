# Stage 1: Build the React app
FROM node:lts-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

# Stage 2: Serve the build with Nginx
FROM nginx:alpine

# Copy the built app from Stage 1
COPY --from=build /app/build /usr/share/nginx/html

# Optional: Remove default Nginx config if needed
# RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx config if you have one
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
