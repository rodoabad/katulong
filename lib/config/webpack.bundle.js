const utils = require('../utils');
const webpack = require('webpack');

const pkgWebpackConfig = `${utils.pkgPath}/webpack.bundle`;
const config = require(pkgWebpackConfig);

config.output.libraryTarget = config.output.libraryTarget || 'umd';
config.plugins = [
    new webpack.optimize.UglifyJsPlugin({
        comments: false,
        compress: {
            warnings: false
        },
        mangle: true,
        minimize: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    ...config.plugins
];

module.exports = config;
