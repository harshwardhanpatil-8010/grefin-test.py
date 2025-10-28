# Stage 1: Build the Vite/React application
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application for production
# The output will be in the /app/dist directory
RUN npm run build

# Stage 2: Serve the application using a lightweight web server
FROM nginx:stable-alpine

# Copy the static assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# The default command for the nginx image is to start the server.
# No CMD is needed.
