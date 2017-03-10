#! /usr/bin/env node
const rc = require('./../.katulongrc');
const yargs = require('yargs');
const pluginOptions = require('./../src/plugin-options');
const presetOptions = require('./../src/preset-options');

const atLeastOneCommand = 1;

const pathToUse = rc.path ?
                  rc.path :
                  '../node_modules';

return yargs
    .commandDir(pathToUse, pluginOptions(rc.plugins))
    .commandDir(pathToUse, presetOptions(rc.presets))
    .strict()
    .usage('Usage: $0 --help')
    .demand(atLeastOneCommand)
    .help()
    .argv;
