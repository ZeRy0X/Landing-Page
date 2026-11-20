# Static site served by busybox httpd (~1 MB RAM). Traefik handles TLS/routing.
FROM busybox:stable-musl
COPY site /www
EXPOSE 3000
USER 65534:65534
CMD ["httpd", "-f", "-p", "3000", "-h", "/www"]
