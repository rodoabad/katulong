const babelPresets = require('./babel-presets');
const babelPlugins = require('./babel-plugins');
const utils = require('../utils');

const autoprefixer = require('autoprefixer');
const lost = require('lost');

const config = {
    bail: true,
    devtool: 'source-map',
    entry: [
        `${utils.pkgPath}/src/index.js`
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
            },
            {
                include: [
                    /src/
                ],
                loaders: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    require.resolve('sass-loader'),
                    require.resolve('postcss-loader')
                ],
                test: /\.s?css$/
            },
            {
                loader: 'file',
                test: /\.(ttf|eot|svg|woff)$/
            }
        ]
    },
    output: {
        filename: `${utils.pkg.name}.js`,
        path: `${utils.pkgPath}/dist`
    },
    plugins: [],
    postcss: [
        autoprefixer(
            {
                browsers: ['last 2 versions']
            }
        ),
        lost
    ],
    resolve: {
        extensions: [
            '',
            '.js'
        ]
    },
    resolveLoader: {
        root: `${utils.nodeModulesPath}`
    }
};

module.exports = config;
