const path = require('path');
const RefreshWebpackPath = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'GuGuDan-setting',
  mode: 'development',
  devtool: 'eval', //아니면 hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: {
    app: ['./client'], // 확장자 생략, 위에 resolve에서 선언
  },

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
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-refresh/babel',
        ],
      },
    }]
  },

  plugins: [
    new RefreshWebpackPath()
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/',
  },

  devServer: {
    publicPath: '/dist/',
    hot: true
  },
};

// 순서는 (mode) -> entry -> module -> plugin -> output  = 핵심 5가지