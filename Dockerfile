# Use the official Node.js 14 image as base
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 (change this if your app runs on a different port)
EXPOSE 8080

# Command to run the application
CMD ["npm", "run" , "dev"]
