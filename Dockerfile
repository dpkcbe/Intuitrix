# Use official Node.js image
FROM public.ecr.aws/docker/library/node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy all source code
COPY . .

# Build the Next.js app
RUN npm run build

# Set environment
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js app
CMD ["npx", "next", "start", "-p", "3000"]
