process.env.VUE_APP_VERSION = process.env.npm_package_version;

module.exports = {
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    // Remove fork-ts-checker during development.
    // The old version bundled with Vue CLI 4 is incompatible with Node 20+
    // and causes "must install typescript" + resolveTypeReferenceDirective crashes.
    // Type checking still works in your editor (Vetur / Volar).
    // We can re-enable it later or remove it entirely after migrating to Vite.
    if (process.env.NODE_ENV !== 'production') {
      config.plugins.delete('fork-ts-checker');
    }
  }
};