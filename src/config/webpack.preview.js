const WebpackDevServer = require('webpack-dev-server');
const {host, port} = require('./webpack.config');
const utils = require('../utils');
const webpack = require('webpack');

const config = `${utils.pkgPath}/webpack.config.js`;

new WebpackDevServer(webpack(config), {
    contentBase: `${utils.pkgPath}/demo`,
    colors: true,
    compress: true,
    historyApiFallback: true,
    hot: true
}).listen(port, host);
