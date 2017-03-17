[![npm](https://img.shields.io/npm/v/katulong.svg)](https://www.npmjs.com/package/katulong)
[![Travis](https://img.shields.io/travis/rodoabad/katulong.svg)](https://travis-ci.org/rodoabad/katulong)

[![David](https://img.shields.io/david/rodoabad/katulong.svg?maxAge=2592000)]()
[![David](https://img.shields.io/david/dev/rodoabad/katulong.svg?maxAge=2592000)]()
[![David](https://img.shields.io/david/peer/rodoabad/katulong.svg?maxAge=2592000)]()

# Katulong

> ### **n**. helper, assistant

A typical project will have tools for linting, running unit tests, building distribution files, and many more. But what happens if you have similar packages that need the same set of tools? Katulong aims to solve this problem by providing a single source of build tools to share through the use of plugins and presets. Now you can focus more on developing instead of tooling and all your projects will have a consistent build structure.

At the heart of Katulong is `yargs` which enables this package to have interactive command lines that can then execute `shelljs` commands.

#### What are Katulong plugins?

A Katulong plugin is a single `yargs` command script you'd like to share. The namespace format for a plugin is `katulong-plugin-<YOUR_PLUGIN_NAME>`.

#### What are Katulong presets?

A Katulong presets is pretty much a bigger set of scripts that you'd like to share across projects. Typically presets include the following scripts—a linter, test runner, coverage, and a module bundler. The namespace format for a preset is `katulong-preset-<YOUR_PRESET_NAME>`.

## Installation

First you need to install `katulong` as a dev dependency for your project.

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
// .katulongrc.js
module.exports = {
    presets: [
        'rodoabad'
    ]
};

```

#### Usage

Now that you've properly installed and setup Katulong, it's time to use it.

```json
{
  "scripts": {
    "pkg:eslint": "katulong rodoabad eslint",
    "pkg:test": "katulong rodoabad test",
    "pkg:coverage": "katulong rodoabad coverage"
  }
}
```
