const shell = require('shelljs');
const utils = require('../utils');

const directoriesToCheck = [
    'test/unit'
].join(' ');

const builder = {
    files: {
        default: directoriesToCheck
    }
};

const handler = argv => {

    shell.exec(`${utils.binPath}/mocha ${argv.files}`);

};

exports.command = 'test';
exports.describe = 'run your package\'s unit tests';
exports.builder = builder;
exports.handler = handler;
