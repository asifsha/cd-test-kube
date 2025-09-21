# Use Node.js LTS as base
FROM node:18-alpine

# Set work directory
WORKDIR /usr/src/app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install --production

# Copy app code
COPY . .

# Expose app port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
