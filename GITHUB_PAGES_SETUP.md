# GitHub Pages Setup - Quick Guide

Your app is ready to deploy to GitHub Pages! Just follow these 3 simple steps:

## Step 1: Enable GitHub Pages

1. Go to: **https://github.com/nagellack5C/ariadne/settings/pages**
2. Under "Build and deployment" section:
   - **Source:** Select **"GitHub Actions"** from the dropdown
   - Click **Save**

## Step 2: Trigger Deployment

The deployment will automatically run on your next push, OR you can manually trigger it:

1. Go to: **https://github.com/nagellack5C/ariadne/actions/workflows/deploy.yml**
2. Click **"Run workflow"** button
3. Select your branch: `claude/travel-planner-app-c3VdC`
4. Click **"Run workflow"**

## Step 3: Access Your Site

Once the workflow completes (about 1-2 minutes), your site will be live at:

**https://nagellack5C.github.io/ariadne/**

---

## What's Already Done ✅

- ✅ GitHub Actions workflow file created
- ✅ Vite config updated for GitHub Pages
- ✅ package-lock.json added for dependency caching
- ✅ All code committed and pushed

## Troubleshooting

### If the deployment fails:
1. Check the Actions tab: https://github.com/nagellack5C/ariadne/actions
2. Click on the failed run to see the error
3. Most common issues:
   - GitHub Pages not enabled (follow Step 1 above)
   - Permissions issue (check repository Settings → Actions → General → Workflow permissions)

### If the site shows a 404:
- Wait 1-2 minutes after the first deployment
- Clear your browser cache
- Make sure the base path in vite.config.js is set to '/ariadne/'

---

## Future Deployments

After the initial setup, every push to your branch will automatically deploy! 🎉

No manual steps needed - just:
```bash
git add .
git commit -m "Your changes"
git push
```

And your site updates automatically!
