const path = require("path");
const { dependencies } = require("./package.json");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");

const developmentConfig = {
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3001, // you can change the port
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // to import index.html file inside index.js
    }),
    new ModuleFederationPlugin({
      name: "mfChildren",
      filename: "remoteEntry.js",
      exposes: {
        "./SamplePage": "./src/pages/SamplePage.jsx",
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
  ],
};

module.exports = merge(commonConfig, developmentConfig);
