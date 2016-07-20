const babelPresets = require('./babel-presets');
const babelPlugins = require('./babel-plugins');
const utils = require('../utils');

const config = {
    bail: true,
    devtool: 'source-map',
    entry: [
        `${utils.pkgPath}/src/index.js`
    ],
    extensions: [
        '.js',
        ''
    ],
    module: {
        loaders: [
            {
                include: [
                    /demo/,
                    /lib/,
                    /src/,
                    /utils/
                ],
                loader: require.resolve('babel-loader'),
                query: {
                    plugins: [
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
        path: `${utils.pkgPath}/dist`
    },
    plugins: [],
    resolveLoader: {
        root: `${utils.nodeModulesPath}`
    }
};

module.exports = config;
