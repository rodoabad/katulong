#! /usr/bin/env node
const coverage = require('../src/coverage');
const init = require('../src/init');
const lint = require('../src/lint');
const preview = require('../src/preview');
const test = require('../src/test');
const yargs = require('yargs');

return yargs
    .usage('Usage: $0 --help')
    .strict()
    .example('$0 lint --files ./vendor', 'Lint files in the vendor directory')
    .command(coverage)
    .command(init)
    .command(lint)
    .command(preview)
    .command(test)
    .demand(1) // eslint-disable-line no-magic-numbers
    .help()
    .epilogue('For more information about katulog visit https://github.com/rodoabad/katulong')
    .argv;
