const webpack = require('webpack');
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const playgroundBasedir = join(__dirname, 'docs');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: join(playgroundBasedir, 'index.tsx'),
  output: {
    path: playgroundBasedir,
    filename: 'ReactContexify.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            noUnusedLocals: false,
          },
        },
      },
      // {
      //   test: /\.s?css$/,
      //   use: [
      //     {
      //       loader: "style-loader"
      //     },
      //     {
      //       loader: "css-loader"
      //     },
      //     {
      //       loader: "sass-loader"
      //     }
      //   ]
      // },
      {
        // 追加されたシリーズ
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.ttf$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(playgroundBasedir, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MonacoWebpackPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port: process.env.PORT || 8888,
    historyApiFallback: true,
    open: true,
    // host: '0.0.0.0'
  },
};
