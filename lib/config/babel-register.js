const plugins = require('./babel-plugins');
const presets = require('./babel-presets');

require('babel-register')({
    plugins,
    presets
});
