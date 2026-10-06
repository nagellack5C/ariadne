# Deployment Guide

This guide covers different options for deploying the Ariadne travel planner app with automatic deployments.

## Option 1: Vercel (Recommended - Easiest)

**Best for:** Quick deployment, automatic previews, zero configuration

### Steps:
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Select the `ariadne` repository
4. Vercel auto-detects Vite settings - just click "Deploy"

### What you get:
- ✅ Auto-deploy on every push to any branch
- ✅ Preview URLs for pull requests
- ✅ Production URL like `ariadne.vercel.app`
- ✅ Free SSL certificate
- ✅ CDN distribution
- ✅ No configuration needed

### Configuration (if needed):
```
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node Version: 18.x
```

---

## Option 2: Netlify

**Best for:** Alternative to Vercel, same features

### Steps:
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import from Git"
3. Connect to GitHub and select your repo
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### What you get:
- ✅ Auto-deploy on every push
- ✅ Preview deploys for PRs
- ✅ Custom domain support
- ✅ Free SSL
- ✅ Form handling and serverless functions

---

## Option 3: GitHub Pages (Free, GitHub-native)

**Best for:** Open source projects, simple static hosting

### Setup:
1. **Enable GitHub Pages:**
   - Go to your repo settings on GitHub
   - Navigate to "Pages" section
   - Source: "GitHub Actions"

2. **Push the workflow file:**
   The `.github/workflows/deploy.yml` file is already in the repo.
   It will auto-deploy when you push to the configured branches.

3. **Access your site:**
   - URL will be: `https://nagellack5C.github.io/ariadne/`
   - Usually available within 1-2 minutes after push

### What you get:
- ✅ Free hosting
- ✅ Auto-deploy via GitHub Actions
- ✅ Custom domain support
- ✅ No third-party account needed

### Note:
The app is configured to work with the `/ariadne/` base path for GitHub Pages.
If deploying to a custom domain, update `vite.config.js`:
```js
base: '/'  // Instead of '/ariadne/'
```

---

## Option 4: Cloudflare Pages

**Best for:** Fast global CDN, unlimited bandwidth

### Steps:
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect to GitHub
3. Select your repository
4. Configure:
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Deploy

### What you get:
- ✅ Unlimited bandwidth (free)
- ✅ Fast global CDN
- ✅ Auto-deploy on push
- ✅ Preview deployments

---

## Comparison Table

| Feature | Vercel | Netlify | GitHub Pages | Cloudflare |
|---------|--------|---------|--------------|------------|
| Free Tier | ✅ Generous | ✅ Generous | ✅ Unlimited | ✅ Unlimited |
| Auto Deploy | ✅ | ✅ | ✅ | ✅ |
| Preview URLs | ✅ | ✅ | ❌ | ✅ |
| Setup Time | 2 min | 2 min | 5 min | 3 min |
| Custom Domain | ✅ Free | ✅ Free | ✅ Free | ✅ Free |
| Build Time | Fast | Fast | Medium | Fast |
| Best For | React apps | All static sites | Open source | High traffic |

---

## Local Testing Before Deploy

Always test your production build locally first:

```bash
# Build the app
npm run build

# Preview the production build
npm run preview
```

The preview server will start at `http://localhost:4173`

---

## Environment Variables

If you need environment variables (for API keys when integrating real APIs):

### Vercel/Netlify:
Add them in the dashboard under "Environment Variables"

### GitHub Pages:
Use GitHub Secrets:
1. Go to repo Settings → Secrets → Actions
2. Add secrets (e.g., `VITE_API_KEY`)
3. Reference in workflow: `VITE_API_KEY: ${{ secrets.VITE_API_KEY }}`

---

## Recommended Setup

**For development and testing:**
- Use **Vercel** - fastest setup, best developer experience

**For production/portfolio:**
- Use **Vercel** or **Netlify** - professional URLs, analytics

**For open source/free forever:**
- Use **GitHub Pages** - completely free, unlimited bandwidth

---

## Post-Deployment

After deploying, you'll get a URL like:
- Vercel: `https://ariadne-xyz.vercel.app`
- Netlify: `https://ariadne-xyz.netlify.app`
- GitHub Pages: `https://nagellack5C.github.io/ariadne/`

Share this URL to let others test your app!

### Custom Domain (Optional)

All platforms support custom domains for free:
1. Buy a domain (e.g., from Namecheap, Google Domains)
2. Add it in your deployment platform's settings
3. Update DNS records as instructed
4. Get free SSL automatically
