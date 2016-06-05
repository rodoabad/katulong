#! /usr/bin/env node
const path = require('path');
const shell = require('shelljs');

const packageDir = path.resolve('./');

shell.exec(`eslint ${packageDir}/lib/** ${packageDir}/src/** ${packageDir}/test/**`);
