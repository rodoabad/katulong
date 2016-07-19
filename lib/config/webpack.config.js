const babelPresets = require('./babel-presets');
const babelPlugins = require('./babel-plugins');
const utils = require('../utils');

const config = {
    bail: true,
    devtool: 'source-map',
    entry: [
        `${utils.pkgPath}/src/index.js`
    ],
    module: {
        loaders: [
            {
                include: /src/,
                loader: require.resolve('babel-loader'),
                query: {
                    plugins: [
                        require.resolve('babel-plugin-transform-runtime'),
                        ...babelPlugins
                    ],
                    presets: babelPresets
                },
                test: /\.js$/
            }
        ]
    },
    output: {
        filename: `${utils.pkg.name}.js`,
        libraryTarget: 'umd',
        path: `${utils.pkgPath}/dist`
    },
    plugins: [],
    resolveLoader: {
        root: `${utils.nodeModulesPath}`
    }
};

module.exports = {
    config
};
