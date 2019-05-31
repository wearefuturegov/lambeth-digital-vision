# Lambeth digital vision

[![Netlify Status](https://api.netlify.com/api/v1/badges/39104665-bb65-4bad-8c90-5bbf2cddd788/deploy-status)](https://app.netlify.com/sites/lambeth-digital-vision/deploys)

Gulp/webpack-powered static website.

Includes:

- Lints and transpiles javascript with Babel and Webpack
- Compiles sass
- Compresses images
- Hot reloads
- Nunjucks templating, passing in dynamic data specified in the `content.yml` file

Doesn't include:

- Dynamic page generation
- More than one `content.yml` file

## Getting started

Clone the repo, run `npm install` and then use one of the following commands:

- `npm run dev` to start a hot reload server and watch all files for changes
- `npm run build` to create a production build in the `/dist` folder
- `npm run lint` to just check for JS style guide violations

Lint problems **will** break builds.

## Putting it on the web

Just put the /dist folder on a web server.

Comes with a `netlify.toml` file for fast CI/CD deployment to [Netlify](http://netlify.com).