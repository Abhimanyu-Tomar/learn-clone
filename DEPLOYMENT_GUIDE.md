# Deployment Guide for Learn-Clone Application

This guide will help you deploy your React application publicly and configure it with a custom domain.

## Table of Contents
1. [Quick Deploy Options](#quick-deploy-options)
2. [Self-Hosting on Your System](#self-hosting-on-your-system)
3. [Domain Configuration](#domain-configuration)
4. [Production Build](#production-build)

---

## Quick Deploy Options (Recommended)

### Option 1: Vercel (Easiest & Free)

**Steps:**
1. Push your code to GitHub (if not already done)
2. Go to [vercel.com](https://vercel.com)
3. Sign up with your GitHub account
4. Click "New Project" and import your repository
5. Vercel will auto-detect it's a React app
6. Click "Deploy"
7. Your app will be live at `https://your-project.vercel.app`

**Custom Domain Setup:**
- Go to your project settings in Vercel
- Navigate to "Domains"
- Add your custom domain
- Update your domain's DNS records with the values Vercel provides

### Option 2: Netlify (Easy & Free)

**Steps:**
1. Go to [netlify.com](https://netlify.com)
2. Sign up and click "Add new site" → "Import an existing project"
3. Connect to your Git repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
5. Click "Deploy site"
6. Your app will be live at `https://your-site.netlify.app`

**Custom Domain Setup:**
- Go to "Domain settings" in your site dashboard
- Click "Add custom domain"
- Follow the DNS configuration instructions

### Option 3: GitHub Pages (Free)

**Steps:**
1. Install gh-pages package (see instructions below)
2. Push to GitHub
3. Your app will be live at `https://yourusername.github.io/learn-clone`

---

## Self-Hosting on Your System

### Prerequisites
- Node.js installed
- A way to expose your local server to the internet (ngrok, localtunnel, or a VPS)

### Method A: Using ngrok (Quick Test)

1. **Build the production version:**
   ```bash
   npm run build
   ```

2. **Install serve globally:**
   ```bash
   npm install -g serve
   ```

3. **Serve the production build:**
   ```bash
   serve -s build -l 3000
   ```

4. **Install ngrok:**
   - Download from [ngrok.com](https://ngrok.com)
   - Extract and move to your PATH

5. **Expose your local server:**
   ```bash
   ngrok http 3000
   ```

6. **Access your app:**
   - ngrok will provide a public URL like `https://abc123.ngrok.io`
   - Anyone can access your app through this URL

**Note:** The free ngrok URL changes each time you restart. For a permanent solution, upgrade to a paid plan or use a VPS.

### Method B: Using a VPS (Production Ready)

#### Prerequisites:
- A VPS (DigitalOcean, AWS, Linode, etc.)
- A domain name
- SSH access to your server

#### Steps:

1. **Build your application locally:**
   ```bash
   npm run build
   ```

2. **Set up your VPS:**
   ```bash
   # SSH into your server
   ssh user@your-server-ip

   # Install Node.js and nginx
   sudo apt update
   sudo apt install nodejs npm nginx -y
   ```

3. **Upload your build folder to the server:**
   ```bash
   # From your local machine
   scp -r build user@your-server-ip:/var/www/learn-clone
   ```

4. **Configure nginx:**
   ```bash
   # On your server
   sudo nano /etc/nginx/sites-available/learn-clone
   ```

   Add this configuration:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com www.your-domain.com;

       root /var/www/learn-clone;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Enable gzip compression
       gzip on;
       gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
   }
   ```

5. **Enable the site:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/learn-clone /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

6. **Set up SSL with Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx -y
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

### Method C: Using Docker (Portable)

See `Dockerfile` and `docker-compose.yml` included in this project.

```bash
# Build and run with Docker
docker build -t learn-clone .
docker run -p 80:80 learn-clone
```

---

## Domain Configuration

### Step 1: Purchase a Domain
- Popular registrars: Namecheap, GoDaddy, Google Domains, Cloudflare

### Step 2: Configure DNS Records

#### For Vercel/Netlify:
They will provide you with specific DNS records to add.

#### For Self-Hosted (VPS):
Add these DNS records in your domain registrar's dashboard:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | your-server-ip | 3600 |
| A | www | your-server-ip | 3600 |

Or if using Cloudflare:
| Type | Name | Value | Proxy Status |
|------|------|-------|--------------|
| A | @ | your-server-ip | Proxied |
| CNAME | www | your-domain.com | Proxied |

**DNS Propagation:** Changes can take 24-48 hours to fully propagate.

---

## Production Build

### Create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with:
- Minified JavaScript and CSS
- Optimized assets
- Service worker for caching
- Source maps for debugging

### Test the production build locally:

```bash
# Install serve if you haven't already
npm install -g serve

# Serve the build folder
serve -s build -l 3000
```

Visit `http://localhost:3000` to test.

---

## Environment Variables (If Needed)

If your app uses environment variables:

1. Create a `.env.production` file:
   ```
   REACT_APP_API_URL=https://api.your-domain.com
   REACT_APP_GA_ID=your-google-analytics-id
   ```

2. The build process will automatically include these.

---

## Troubleshooting

### Issue: Blank page after deployment
**Solution:** Check if you need to set `homepage` in `package.json`:
```json
"homepage": "https://your-domain.com"
```

### Issue: 404 on page refresh
**Solution:** Configure your server to serve `index.html` for all routes (see nginx config above).

### Issue: Routing not working
**Solution:** Ensure you're using BrowserRouter (already configured) and server redirects all routes to index.html.

---

## Recommended: Use Vercel or Netlify

For your use case, I highly recommend **Vercel** or **Netlify** because:
- ✅ Free tier is generous
- ✅ Automatic deployments from Git
- ✅ Free SSL certificates
- ✅ Global CDN
- ✅ Easy custom domain setup
- ✅ No server maintenance
- ✅ Excellent performance
- ✅ Built-in CI/CD

---

## Next Steps

1. Choose your deployment method
2. Build your production version (`npm run build`)
3. Deploy using one of the methods above
4. Configure your custom domain
5. Test your live application
6. Set up monitoring and analytics (optional)

---

## Need Help?

If you encounter any issues during deployment, check:
- Build logs for errors
- Browser console for JavaScript errors
- Network tab for failed requests
- Server logs (if self-hosting)

Good luck with your deployment! 🚀

