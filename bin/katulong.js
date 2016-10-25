#! /usr/bin/env node
const bundle = require('../lib/bundle');
const coverage = require('../lib/coverage');
const eslint = require('../lib/eslint');
const init = require('../lib/init');
const preview = require('../lib/preview');
const stylelint = require('../lib/stylelint');
const test = require('../lib/test');
const yargs = require('yargs');

return yargs
    .usage('Usage: $0 --help')
    .strict()
    .example('$0 eslint --files ./vendor', 'Lint files in the vendor directory')
    .command(bundle)
    .command(coverage)
    .command(eslint)
    .command(init)
    .command(preview)
    .command(stylelint)
    .command(test)
    .demand(1) // eslint-disable-line no-magic-numbers
    .help()
    .epilogue('For more information about katulog visit https://github.com/rodoabad/katulong')
    .argv;
