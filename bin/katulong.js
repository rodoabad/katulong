#! /usr/bin/env node
const yargs = require('yargs');
const pluginOptions = require('../src/plugin-options');
const presetOptions = require('../src/preset-options');

const path = require('path');

const rcPath = path.resolve('.katulongrc');
const rc = require(rcPath);

const atLeastOneCommand = 1;

const pathToUse = (rc && rc.path) ?
                  path.resolve(rc.path) :
                  path.resolve('node_modules');

return yargs
    .commandDir(pathToUse, pluginOptions(rc.plugins))
    .commandDir(pathToUse, presetOptions(rc.presets))
    .strict()
    .usage('Usage: $0 --help')
    .alias('h', 'help')
    .help('help')
    .demand(atLeastOneCommand)
    .argv;
