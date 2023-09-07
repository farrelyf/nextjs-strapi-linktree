# Use an official Node runtime as base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for backend (Strapi)
COPY backend/package*.json ./backend/

# Install backend dependencies
RUN cd backend && npm install

# Copy the rest of the backend files
COPY backend ./backend

# Build the backend (if needed)
RUN cd backend && npm run build

# Expose the port your backend app runs on (default is 1337 for Strapi)
EXPOSE 1337

# Set up frontend (Next.js)
WORKDIR /app/frontend

# Copy package.json and package-lock.json for frontend
COPY frontend/package*.json ./frontend/

# Install frontend dependencies
RUN cd frontend && npm install

# Copy the rest of the frontend files
COPY frontend ./frontend

# Build the frontend
RUN cd frontend && npm run build

# Expose the port your frontend app runs on (default is 3000 for Next.js)
EXPOSE 3000

# Command to start both Strapi and Next.js
CMD ["npm", "run", "start"]
