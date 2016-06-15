const utils = require('../utils');
const webpack = require('webpack');

const host = '0.0.0.0';
const port = '3000';

const config = {
    devtool: 'eval',
    entry: [
        `${utils.nodeModulesPath}/webpack-dev-server/client?http://${host}:${port}`,
        `${utils.nodeModulesPath}/webpack/hot/only-dev-server`,
        `${utils.pkgPath}/src/index.js`
    ],
    output: {
        path: `${utils.pkgPath}/demo`,
        filename: 'preview.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: /src/,
                loader: 'react-hot'
            },
            {
                test: /\.js$/,
                include: /src/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: [
                        require.resolve('babel-preset-react')
                    ]
                }
            }
        ]
    },
    resolveLoader: {
        root: `${utils.nodeModulesPath}`
    }
};

module.exports = {
    config,
    host,
    port
};
