const shell = require('shelljs');
const utils = require('./utils');

const directoriesToCheck = [
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

    shell.exec(`${utils.binPath}/eslint ${argv.files} --cache --ignore-pattern coverage demo dist node_modules`, code => shell.exit(code));

};

exports.command = 'eslint';
exports.describe = 'lint your JS';
exports.builder = builder;
exports.handler = handler;
