#!/bin/sh
set -e

# Write runtime environment variables into /app/.env so Next.js can read them
# (only variables that are set/non-empty, skip internal shell variables starting with _)
ENV_FILE="/app/.env"
: > "$ENV_FILE"

env | grep -v '^_' | while IFS='=' read -r key value; do
  if [ -n "$key" ] && [ -n "$value" ]; then
    printf '%s=%s\n' "$key" "$value" >> "$ENV_FILE"
  fi
done

# Hand off to the CMD (e.g. node server.js)
exec "$@"
