const shell = require('shelljs');
const utils = require('./utils');

const handler = () => {

    shell.rm('-rf', `${utils.pkgPath}/dist`);
    shell.exec(`${utils.binPath}/webpack --config ${utils.katulongRootPath}/lib/config/webpack.bundle.js`, code => shell.exit(code));

};

module.exports = {
    builder: {},
    command: 'bundle',
    describe: 'bundle package',
    handler
};
