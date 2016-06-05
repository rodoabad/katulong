#! /usr/bin/env node
const yargs = require('yargs');

const lint = require('../src/lint');

return yargs
    .usage('Usage: katulong <cmd>')
    .command(lint)
    .demand(1) // eslint-disable-line no-magic-numbers
    .help()
    .argv;
