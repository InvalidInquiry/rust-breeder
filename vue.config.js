process.env.VUE_APP_VERSION = process.env.npm_package_version;

module.exports = {
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    // Configure fork-ts-checker to be more stable on Node 20+
    // This is a temporary workaround until we migrate away from Vue CLI 4.
    config.plugin('fork-ts-checker').tap(args => {
      args[0] = {
        ...args[0],
        async: false, // Run type checking synchronously (more stable on this old stack)
        typescript: {
          ...args[0].typescript,
          memoryLimit: 4096,
          diagnosticOptions: {
            semantic: true,
            syntactic: true,
          },
        },
      };
      return args;
    });
  },
};