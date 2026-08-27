# testrepo

A collection of isolated static HTML pages, each deployed to its own path
under one GitHub Pages site.

## Structure

Each top-level folder is a self-contained page — its own `index.html`,
`style.css`, `script.js`, with no links between them. To add a new one,
create a new folder with its own `index.html` and it'll be live at
`/testrepo/<folder-name>/` after the next deploy.

- `hello-world/` — example page: https://mediaveien.github.io/testrepo/hello-world/
- `.github/workflows/pages.yml` — GitHub Actions workflow that publishes the whole repo to GitHub Pages on every push

## Local preview

Serve the repo root locally and open the page's path in a browser:

```sh
python3 -m http.server
# then visit http://localhost:8000/hello-world/
```

## Enabling GitHub Pages

In the repository settings, under **Settings → Pages**, set **Source** to
**GitHub Actions**. The included workflow (`.github/workflows/pages.yml`)
will then build and deploy on every push to `main` (and the current working
branch, until `main` exists).
