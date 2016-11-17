const shell = require('shelljs');
const utils = require('./utils');

const directoriesToCheck = [
    'test/unit'
].join(' ');

const builder = {
    files: {
        default: directoriesToCheck
    },
    reporter: {
        default: 'min'
    }
};

const handler = argv => {

    shell.exec(`"${utils.binPath}/mocha" ${argv.files} --reporter ${argv.reporter}`, code => shell.exit(code));

};

module.exports = {
    builder,
    command: 'test',
    describe: 'run your unit tests',
    handler
};
