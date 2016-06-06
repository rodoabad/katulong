#! /usr/bin/env node
const yargs = require('yargs');

const lint = require('../src/lint');
const test = require('../src/test');

return yargs
    .usage('Usage: $0 --help')
    .strict()
    .example('$0 lint --files ./vendor', 'Lint files in the vendor directory')
    .command(lint)
    .command(test)
    .demand(1) // eslint-disable-line no-magic-numbers
    .help()
    .epilogue('For more information about katulog visit https://github.com/rodoabad/katulong')
    .argv;
