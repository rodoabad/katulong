const shell = require('shelljs');
const utils = require('./utils');

const filesToCopy = [
    '.editorconfig',
    '.eslintrc.js',
    '.gitattributes',
    '.gitignore',
    '.npmignore',
    '.nvmrc'
];

const fullpath = filesToCopy.map(file => `${utils.katulongRootPath}/${file}`);

const handler = () => {

    shell.cp(fullpath, `${utils.pkgPath}`);

};

module.exports = {
    command: 'init',
    describe: 'initialize your package',
    builder: {},
    handler
};

