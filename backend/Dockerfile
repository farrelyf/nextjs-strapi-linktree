# Use the official Node.js image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application files
COPY . .

# Expose the port used by Strapi
EXPOSE 1337

# Start Strapi
CMD ["npm", "start"]
