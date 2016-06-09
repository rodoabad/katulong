const shell = require('shelljs');
const utils = require('./utils');

const directoriesToCheck = [
    'test/unit'
].join(' ');

const builder = {
    files: {
        default: directoriesToCheck
    }
};

const handler = argv => {

    shell.exec(`${utils.binPath}/istanbul cover ${utils.nodeModulesPath}/mocha/bin/_mocha -- ${argv.files} --reporter min`);
    shell.exec(`${utils.binPath}/istanbul check-coverage --statement 100 --branch 100 --function 100 --line 100`);

};

exports.command = 'coverage';
exports.describe = 'check your test coverage';
exports.builder = builder;
exports.handler = handler;