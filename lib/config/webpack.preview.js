const WebpackDevServer = require('webpack-dev-server');
const utils = require('../utils');
const webpack = require('webpack');

const pkgWebpackConfig = `${utils.pkgPath}/webpack.config`;
const config = require(pkgWebpackConfig);

const host = '0.0.0.0';
const port = '3000';

config.output.filename = 'demo.js';
config.entry = [
    `${utils.nodeModulesPath}/webpack-dev-server/client?http://${host}:${port}`,
    `${utils.nodeModulesPath}/webpack/hot/only-dev-server`,
    ...config.entry
];
config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    ...config.plugins
];
config.module.loaders = [
    {
        test: /\.js$/,
        include: /src/,
        loader: 'react-hot'
    },
    ...config.module.loaders
];

new WebpackDevServer(webpack(config), {
    contentBase: `${utils.pkgPath}/demo`,
    colors: true,
    compress: true,
    historyApiFallback: true,
    hot: false
}).listen(port, host);
