/* eslint-disable */
const path = require("path");
const fs = require("fs");
const { override, babelInclude, addWebpackAlias } = require("customize-cra");
const rewireReactHotLoader = require("react-app-rewire-hot-loader");

module.exports = (config, env) => {
  config = Object.assign(
    rewireReactHotLoader(config),
    override(
      addWebpackAlias({
        "react-dom": "@hot-loader/react-dom"
      }),
      addWebpackAlias({
        "react-native": "react-native-web"
      }),
      babelInclude([
        path.resolve("src"),
        fs.realpathSync("../shared/src"),
        fs.realpathSync("../../node_modules/@rnwtm/shared/src")
      ])
    )(config, env)
  );

  return config;
};
