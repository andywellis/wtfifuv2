# WTFIFU Deployment Guide — Complete Walkthrough
## For someone who has never deployed a website before

---

## OPTION A: Netlify (EASIEST — recommended for you)
### No command line needed. Just drag and drop.

### Step 1: Download the project from Claude
1. In this Claude chat, you should see the project files I've shared
2. Download the entire `wtfifu-modular` folder to your computer
3. If files downloaded individually, make sure the folder structure looks like:
```
wtfifu-modular/
  index.html
  package.json
  vite.config.js
  src/
    App.jsx
    EndoBrowser.jsx
    ProductBrowser.jsx
    index.jsx
    components/
      LandingPage.jsx
      UIKit.jsx
    data/
      endoData.js
      index.js
      prosthData.js
      restorativeData.js
      shared.js
      sharedRestProsthData.js
```

### Step 2: Build the project (one-time setup)
You need Node.js installed on your computer to build the project.

**If you DON'T have Node.js:**
1. Go to https://nodejs.org
2. Download the "LTS" version (the big green button)
3. Install it (just click Next through the installer)
4. Restart your computer after installation

**Build the project:**
1. Open Terminal (Mac) or Command Prompt (Windows)
2. Navigate to your project folder:
   - Mac: `cd ~/Downloads/wtfifu-modular` (or wherever you saved it)
   - Windows: `cd C:\Users\YourName\Downloads\wtfifu-modular`
3. Run these three commands, one at a time:
```
npm install
npm run build
```
4. This creates a `dist/` folder — that's your finished website

### Step 3: Deploy to Netlify
1. Go to https://app.netlify.com
2. Sign up with your GitHub account (or email)
3. Once logged in, you'll see your dashboard
4. Look for the area that says "Want to deploy a new site without connecting to Git?"
   Or just drag and drop:
5. **DRAG the `dist/` folder** (the one created in Step 2) directly onto the Netlify dashboard
6. Netlify will upload it and give you a URL like `random-name-123.netlify.app`
7. That's it — your site is live!

### Step 4: Custom URL (optional)
1. In Netlify dashboard, click "Site settings"
2. Click "Change site name"  
3. Type something like `wtfifu` → your URL becomes `wtfifu.netlify.app`

---

## OPTION B: GitHub Pages (Free, connected to your repo)
### Slightly more steps, but gives you version control

### Step 1: Create a GitHub account (if you don't have one)
1. Go to https://github.com
2. Click "Sign up"
3. Use your email, create a username and password
4. Verify your email

### Step 2: Create a new repository
1. Click the "+" button in the top right → "New repository"
2. Repository name: `WTFIFUV1` (or whatever you want)
3. Description: "Evidence-based dental materials protocol reference"
4. Select "Public" (free hosting requires public)
5. CHECK the box "Add a README file"
6. Click "Create repository"

### Step 3: Upload the project files
1. In your new repository, click "Add file" → "Upload files"
2. Drag ALL the files from your `wtfifu-modular` folder into the upload area:
   - index.html
   - package.json
   - vite.config.js
   - The entire `src/` folder
3. Scroll down, type a commit message like "Initial WTFIFU modular build"
4. Click "Commit changes"

### Step 4: Connect to Netlify for hosting
GitHub Pages doesn't easily host React/Vite apps. The easiest path:
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Click "GitHub" → authorize Netlify to access your GitHub
4. Select your `WTFIFUV1` repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"
7. Netlify will build and deploy automatically
8. Every time you update files on GitHub, Netlify rebuilds automatically

---

## OPTION C: StackBlitz/CodeSandbox (INSTANT — no install needed)
### Test it right now without installing anything

### StackBlitz (fastest)
1. Go to https://stackblitz.com
2. Click "Start a new project" → "Vite + React"
3. This opens an online code editor with a preview panel
4. DELETE all the files in the `src/` folder in StackBlitz
5. Upload YOUR files:
   - Drag your `src/` folder contents into the StackBlitz file panel
   - Replace `index.html`, `package.json`, `vite.config.js` in the root
6. The preview panel should show your app running live
7. Click "Share" to get a link you can send to anyone

---

## WHICH SHOULD I CHOOSE?

| Method | Difficulty | Speed | Best For |
|--------|-----------|-------|----------|
| StackBlitz | ⭐ Easiest | Instant | Quick testing, sharing with colleagues |
| Netlify drag-drop | ⭐⭐ Easy | 5 min | Permanent site with nice URL |
| Netlify + GitHub | ⭐⭐⭐ Medium | 15 min | Long-term project with auto-updates |

**My recommendation: Start with StackBlitz to TEST it works, then move to Netlify for a permanent URL.**

---

## TROUBLESHOOTING

**"npm: command not found"**
→ Node.js isn't installed. Go to https://nodejs.org and install it.

**"Module not found" errors**
→ Make sure the folder structure matches exactly. The `src/data/` folder must contain all 6 .js files.

**Blank white page**
→ Open browser developer tools (F12) → Console tab → look for red error messages. 
   Most common: a missing import or file in the wrong location.

**"Cannot resolve './data/sharedRestProsthData.js'"**
→ The data files aren't in the right folder. Make sure `src/data/` has all files.
