# Ahmed Yasser — Portfolio

A spectacular, backend-free portfolio built with Angular 19, showcasing my work as a Senior
Software Engineer specializing in Angular, Vue.js and ASP.NET Core.

**Live site:** https://devmidoz.github.io/portfolio/

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

The site is published to the `gh-pages` branch via [`angular-cli-ghpages`](https://github.com/angular-schule/angular-cli-ghpages):

```bash
npm run deploy
```

This builds the app with the correct base href and pushes `dist/portfolio/browser` to the
`gh-pages` branch, which GitHub Pages serves directly.

A GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) is
also included to build and deploy automatically on every push to `main`. It currently can't run
because GitHub Actions is disabled on this account due to a billing hold — once that's resolved,
re-enable Pages with **Settings → Pages → Source: GitHub Actions** to switch to that flow.

## Content

All resume content lives in [`src/app/data/resume-data.ts`](src/app/data/resume-data.ts) as
typed constants, driving every section of the site.

## License

Personal portfolio — © Ahmed Yasser.
