# # This Dockerfile is used to build and run a Next.js application
# # Use official Node.js image
# FROM public.ecr.aws/docker/library/node:18-alpine

# # Set working directory
# WORKDIR /app

# # Install dependencies
# COPY package*.json ./
# RUN npm ci

# # Copy all source code
# COPY . .

# # Build the Next.js app
# RUN npm run build

# # Set environment
# ENV NODE_ENV=production

# # Expose the port the app runs on
# EXPOSE 3000

# # Start the Next.js app
# CMD ["npx", "next", "start", "-p", "3000"]

# ---------- Build Stage ----------
    FROM public.ecr.aws/docker/library/node:18-alpine AS builder

    # Set working directory
    WORKDIR /app
    
    # Install dependencies
    COPY package*.json ./
    RUN npm ci
    
    # Copy the rest of the application (including app directory and public assets)
    COPY . .
    
    # Build the Next.js app
    RUN npm run build
    
    # ---------- Production Stage ----------
    FROM public.ecr.aws/docker/library/node:18-alpine AS runner
    
    # Set environment
    ENV NODE_ENV=production
    
    # Set working directory
    WORKDIR /app
    
    # Copy only necessary files from build stage
    COPY --from=builder /app/package*.json ./
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/public ./public
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/app ./app
    
    # Expose the port
    EXPOSE 3000
    
    # Start the Next.js app
    CMD ["npx", "next", "start", "-p", "3000"]
    