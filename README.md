# Learn-Clone Application

A multi-page React application with internationalization support (English/Hindi) featuring various policy pages and information sections.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📦 Deployment

### Quick Deploy (Recommended)

We recommend using **Vercel** or **Netlify** for easy, free deployment:

#### Deploy to Vercel
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Click Deploy - it's that simple!

#### Deploy to Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and import your repository
3. Build settings are already configured in `netlify.toml`

### Self-Hosting

Use our deployment script for quick local testing:

```bash
chmod +x deploy.sh
./deploy.sh
```

For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## 🔧 Available Scripts

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## 🐳 Docker Deployment

```bash
# Build Docker image
docker build -t learn-clone .

# Run container
docker run -p 80:80 learn-clone

# Or use docker-compose
docker-compose up -d
```

## 🌐 Custom Domain Setup

After deploying to Vercel/Netlify:
1. Go to your project settings
2. Add your custom domain
3. Update DNS records at your domain registrar
4. SSL certificate will be automatically configured

For self-hosted setup, see the detailed nginx configuration in [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## 📁 Project Structure

```
learn-clone/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable components (Header, Footer)
│   ├── context/         # React Context (Language)
│   ├── pages/           # Page components
│   ├── translations/    # i18n translations
│   └── App.js          # Main app component
├── Dockerfile          # Docker configuration
├── nginx.conf          # Nginx configuration
├── vercel.json         # Vercel deployment config
├── netlify.toml        # Netlify deployment config
└── DEPLOYMENT_GUIDE.md # Detailed deployment guide
```

## 🌍 Features

- Multi-page React application
- Internationalization (English/Hindi)
- Responsive design
- Multiple policy and information pages
- SEO-friendly routing
- Production-ready Docker setup

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
