const shell = require('shelljs');
const utils = require('./utils');

const handler = () => {

    shell.rm('-rf', `${utils.pkgPath}/dist`);
    shell.exec(`${utils.binPath}/webpack -p`);

};

module.exports = {
    builder: {},
    command: 'bundle',
    describe: 'bundle package',
    handler
};
