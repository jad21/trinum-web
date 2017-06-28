module.exports = {
  entry: './src/index',
  output: {
    path: './static/js',
    filename: "bundle.js",
  },
  resolve: {
    extensions: ['', '.js']
  }
};