module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    })
    return config
  },
}
