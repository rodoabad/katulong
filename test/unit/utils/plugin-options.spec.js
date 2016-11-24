const Chance = require('chance');
const expect = require('code').expect;
const pluginOptions = require('../../../lib/utils/plugin-options');

describe('Given the yargs `commandDir` options object for katulong plugins', () => {

    it('should only use the right extension', () => {

        const expectedExtensions = 1;
        const expectedExtensionName = 'js';

        expect(pluginOptions.extensions.length).number().equal(expectedExtensions);
        expect(pluginOptions.extensions[0]).string().equal(expectedExtensionName);

    });

    it('should only include folders that follow the katulong format for plugins', () => {

        const chance = new Chance();

        const expectecPackagePrefix = 'katulong-plugin-';
        const expectedLibraryFolder = 'lib';
        const expectedFileName = 'index.js';

        expect(pluginOptions.include(`${chance.hash()}/${expectecPackagePrefix}${chance.hash()}/${expectedLibraryFolder}/${expectedFileName}`)).true();

    });

    it('should not look for subdirectories', () => {

        expect(pluginOptions.recurse).false();

    });

});
