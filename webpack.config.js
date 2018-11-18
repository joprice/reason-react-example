const path = require('path');
const outputDir = path.join(__dirname, "build/");
const isProd = process.env.NODE_ENV === 'production';
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

const hash = isProd ? 'contenthash' : 'hash';
const entry = isProd ? './src/Index.bs.js' : './src/DevIndex.bs.js';

module.exports = {
  entry : entry,
  mode : isProd ? 'production' : 'development',
  output : {
    path : outputDir,
    publicPath : '/',
    filename : `assets/[name].[${hash}].js`,
  },
  devtool : isProd ? false : 'cheap-module-source-map',
  module : {
    rules : [ {
      test : /\.css$/,
      use : [
        {
          loader : MiniCssExtractPlugin.loader,
        },
        'css-loader'
      ]
    } ]
  },
  plugins : [
    new CleanWebpackPlugin([ outputDir ], {verbose : false}),
    new MiniCssExtractPlugin({
      filename : `assets/[name].[${hash}].css`,
      chunkFilename : `assets/[name]-[id].[${hash}].css`
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessorOptions :
          {sourcemap : true, map : {inline : false, annotation : true}}
    }),
    new HtmlWebpackPlugin({
      template : path.join(__dirname, 'index.html'),
      // can also pass object with options from here:
      // https://github.com/kangax/html-minifier#options-quick-reference
      minify : true
    }),
    new ErrorOverlayPlugin()
  ],
  devServer : {
    // watchContentBase : true,
    // see
    // https://github.com/webpack/docs/wiki/webpack-dev-server#the-historyapifallback-option
    historyApiFallback : true,
    stats : 'errors-only'
  },
  optimization : {
    runtimeChunk : 'single',
    splitChunks : {
      cacheGroups : {
        vendor : {
          test : /[\\/]node_modules[\\/]/,
          name : 'vendor',
          chunks : 'all'
        }
      }
    }
  }
};
