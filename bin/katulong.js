#! /usr/bin/env node
const coverage = require('../lib/coverage');
const init = require('../lib/init');
const lint = require('../lib/lint');
const preview = require('../lib/preview');
const test = require('../lib/test');
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
