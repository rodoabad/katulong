const Chance = require('chance');
const expect = require('code').expect;
const pluginOptions = require('../../../src/plugin-options');

describe('Given the yargs `commandDir` options object for katulong plugins', () => {

    it('should only use the right extension', () => {

        const expectedExtensions = 1;
        const expectedExtensionName = 'js';

        expect(pluginOptions().extensions.length).number().equal(expectedExtensions);
        expect(pluginOptions().extensions[0]).string().equal(expectedExtensionName);

    });

    it('should only include a plugin if it follows the plugin directory and file format', () => {

        const chance = new Chance();

        const expectedPlugin = chance.hash();

        const validPluginLocation = `${chance.hash()}\\katulong-plugin-${expectedPlugin}\\src\\index.js`;
        const invalidPluginLocation = `${chance.hash()}\\${expectedPlugin}\\lib\\index.js`;

        const pluginsToCheck = [
            expectedPlugin
        ];

        expect(pluginOptions(pluginsToCheck).include(validPluginLocation)).true();
        expect(pluginOptions(pluginsToCheck).include(invalidPluginLocation)).false();

    });

    it('should look for subdirectories', () => {

        expect(pluginOptions().recurse).true();

    });

});
