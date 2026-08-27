# testrepo

A minimal static HTML/CSS/JS site deployed automatically to GitHub Pages.

## Structure

- `index.html` — page markup
- `style.css` — styles
- `script.js` — a tiny bit of interactivity
- `.github/workflows/pages.yml` — GitHub Actions workflow that publishes the site to GitHub Pages on every push to `main`

## Local preview

Just open `index.html` in a browser, or serve it locally:

```sh
python3 -m http.server
```

## Enabling GitHub Pages

In the repository settings, under **Settings → Pages**, set **Source** to
**GitHub Actions**. The included workflow (`.github/workflows/pages.yml`)
will then build and deploy the site whenever `main` is updated.
