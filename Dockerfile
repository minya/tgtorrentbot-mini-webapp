# Build caddy w/Cloudflare dns
FROM caddy:builder AS caddy-builder

RUN caddy-builder \
    github.com/caddy-dns/cloudflare

# Build tgtorrentbot-mini-webapp in separate container
FROM node:20-alpine AS webapp-builder
WORKDIR /app
COPY ./tgtorrentbot-mini-webapp/package*.json ./
RUN npm install
COPY ./tgtorrentbot-mini-webapp/ .
RUN npm run build


# Create container for serving the built tgtorrentbot-mini-webapp with Caddy
FROM caddy:alpine

VOLUME [ "/www" ]
COPY --from=caddy-builder /usr/bin/caddy /usr/bin/caddy
COPY --from=webapp-builder /app/dist/tgtorrentbot-mini-webapp /www

COPY ./docker-assets/Caddyfile /etc/caddy/Caddyfile
EXPOSE 80 443
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]

