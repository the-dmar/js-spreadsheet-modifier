const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "src/index.ts"),
  devServer: {
    static: path.resolve(__dirname, "public"),
    port: 5001,
    open: true,
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, "src")],
        use: "ts-loader",
      },
    ],
  },
}
