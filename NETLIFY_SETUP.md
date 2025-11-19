# Netlify Auto-Deployment Setup Guide

## Quick Fix: Reconnect Netlify to GitHub

If Netlify isn't auto-building, follow these steps:

### Step 1: Check Netlify Dashboard
1. Go to [app.netlify.com](https://app.netlify.com)
2. Select your site
3. Go to **Site settings** → **Build & deploy** → **Continuous Deployment**

### Step 2: Verify GitHub Connection
1. Under **Build settings**, check:
   - **Base directory**: (leave empty)
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `20` (should be set automatically)

### Step 3: Reconnect Repository (if needed)
1. Go to **Site settings** → **Build & deploy** → **Continuous Deployment**
2. Click **Link to Git provider**
3. Select **GitHub**
4. Authorize Netlify if prompted
5. Select repository: `rushaad-cell/personal-website`
6. Select branch: `main`
7. Click **Save**

### Step 4: Trigger Manual Build
1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Deploy site**
3. This will test if the build works

### Step 5: Test Auto-Deploy
1. Make a small change (add a comment to any file)
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Test auto-deploy"
   git push origin main
   ```
3. Check Netlify dashboard - a new deploy should start automatically

## Common Issues

### Issue: "Build failed"
- Check the build logs in Netlify dashboard
- Ensure `NODE_VERSION = "20"` is in `netlify.toml` (already set ✅)

### Issue: "No builds triggered"
- Check that webhook is set up:
  1. Go to GitHub repo → **Settings** → **Webhooks**
  2. Look for a Netlify webhook URL
  3. If missing, reconnect in Netlify (Step 3 above)

### Issue: "Build succeeds but site doesn't update"
- Check **Publish directory** is set to `.next` (already configured ✅)
- Clear Netlify cache:
  1. **Deploys** → **Trigger deploy** → **Clear cache and deploy site**

## Current Configuration

Your `netlify.toml` is correctly configured:
- ✅ Build command: `npm run build`
- ✅ Publish directory: `.next`
- ✅ Node version: `20`
- ✅ Next.js plugin: `@netlify/plugin-nextjs`

## Still Not Working?

1. **Check GitHub webhook**:
   - Go to: https://github.com/rushaad-cell/personal-website/settings/hooks
   - Should see a Netlify webhook URL

2. **Check Netlify build logs**:
   - Look for any error messages
   - Check if dependencies are installing correctly

3. **Try manual deploy**:
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

4. **Contact Netlify support** if issues persist

