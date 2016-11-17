const eslintCommand = require('../../lib/eslint');
const expect = require('code').expect;
const shell = require('shelljs');
const sinon = require('sinon');

describe('Given the `eslint` command', () => {

    let sandbox,
        shellStub;

    beforeEach(() => {

        sandbox = sinon.sandbox.create();

        shellStub = sandbox.stub(shell, 'exec');

    });

    afterEach(() => {

        sandbox.restore();

    });

    it('should have the correct name', () => {

        const expectedCommandName = 'eslint';

        expect(eslintCommand.command).string().equal(expectedCommandName);

    });

    context('when calling the handler method', () => {

        it('should execute `shell.exec`', () => {

            sinon.assert.notCalled(shellStub);

            eslintCommand.handler({});

            sinon.assert.calledOnce(shellStub);

        });

    });

});
