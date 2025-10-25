# Stage 1: Build Angular application
FROM node:20-alpine AS build
WORKDIR /ng-app

# Copy package.json and package-lock.json for npm install
COPY package*.json .
RUN npm ci

# Copy rest of app
COPY . .

# Build angular with npm
ARG ANGULAR_CONFIGURATION=production
RUN npm run build -- --configuration=$ANGULAR_CONFIGURATION

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=build /ng-app/dist/*/browser /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
