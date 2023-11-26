const path = require("path")

module.exports = {
  // mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    filename: "bundle.js"
  },
  devServer: {
    static: path.join(__dirname, 'dist/'),
    devMiddleware: {
      publicPath: '/assets/'
    },
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      }
    ]
  }

}
