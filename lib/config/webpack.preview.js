const WebpackDevServer = require('webpack-dev-server');
const {host, port} = require('./webpack.config');
const utils = require('../utils');
const webpack = require('webpack');

const pkgWebpackConfig = `${utils.pkgPath}/webpack.config`;

const config = require(pkgWebpackConfig);

new WebpackDevServer(webpack(config), {
    contentBase: `${utils.pkgPath}/demo`,
    colors: true,
    compress: true,
    historyApiFallback: true,
    hot: false
}).listen(port, host);
