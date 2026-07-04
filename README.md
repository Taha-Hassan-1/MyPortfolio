# MyPortfolio

A personal portfolio site showcasing my Unity games and web projects.
Built with **React + Vite + TypeScript + Tailwind CSS**, deployed free on **GitHub Pages**.

## Develop locally

```bash
npm install      # first time only
npm run dev      # start dev server, open the printed localhost URL
```

## Customize

| What | Where |
|------|-------|
| Your name, bio, social links, skills | `src/data/site.ts` |
| Add / edit projects | `src/data/projects.ts` |
| Project thumbnails | `public/images/` (referenced by filename in `projects.ts`) |
| Resume PDF | drop `resume.pdf` into `public/` |
| Colors / layout | the components in `src/components/` (Tailwind classes) |

**Adding a project:** put an image in `public/images/`, then copy an entry in
`src/data/projects.ts`, set `type` to `'unity'` or `'web'`, and use `img('your-file.png')`.

**Hosting Unity builds (free):** upload WebGL/desktop builds to
[itch.io](https://itch.io) or attach them to a GitHub Release, then link those URLs
in the project's `links`. Keeps this repo small.

## Deploy to GitHub Pages

1. Create a **public** GitHub repo named **`MyPortfolio`** (must match `base` in
   `vite.config.ts`). If you use a different name, update `base: '/<repo-name>/'`.
2. Push this project to the `main` branch.
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Every push to `main` triggers `.github/workflows/deploy.yml`, which builds and
   publishes to `https://<your-username>.github.io/MyPortfolio/`.

## Build locally (optional sanity check)

```bash
npm run build    # outputs to dist/
npm run preview  # serves the production build at the correct base path
```
