const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

let plugins = [new BundleAnalyzerPlugin()];
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === `production`) {
      config.plugins.push(...plugins);
    }
  },
  pluginOptions: {
    ssr: {
      entry: target => `./src/entry-${target}`,
      defaultTitle: "Hello",
      nodeExternalsWhitelist: [
        /\.css$/,
        /\?vue&type=style/,
        /^vuetify/,
        /^register-service-worker/
      ]
    }
  }
};
