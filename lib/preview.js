const shell = require('shelljs');
const utils = require('./utils');

const handler = () => {

    shell.exec(`node ${utils.katulongRootPath}/lib/config/webpack.preview.js`);

};

module.exports = {
    command: 'preview',
    describe: 'run a preview server',
    builder: {},
    handler
};
