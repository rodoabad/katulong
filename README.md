[![npm](https://img.shields.io/npm/v/katulong.svg?style=flat-square)](https://www.npmjs.com/package/katulong)
[![Travis](https://img.shields.io/travis/rodoabad/katulong.svg?style=flat-square)](https://travis-ci.org/rodoabad/katulong)

# Katulong

> ### **n**. helper, assistant

A typical project will have tools for linting, running unit tests, building distribution files, and many more. But what happens if you have similar packages that need the same set of tools? Katulong aims to solve this problem by providing a single source of build tools to share. Now you can focus more on developing instead of tooling and all your projects will have a consistent build structure.

## Installation

Install `katulong` as a dev dependency for your project.

```
npm i katulong -D
```

## Features

* coverage - run your unit test and check for 100% coverage
* linting - lint your files
* test - run your unit test

## Coverage

Uses [Istanbul](https://github.com/gotwarlost/istanbul) to check unit test coverage. Command will fail it coverage goes less than 100%.

### Linting

Currently uses [ESLint](https://github.com/eslint/eslint) to lint your JS files using rules from [eslint-config-rodoabad](https://github.com/rodoabad/eslint-config-rodoabad).

#### Usage

```javascript
// package.json
{
  "scripts": {
    "pkg:lint": "katulong lint"
  }
}
```

#### Options

* `--files` - directories to check when linting **default** `['.', 'bin', 'lib', 'src', 'test']`
