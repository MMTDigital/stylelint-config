# mmtdigital/stylelint-config 

![MMT-Digital](https://img.shields.io/badge/MMT-Digital-red.svg)
[![NPM version][npm-image]][npm-url]

A standard set of rules for style linting at MMT Digital

## Installation
```bash
npm i stylelint @mmtdigital/stylelint-config --save-dev
```

## Configuration
Include the following in your package.json
```json
  "stylelint": {
    "extends": "@mmtdigital/stylelint-config"
  }
```

To lint your code, either use the stylelint CLI or add stylelint to your editor (or do both). More here: https://stylelint.io/#getting-started

## Contribution & Changes
If you disagree with a rule or would like to suggest a change, please raise a Github issue

[npm-image]: https://img.shields.io/npm/v/@mmtdigital/stylelint-config.svg
[npm-url]: https://www.npmjs.com/package/@mmtdigital/stylelint-config
