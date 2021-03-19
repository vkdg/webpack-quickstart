# Webpack Simple
Simple Webpack Build Template

### Installation 
``` bash
git clone https://github.com/vkdg/webpack-quickstart.git ./
npm install
```

### Run DevServer
``` bash
npm run dev
```

### Build Production Version
``` bash
npm run build
```

### Features
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Autoprefixer via [postcss-loader](https://github.com/postcss/postcss-loader)
* Babel via [babel](https://babeljs.io)
* Font Face fix


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
| .editorcofig
| .gitignore
```

### Base repo
[vedees](https://github.com/vedees/webpack-template)
