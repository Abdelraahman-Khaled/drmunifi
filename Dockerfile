FROM node:20-alpine AS base

# ─── deps stage ────────────────────────────────────────────────────────────────
FROM base AS deps
# libc6-compat is required by some native node modules on Alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# ─── builder stage ─────────────────────────────────────────────────────────────
FROM base AS builder
# Also need libc6-compat in the builder stage (native modules used during build)
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Accept build-time public env vars (Next.js bakes these in at build time)
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_EMAILJS_SERVICE_ID
ARG NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
ARG NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
ENV NEXT_PUBLIC_EMAILJS_SERVICE_ID=${NEXT_PUBLIC_EMAILJS_SERVICE_ID}
ENV NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=${NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}
ENV NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=${NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}

# Disable Next.js telemetry during build (optional – uncomment to enable)
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ─── runner stage (production image) ───────────────────────────────────────────
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static   ./.next/static

# Pre-create the prerender cache directory with correct ownership
RUN mkdir -p .next && chown nextjs:nodejs .next

# Copy entrypoint script (must have Unix LF line endings – see docker-entrypoint.sh)
COPY docker-entrypoint.sh /app/docker-entrypoint.sh
RUN chmod +x /app/docker-entrypoint.sh

# Ensure the nextjs user owns everything under /app
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 9100

# PORT tells the Next.js standalone server which port to listen on
# HOSTNAME=0.0.0.0 makes it reachable from outside the container
ENV PORT=9100
ENV HOSTNAME=0.0.0.0

ENTRYPOINT ["/app/docker-entrypoint.sh"]

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
