const path = require('path');

const binPath = path.resolve(__dirname, '../../node_modules/.bin');
const katulongRootPath = path.resolve(__dirname, '../../');
const nodeModulesPath = path.resolve(__dirname, '../../node_modules');
const pkgPath = path.resolve('.');
const pkg = require(`${pkgPath}/package.json`);

module.exports = {
    binPath,
    katulongRootPath,
    nodeModulesPath,
    pkg,
    pkgPath
};
