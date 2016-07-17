const shell = require('shelljs');
const utils = require('./utils');

const handler = () => {

    shell.rm('-rf', `${utils.pkgPath}/dist`);
    shell.exec(`${utils.binPath}/webpack -p`);

};

module.exports = {
    command: 'bundle',
    describe: 'bundle package',
    builder: {},
    handler
};
