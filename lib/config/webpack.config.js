const babelPresets = require('./babel-presets');
const babelPlugins = require('./babel-plugins');
const utils = require('../utils');
const webpack = require('webpack');

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
        libraryTarget: 'umd',
        path: `${utils.pkgPath}/dist`
    },
    plugins: [
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
        })
    ],
    resolveLoader: {
        root: `${utils.nodeModulesPath}`
    }
};

module.exports = {
    config
};
