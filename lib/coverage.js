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

    shell.rm('-rf', `${utils.pkgPath}/coverage`);
    shell.exec(`${utils.binPath}/babel-node ${utils.nodeModulesPath}/isparta/bin/isparta cover --report html ${utils.nodeModulesPath}/mocha/bin/_mocha -- ${argv.files} --reporter min`);
    shell.exec(`node ${utils.nodeModulesPath}/istanbul/lib/cli check-coverage --statement 100 --branch 100 --function 100 --line 100`);

};

exports.command = 'coverage';
exports.describe = 'check your test coverage';
exports.builder = builder;
exports.handler = handler;
