# Landing Page

Personal portfolio. Plain static HTML/CSS/JS, no framework and no build step.

**Project Structure**
- **site/index.html:** portfolio page
- **site/bio/index.html + site/bio.js:** gaming bio with live Discord presence (Lanyard API, client-side)
- **site/style.css:** all styles
- **Dockerfile:** serves `site/` with `busybox httpd` on port 3000 (Traefik in front, see `compose.yaml`)

**Local preview**
```
docker build -t landing-page . && docker run --rm -p 3000:3000 landing-page
```

**Author**
- ZeRy0X
