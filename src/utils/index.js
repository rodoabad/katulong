const path = require('path');

const binPath = path.resolve(__dirname, '../../node_modules/.bin');
const nodeModulesPath = path.resolve(__dirname, '../../node_modules');

module.exports = {
    binPath,
    nodeModulesPath
};
