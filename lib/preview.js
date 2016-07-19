const shell = require('shelljs');
const utils = require('./utils');

const handler = () => {

    shell.exec(`node ${utils.katulongRootPath}/lib/config/webpack.preview.js`, code => shell.exit(code));

};

module.exports = {
    builder: {},
    command: 'preview',
    describe: 'run a preview server',
    handler
};
