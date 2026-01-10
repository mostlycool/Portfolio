# Eleventy + Tailwind migration (migration branch)

Local dev:
1. npm ci
2. npm run dev

Build (production):
1. npm ci
2. npm run build
3. dist/ contains the generated site.

Workflows:
- preview-deploy.yml: builds on pushes to eleventy/migration and publishes dist to eleventy-preview.
- production-deploy.yml: builds on pushes to main and publishes dist to gh-pages.
