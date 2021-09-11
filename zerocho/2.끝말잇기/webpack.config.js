const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  name: 'wordRelay-setting',
  // mode: 'development', // 실서비스: production
  mode: isDevelopment ? 'development' : 'production',
  devtool: 'eval', // 빠르게
  resolve: {
    extensions: ['.js', '.jsx'] // js, jsx를 알아서 찾아서 적용
  },

  entry: {
    app: ['./client'], // client.jsx 속에 WordRelay.jsx 있어서 생략
  }, // 입력

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [  // preset은 plugin의 모음, env.target.browsers 는 지원하는 브라우저 지정가능
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR'],  // browserslist
            },
            debug: true,
          }],
          '@babel/preset-react'
        ],
        // plugins: [
        //   '@babel/plugin-proposal-class-properties',
        //   'react-refresh/babel',
        // ],
        plugins: [
          isDevelopment && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    }],
  },

  // plugins: [
  //   new RefreshWebpackPlugin(
  //     { overlay: false }
  //   ),
  // ],

  plugins: [
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(
      { overlay: false }
    ),
  ].filter(Boolean),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/',
  },

  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true
  }
};