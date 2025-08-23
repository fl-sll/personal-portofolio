# Edward Alvin — Portfolio (Next.js → GitHub Pages)

A static-exported Next.js portfolio, ready for GitHub Pages.

## 🚀 Local dev

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## 🔧 Configure for GitHub Pages

1. Create a new repo, e.g. `edward-portfolio`.
2. Go to **Settings → Pages** and ensure GitHub Pages is enabled for **GitHub Actions**.
3. Go to **Settings → Secrets and variables → Actions → Variables** and add:

- `REPO_NAME` = your repo name (e.g., `edward-portfolio`).

4. Push to `main`. The workflow builds and deploys to GH Pages.
5. Your site will be at: `https://<your-username>.github.io/<REPO_NAME>/`

## 🧩 Notes

- We use `output: 'export'` + `trailingSlash: true` for GH Pages compatibility.
- `basePath` and `assetPrefix` are set from `REPO_NAME` only in production.
- The `images` optimizer is disabled (GH Pages doesn’t support Next image optimizer).

```


---


## How to use
1. Create the project folder `nextjs-portfolio` and copy these files in.
2. Run `npm install` then `npm run dev` to preview locally.
3. Commit, push to a new GitHub repository.
4. Set repo variable `REPO_NAME` to the repo’s name (or edit `next.config.mjs`).
5. Push to `main` → GitHub Actions deploys to Pages automatically.
```
