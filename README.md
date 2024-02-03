# @techlove/eslint-config@3

This is `v3`. It targets TypeScript. For the JavaScript version, use the `v1` branch, or the package `@techlove/eslint-config@1`.

## Installation
```bash
npm install @techlove/eslint-config
```

If you're using React:

```bash
npm install @techlove/eslint-config eslint-plugin-react
```

## Setup
Create a `.eslintrc.js` (`.eslintrc.cjs` for ESM) in the root directory:

```typescript
require('@techlove/eslint-config/patch');

module.exports = {
  extends: '@techlove/eslint-config'
};
```

```typescript
require('@techlove/eslint-config/patch');

module.exports = {
  extends: '@techlove/eslint-config',
  plugins: [
    'react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
```

## License

MIT
