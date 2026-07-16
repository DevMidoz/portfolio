# Ahmed Yasser — Portfolio

A spectacular, backend-free portfolio built with Angular 19, showcasing my work as a Senior
Software Engineer specializing in Angular, Vue.js and ASP.NET Core.

**Live site:** https://devmidoz.github.io/portfolio/

![Deploy to GitHub Pages](https://github.com/DevMidoz/portfolio/actions/workflows/deploy.yml/badge.svg)

## Highlights

- Built entirely with standalone Angular 19 components — no backend server required.
- Featured projects are fetched live from the [GitHub REST API](https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user) in the browser.
- Dark/light theme toggle persisted to `localStorage`.
- Scroll-reveal animations powered by `IntersectionObserver`.
- Fully responsive, from mobile to desktop.
- Continuously deployed to GitHub Pages via GitHub Actions.

## Tech stack

Angular 19 (standalone components) · TypeScript · SCSS · RxJS · GitHub REST API

## Getting started

```bash
npm install
npm start          # ng serve, http://localhost:4200
npm run build       # production build -> dist/portfolio/browser
```

## Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the app and publishes `dist/portfolio/browser` to GitHub Pages.

## Content

All resume content lives in [`src/app/data/resume-data.ts`](src/app/data/resume-data.ts) as
typed constants, driving every section of the site.

## License

Personal portfolio — © Ahmed Yasser.
