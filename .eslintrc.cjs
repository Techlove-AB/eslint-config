module.exports = {
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  ignorePatterns: ['scripts'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'sort-destructure-keys',
    'sort-keys-fix'
  ],
  root: true,
  rules: {
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        format: ['camelCase', 'snake_case'],
        leadingUnderscore: 'allow',
        selector: 'default',
        trailingUnderscore: 'allow'
      },
      {
        format: ['camelCase', 'UPPER_CASE', 'snake_case', 'PascalCase'],
        leadingUnderscore: 'allow',
        selector: ['variable', 'objectLiteralProperty', 'typeProperty'],
        trailingUnderscore: 'allow'
      },
      {
        format: ['PascalCase'],
        selector: 'typeLike'
      }
    ],
    camelcase: ['warn', { properties: 'never' }],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc'
        },
        groups: [
          'builtin',
          'internal',
          'external',
          [
            'sibling',
            'parent'
          ],
          'index',
          'object',
          'type'
        ],
        'newlines-between': 'never',
        pathGroups: [
          {
            group: 'parent',
            pattern: '@/**'
          }
        ]
      }
    ],
    indent: [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true
      }
    ],
    semi: [
      'error',
      'always'
    ],
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true
      }
    ],
    'sort-keys-fix/sort-keys-fix': 'error',
    'space-before-function-paren': 0
  }
};
