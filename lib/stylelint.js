const shell = require('shelljs');
const utils = require('./utils');

const directoriesToCheck = [
    './bin/**/*.scss',
    './lib/**/*.scss',
    './src/**/*.scss',
    './test/**/*.scss'
].join(' ');

const builder = {
    files: {
        default: directoriesToCheck
    }
};

const handler = argv => {

    shell.exec(`${utils.binPath}/stylelint ${argv.files} --syntax scss`, code => shell.exit(code));

};

exports.command = 'stylelint';
exports.describe = 'lint your styles';
exports.builder = builder;
exports.handler = handler;
