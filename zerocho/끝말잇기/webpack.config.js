const path = require('path');

module.exports = {
  name: 'wordRelay-setting',
  mode: 'development', // 실서비스: production
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
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    }],
  },

  output: {
    path: path.join(__dirname, 'dist'), // C:\users\.... 
    filename: 'app.js'
  }, // 출력
};