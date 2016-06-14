const path = require('path');

const binPath = path.resolve(__dirname, '../../node_modules/.bin');
const katulongRootPath = path.resolve(__dirname, '../../');
const nodeModulesPath = path.resolve(__dirname, '../../node_modules');
const pkgPath = path.resolve('.');

module.exports = {
    binPath,
    katulongRootPath,
    nodeModulesPath,
    pkgPath
};
