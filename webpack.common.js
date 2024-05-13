const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const htmlWebpackPluginConfig = {
  title: "CeritaCita",
  meta: {
    viewport:
      "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0",
  },
};

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/js/index.js"),
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]ss)$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => [require("autoprefixer")],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/views/index.html"),
      templateParameters: {
        brandName: "CeritaCita",
        page: "dashboard",
      },
      ...htmlWebpackPluginConfig,
    }),

    new HtmlWebpackPlugin({
      filename: "pages/profile.html",
      template: path.resolve(__dirname, "src/views/pages/profile.html"),
      templateParameters: {
        brandName: "CeritaCita",
        page: "profile",
      },
      ...htmlWebpackPluginConfig,
    }),

    new HtmlWebpackPlugin({
      filename: "pages/add.html",
      template: path.resolve(__dirname, "src/views/pages/add.html"),
      templateParameters: {
        brandName: "CeritaCita",
        page: "add",
      },
      ...htmlWebpackPluginConfig,
    }),

    new HtmlWebpackPlugin({
      filename: "auth/register.html",
      template: path.resolve(__dirname, "src/views/auth/register.html"),
      templateParameters: {
        brandName: "CeritaCita",
        page: "register",
      },
      ...htmlWebpackPluginConfig,
    }),

    new HtmlWebpackPlugin({
      filename: "auth/login.html",
      template: path.resolve(__dirname, "src/views/auth/login.html"),
      templateParameters: {
        brandName: "CeritaCita",
        page: "login",
      },
      ...htmlWebpackPluginConfig,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public/"),
          to: path.resolve(__dirname, "dist/"),
        },
      ],
    }),
  ],
};
