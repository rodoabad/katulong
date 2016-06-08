const shell = require('shelljs');
const utils = require('../utils');

const directoriesToCheck = [
    '.',
    'bin',
    'lib',
    'src',
    'test'
].join(' ');

const builder = {
    files: {
        default: directoriesToCheck
    }
};

const handler = argv => {

    shell.exec(`${utils.binPath}/eslint ${argv.files} --cache`);

};

exports.command = 'lint';
exports.describe = 'lint your files';
exports.builder = builder;
exports.handler = handler;