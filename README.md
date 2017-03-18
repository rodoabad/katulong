[![npm](https://img.shields.io/npm/v/katulong.svg)](https://www.npmjs.com/package/katulong)
[![Travis](https://img.shields.io/travis/rodoabad/katulong.svg)](https://travis-ci.org/rodoabad/katulong)

[![David](https://img.shields.io/david/rodoabad/katulong.svg?maxAge=2592000)]()
[![David](https://img.shields.io/david/dev/rodoabad/katulong.svg?maxAge=2592000)]()
[![David](https://img.shields.io/david/peer/rodoabad/katulong.svg?maxAge=2592000)]()

# Katulong

> ### **n**. helper, assistant

A typical project will have several development dependencies for linting, running unit tests, building distribution files, documentation, and many more. To show you the amount of tools that a project needs, here is a typical example of a `devDependencies` and `scripts` object in a project that has React/Redux/HapiJS/Webpack as its stack.

```json
{
  "devDependencies": {
    "autoprefixer": "^6.7.7",
    "babel-cli": "^6.5.1",
    "babel-core": "^6.5.2",
    "babel-eslint": "^7.1.1",
    "babel-loader": "^6.2.3",
    "babel-plugin-transform-runtime": "^6.5.2",
    "babel-preset-es2015": "^6.5.0",
    "babel-preset-react": "^6.5.0",
    "babel-preset-stage-0": "^6.5.0",
    "chance": "1.0.6",
    "code": "^4.0.0",
    "css-loader": "^0.27.3",
    "enzyme": "^2.7.1",
    "eslint": "^3.18.0",
    "eslint-config-rodoabad": "^1.13.1",
    "file-loader": "^0.10.1",
    "ghooks": "^2.0.0",
    "h2o2": "^5.4.0",
    "hapi": "^16.1.0",
    "hapi-auth-basic": "^4.2.0",
    "hapi-react-views": "^9.2.1",
    "hapi-webpack-plugin": "^1.3.0",
    "inert": "^4.0.0",
    "isparta": "^4.0.0",
    "istanbul": "^0.4.5",
    "jsdom": "^9.12.0",
    "lost": "^8.0.0",
    "mocha": "^3.2.0",
    "mocha-clean": "^1.0.0",
    "node-sass": "^4.5.0",
    "postcss": "^5.2.16",
    "postcss-import": "^9.1.0",
    "postcss-loader": "^1.3.3",
    "react-addons-test-utils": "^15.4.2",
    "react-hot-loader": "^1.3.1",
    "rimraf": "^2.6.1",
    "sass-loader": "^6.0.3",
    "sinon": "^2.0.0",
    "style-loader": "^0.14.1",
    "stylelint": "^7.9.0",
    "stylelint-config-semantic": "^3.0.0",
    "validate-commit-msg": "^2.11.2",
    "vision": "^4.1.1",
    "webpack": "^2.2.1",
    "webpack-hot-middleware": "^2.17.1"
  },
  "scripts": {
    "preview": "rimraf output/server-dist && babel-node server/server",
    "lint": "eslint ./src ./test --cache",
    "styles": "stylelint --syntax scss ./styles/**/*.scss ./src/**/*.scss",
    "test": "mocha test/unit --require test/utils/console-errors",
    "build": "rimraf dist && webpack -p",
    "verify": "npm run styles && npm run lint && rimraf ./coverage && babel-node node_modules/isparta/bin/isparta cover --report html node_modules/mocha/bin/_mocha -- test/unit && istanbul check-coverage --statement 100 --branch 100 --function 100 --line 100"
  }
}
```

It can be daunting to manage all of these in a single project so you can imagine what happens if you have similar projects that need the same set of tools i.e. multiple repositories for your shareable React components? You will then have to copy and paste the necessary development dependencies making sure that versions are correct and consistent across all of these projects.

Katulong aims to solve this problem by providing a single source of build tools to share through the use of plugins and presets. Now you can focus more on developing instead of tooling and all your projects will have a consistent build structure. You update your plugin or preset for Katulong and every single one of your project that uses Katulong will update accordingly. There is no longer a need to maintain your development dependencies in multiple projects.

Your `devDependencies` and `scripts` object will now look like this.

```json
{
  "devDependencies": {
    "chance": "^1.0.4",
    "code": "^4.0.0",
    "ghooks": "^1.3.2",
    "katulong": "^4.0.0",
    "katulong-preset-rodoabad": "^1.0.0"
  },
  "scripts": {
    "preview": "katulong rodoabad preview",
    "lint": "katulong rodoabad lint",
    "styles": "katulong roodabad styles",
    "test": "katulong rodoabad tests",
    "build": "katulong rodoabad build",
    "verify": "katulong rodoabad verify"
  }
}
```

#### What is Katulong made of?

At the heart of Katulong is `yargs` which enables it to have interactive command lines that can then execute multiple commands.

#### What are Katulong plugins?

A Katulong plugin is a single `yargs` command script you'd like to share. The namespace format for a plugin is `katulong-plugin-<YOUR_PLUGIN_NAME>`.

#### What are Katulong presets?

A Katulong presets is pretty much a bigger set of scripts that you'd like to share across projects. Typically presets include the following scripts—a linter, test runner, coverage, and a module bundler. The namespace format for a preset is `katulong-preset-<YOUR_PRESET_NAME>`.

## Installation

First you need to install `katulong` as a development dependency for your project.

```
npm i katulong -D
```

You then need to install a Katulong preset or a plugin. For this example we'll install my personal preset — [katulong-preset-rodoabad](https://github.com/rodoabad/katulong-preset-rodoabad).

```
npm i katulong-preset-rodoabad -D
```

#### Setup

Before you can start using Katulong it needs a runtime configuration file in your package's root directory called `.katulongrc.js`. Using our example above, we should be loading the `rodoabad` preset.

```javascript
module.exports = {
    presets: [
        'rodoabad'
    ]
};

```

#### Usage

Now that you've properly installed and setup Katulong, it's time to use it.

`katulong <plugin|preset> <command>`

```json
{
  "scripts": {
    "preview": "katulong rodoabad preview",
    "lint": "katulong rodoabad lint",
    "styles": "katulong roodabad styles",
    "test": "katulong rodoabad tests",
    "build": "katulong rodoabad build",
    "verify": "katulong rodoabad verify"
  }
}
```
