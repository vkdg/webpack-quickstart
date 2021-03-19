const webpack = require('webpack');
const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  home: path.join(__dirname, '../'),
  assets: 'assets/'
}

const PAGES_DIR = PATHS.src
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.html'))

module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    app: [`${PATHS.src}/assets/scss/main.scss`, `${PATHS.src}/assets/js/main.js`],
  },
  output: {
    filename: `${PATHS.assets}js/[name].min.js`,
    path: PATHS.dist,
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: MiniCssExtractPlugin.loader,
          options: { esModule: false }
        },
        {
          loader: 'css-loader',
          options: { sourceMap: true, url: false }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, postcssOptions: { config: path.resolve(__dirname, "./postcss.config.js") } }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: MiniCssExtractPlugin.loader,
          options: { esModule: false }
        },
        {
          loader: 'css-loader',
          options: { sourceMap: true, url: false }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, postcssOptions: { config: path.resolve(__dirname, "./postcss.config.js") } }
        }
      ]
    }]
  },
  resolve: {
    alias: {
      '~': PATHS.src
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].min.css`,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new CopyWebpackPlugin(
      {
        patterns: [
          { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
          { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
        ]
      }
    ),
  ],
}
