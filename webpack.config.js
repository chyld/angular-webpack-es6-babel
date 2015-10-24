module.exports = {
  entry: {
    javascript: "./client/app.js"
  },

  output: {
    path: __dirname + "/public",
    filename: "app.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
