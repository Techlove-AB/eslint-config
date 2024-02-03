require('@techlove/eslint-config/patch');

module.exports = {
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  ignorePatterns: ['scripts', 'node_modules'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@stylistic/ts',
    '@typescript-eslint',
    'no-comments',
    'import',
    'sort-destructure-keys',
    'sort-keys-fix'
  ],
  root: true,
  rules: {
    '@stylistic/ts/brace-style': [2, '1tbs'],
    '@stylistic/ts/comma-dangle': [2, 'never'],
    '@stylistic/ts/indent': [2, 2],
    '@stylistic/ts/key-spacing': [2, { mode: 'strict' }],
    '@stylistic/ts/member-delimiter-style': [2, {
      multiline: {
        delimiter: 'semi',
        requireLast: true
      },
      multilineDetection: 'brackets',
      singleline: {
        delimiter: 'semi',
        requireLast: false
      }
    }],
    '@stylistic/ts/object-curly-spacing': [2, 'always'],
    '@stylistic/ts/padding-line-between-statements': [2,
      {
        blankLine: 'always',
        next: ['interface', 'type', 'export'],
        prev: '*'
      }
    ],
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/no-explicit-any': 1,
    'sort-destructure-keys/sort-destructure-keys': 2,
    'sort-imports': [2, {
      ignoreDeclarationSort: true
    }],
    'sort-keys-fix/sort-keys-fix': 2,
    'camelcase': 0,
    'space-before-function-paren': 0,
    'newline-before-return': 2,
    'no-comments/disallowComments': [2],
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, { max: 1 }],
    'no-tabs': 2,
    'indent': 0,
    'semi': [2, 'always'],
    'padded-blocks': [2, 'never'],
    'linebreak-style': [2, 'unix'],
    'quotes': [2,
      'single', {
        allowTemplateLiterals: true,
        avoidEscape: true
      }
    ],
    'import/order': [2, {
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
    }],
  }
};
