# Ayanle Suleiman — Data Science Portfolio

React + Vite. Projects come **live from GitHub** (github.com/Ayanle-suleiman).
All text lives in **`src/data.js`**.

## Run
    npm install
    npm run dev      # local preview
    npm run build    # production build -> dist/

## How projects work
- Every public repo on your GitHub shows up as a project card automatically, newest first.
  Forks, archived repos and **empty** repos are skipped.
- To add a project: **push it to GitHub and give it a description** (repo page → ⚙ next to "About").
  Add GitHub *topics* and they become tags. Set the repo's *website* field and a "Live demo" button appears.
- To make a project look great, add an entry to `projectDetails` in `src/data.js` using the exact repo
  name: title, question, approach, result, highlights, tags, image, `featured: true`.
- To hide a repo, add its name to `github.hide`.
- Optional screenshot: save it to `public/projects/` (16:9, ~1200×675) and set `image: "/projects/name.webp"`.
  Without one, a chart-style cover is drawn from the category.
- If GitHub can't be reached, the site still shows every repo listed in `projectDetails`.
- Results are cached in the visitor's browser for 1 hour (GitHub allows 60 requests/hour per visitor).

## Deploy to ayanle-suleiman.github.io (automatic)
1. Put this project in your `ayanle-suleiman.github.io` repo (replace the old HTML files) and push to `main`.
2. On GitHub: repo **Settings → Pages → Source: GitHub Actions**.
3. Every push now rebuilds and publishes the site (`.github/workflows/deploy.yml`).

## Still to do
- Replace `public/profile.webp` with a photo without the watermark.
- `top-songs-analysis` is empty on GitHub. Push the notebook, then remove it from `github.hide`.
