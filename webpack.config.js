
const path = require('path');
module.exports = {
  entry: './src/index.mjml',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.html'
  },
  module:{
    rules:[
      {
        test: /\.mjml$/,
        use: 'mjml'
      }
    ]
  }
}