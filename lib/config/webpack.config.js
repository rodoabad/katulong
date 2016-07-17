const babelPresets = require('./babel-presets');
const babelPlugins = require('./babel-plugins');
const utils = require('../utils');

const config = {
    devtool: 'eval',
    entry: [
        `${utils.pkgPath}/src/index.js`
    ],
    output: {
        path: `${utils.pkgPath}/dist`,
        filename: `${utils.pkg.name}.js`
    },
    plugins: [],
    module: {
        loaders: [

            {
                test: /\.js$/,
                include: /src/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    plugins: babelPlugins,
                    presets: babelPresets
                }
            }
        ]
    },
    resolveLoader: {
        root: `${utils.nodeModulesPath}`
    }
};

module.exports = {
    config
};
