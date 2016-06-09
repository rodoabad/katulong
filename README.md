[![npm](https://img.shields.io/npm/v/katulong.svg?style=flat-square)](https://www.npmjs.com/package/katulong)
[![Travis](https://img.shields.io/travis/rodoabad/katulong.svg?style=flat-square)](https://travis-ci.org/rodoabad/katulong)

# Katulong

Katulong is a Tagalog word that means assistant and that's exactly what it does. Katulong assist you in keeping your projects organized so that you can focus on your development. 

## Installation

Install `katulong` as a dev dependency for your project.

`npm i katulong -D`

## Features

* coverage - run your unit test and check for 100% coverage
* linting - lint your files
* test - run your unit test


### Linting

Currently uses [ESLint](https://github.com/eslint/eslint) to lint your JS files using rules from [eslint-config-rodoabad](https://github.com/rodoabad/katulong).

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
