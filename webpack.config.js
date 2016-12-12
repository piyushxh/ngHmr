module.exports = require('./config/webpack.dev.js');


// var path = require('path');
// const webpack = require('webpack');
// const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
//
// module.exports = {
//   entry: {
//     app: './src/main.ts',
//     polyfills: './src/polyfills.ts',
//     vendor: './src/vendor.ts'
//
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: '[name].js'
//   },
//   resolve: {
//     /*
//      * An array of extensions that should be used to resolve modules.
//      *
//      * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
//      */
//     extensions: ['.ts', '.js', '.json'],
//
//     // An array of directory names to be resolved to the current directory
//     modules: ['./src', './node_modules']
//   },
//   module: {
//     rules: [
//       /*
//        * Typescript loader support for .ts and Angular 2 async routes via .async.ts
//        * Replace templateUrl and stylesUrl with require()
//        *
//        * See: https://github.com/s-panferov/awesome-typescript-loader
//        * See: https://github.com/TheLarkInn/angular2-template-loader
//        */
//       {
//         test: /\.ts$/,
//         use: [
//           'awesome-typescript-loader',
//           'angular2-template-loader'
//         ],
//         exclude: [/\.(spec|e2e)\.ts$/]
//       },
//
//       /*
//        * Json loader support for *.json files.
//        *
//        * See: https://github.com/webpack/json-loader
//        */
//       {
//         test: /\.json$/,
//         use: 'json-loader'
//       },
//
//       /*
//        * to string and css loader support for *.css files
//        * Returns file content as string
//        *
//        */
//       {
//         test: /\.css$/,
//         use: ['to-string-loader', 'css-loader']
//       },
//
//       /* Raw loader support for *.html
//        * Returns file content as string
//        *
//        * See: https://github.com/webpack/raw-loader
//        */
//       {
//         test: /\.html$/,
//         use: 'raw-loader',
//         exclude: ['src/index.html']
//       },
//
//       /* File loader for supporting images, for example, in CSS files.
//        */
//       {
//         test: /\.(jpg|png|gif)$/,
//         use: 'file-loader'
//       }
//     ]
//   },
//   plugins: [
//     new CommonsChunkPlugin({
//       name: ['app', 'vendor', 'polyfills']
//     }),
//
//     new HtmlWebpackPlugin({
//       template: 'src/index.html'
//     })
//   ]
// }