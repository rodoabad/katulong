const path = require('path');

const getKatulongRootPath = () => path.resolve('./node_modules/katulong/');
const getNodeModulesPath = () => path.resolve('./node_modules/');
const getPackagePath = () => path.resolve('.');
const getBinPath = () => path.resolve('./node_modules/.bin');

module.exports = {
    getBinPath,
    getKatulongRootPath,
    getNodeModulesPath,
    getPackagePath
};
