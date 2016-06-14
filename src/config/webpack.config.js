const path = require('path');
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
        path: path.join(utils.pkgPath, 'demo'),
        filename: 'preview.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = {
    config,
    host,
    port
};
