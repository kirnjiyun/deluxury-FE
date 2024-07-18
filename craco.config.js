const path = require("path");

module.exports = {
    webpack: {
        alias: {},
        plugins: [],
        configure: (webpackConfig, { env, paths }) => {
            webpackConfig.resolve.fallback = {
                ...webpackConfig.resolve.fallback,
                http: require.resolve("stream-http"),
                https: require.resolve("https-browserify"),
            };
            return webpackConfig;
        },
    },
};
