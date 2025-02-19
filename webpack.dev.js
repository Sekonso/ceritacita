const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    client: {
      logging: "none",
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    watchFiles: ["src/**"],
  },
});
