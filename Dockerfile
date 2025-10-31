# Multi-stage Dockerfile for Next.js app using Bun

# 1) Install dependencies with Bun using the lockfile for reproducible installs
FROM oven/bun:1.1-alpine AS deps
WORKDIR /app

# Copy only package manifests first for better layer caching
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile


# 2) Build the Next.js app
FROM oven/bun:1.1-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build


# 3) Production runtime
FROM oven/bun:1.1-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

EXPOSE 3000

# Copy only what's needed to run the production server
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY public ./public
COPY package.json ./package.json

# Start Next.js in production mode
CMD ["bun", "run", "start"]


