const shell = require('shelljs');

const directoriesToCheck = [
    'bin',
    'lib',
    'src',
    'test'
];

const handler = argv => {

    shell.exec(`eslint ${argv.files}`);

};

exports.command = 'lint';

exports.describe = 'lint your files';

exports.builder = {
    files: {
        default: directoriesToCheck.join(' ')
    }
};

exports.handler = handler;
