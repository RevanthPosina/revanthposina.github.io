# revanthposina.github.io

My portfolio. Astro (static), three.js for the 3D scenes, no UI framework.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
```

Needs Node 20.19+ (CI uses Node 22).

## Change content

All copy lives in `src/data/content.js`:

- `profile`: name, title, links, the rotating role line
- `cases`: project cards and their pop-up sheets (diagram nodes and edges included). Cards with `cat: 'work'` are one-line summaries with no pop-up
- `experience` (a one-line summary per role), `education`, `stack`

Layout is in `src/pages/index.astro`, styles in `src/styles/global.css`,
interactions in `src/scripts/ui.js`, and the 3D scenes in `src/scripts/three/scenes.js`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to the `gh-pages` branch that GitHub Pages serves.
Pull requests only build, so a broken build is caught before merge.
