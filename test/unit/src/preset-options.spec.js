const Chance = require('chance');
const expect = require('code').expect;
const presetOptions = require('../../../src/preset-options');

describe('Given the yargs `commandDir` options object for katulong presets', () => {

    it('should only use the right extension', () => {

        const expectedExtensions = 1;
        const expectedExtensionName = 'js';

        expect(presetOptions().extensions.length).number().equal(expectedExtensions);
        expect(presetOptions().extensions[0]).string().equal(expectedExtensionName);

    });

    it('should only include a preset if it follows the preset directory and file format', () => {

        const chance = new Chance();

        const expectedPreset = chance.hash();

        const validPluginLocation = `${chance.hash()}\\katulong-preset-${expectedPreset}\\lib\\index.js`;
        const invalidPluginLocation = `${chance.hash()}\\${expectedPreset}\\lib\\index.js`;

        const presetsToCheck = [
            expectedPreset
        ];

        expect(presetOptions(presetsToCheck).include(validPluginLocation)).true();
        expect(presetOptions(presetsToCheck).include(invalidPluginLocation)).false();

    });

    it('should look for subdirectories', () => {

        expect(presetOptions().recurse).false();

    });

});
