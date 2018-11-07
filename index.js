module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules'
  ],
  rules: {
    'string-quotes': 'single',
    'function-url-quotes': 'always',
    'color-hex-length': 'long',
    'max-nesting-depth': 3,
    'declaration-block-no-redundant-longhand-properties': null,
    'font-family-name-quotes': null,
    'number-leading-zero': 'never',
    'value-list-comma-newline-after': null,
    'selector-pseudo-element-colon-notation': 'single',
    'at-rule-name-space-after': null,
    'declaration-empty-line-before': null,
    'declaration-colon-newline-after': null,
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': [
      true,
      {
        'ignoreAtRules': [
          'function',
          'if',
          'else',
          'each',
          'for',
          'while',
          'mixin',
          'include',
          'return',
          'media',
          'at-root',
          'debug',
          'warn',
          'error',
          'content'
        ]
      }
    ]
  }
}
