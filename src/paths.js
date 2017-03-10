const path = require('path');

const katulongRootPath = path.resolve('./node_modules/katulong/');
const nodeModulesPath = path.resolve('./node_modules/');
const pkgPath = path.resolve('.');
const pkg = require(`${pkgPath}/package.json`);
const binPath = path.resolve('./node_modules/.bin');

module.exports = {
    binPath,
    katulongRootPath,
    nodeModulesPath,
    pkg,
    pkgPath
};
