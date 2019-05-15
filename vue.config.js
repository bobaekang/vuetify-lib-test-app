const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

let plugins = [new BundleAnalyzerPlugin()];
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === `production`) {
      config.plugins.push(...plugins);
    }
  }
};
