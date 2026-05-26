# Deployment guide

## Git commit (if commit hangs on GPG)

If `git commit` waits for a GPG passphrase, sign in to your agent or run commit from your terminal after unlocking GPG.

```bash
cd /Users/adarshsingh/Desktop/assignment
git add -A
git commit -m "Implement N7 fintech landing page for Codelinear assignment"
```

## GitHub

1. Create a new repository on GitHub (e.g. `n7-landing`).
2. Push:

```bash
git branch -M main
git remote add origin https://github.com/devadarshh/n7-landing.git
git push -u origin main
```

## Vercel

1. Go to [vercel.com/new](https://vercel.com/new).
2. Import the GitHub repository.
3. Framework preset: **Next.js** (auto-detected).
4. Deploy — no environment variables required.

Your live URL will look like: `https://n7-landing.vercel.app`

## Submission email

Send to hiring@codelinear.com:

- GitHub repository URL
- Vercel live URL
- Note: `npm install && npm run dev` to run locally
