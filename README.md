# Webpack Simple (Quickstart)
This repository provides a simple template for developing a frontend using a webpack. This repository is intended primarily for projects with an independent frontend (when the builder is exclusively engaged in assembling javascript and css for further use in the project). Using the code from this repository, you can quickly deploy an assembly of a project based on the simplest and most basic views.

All this is, first of all, relevant to me, so you can use this repository as you like, creating a fork from it, or simply using it in your projects with your own settings. I welcome pull requests to help make this template better.

Enjoy!

### Requirements
* npm v8.3.0+
* node v17.3.0+

### Installation 
``` bash
git clone https://github.com/vkdg/webpack-quickstart.git ./
npm install
```

### Run Watcher
``` bash
npm run watch (or w)
```

### Build Production Version
``` bash
npm run build (or b)
```

### Features
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Autoprefixer via [postcss-loader](https://github.com/postcss/postcss-loader)
* Babel via [babel](https://github.com/babel/babel)
* [ESLint](https://github.com/eslint/eslint) / [Airbnb ESLint Base Config](https://github.com/airbnb/javascript)
* Disable `url` in `css-loader`


### Working Structure
```
| build
| - webpack.base.conf.js (main webpack config)
| - webpack.build.conf.js
| - webpack.dev.conf.js
| - postcss.config.js
| dist
| - assets
| - - css
| - - - app.min.css
| - - - app.min.css.map
| - - fonts
| - - img
| - - js
| - - - app.min.js
| - - - app.min.js.map
| - - - vendors.min.js
| - - - vendors.min.js.map
| node_modules
| src
| - assets
| - - css
| - - fonts
| - - img
| - - js
| - - - main.js (Entrypoint app javascript)
| - - scss
| - - - main.scss (Entrypoint app styles)
| package.json
| package-lock.json
| index.htm
| README.md
| LICENSE
| .editorconfig
| .gitignore
| .eslintrc.js
```

### Special Thanks
[vedees](https://github.com/vedees/webpack-template)
