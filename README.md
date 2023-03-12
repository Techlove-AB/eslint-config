# @techlove/eslint-config@2

This is `v2`. It targets TypeScript and Next.js. For the JavaScript version, use the `v1` branch, or the package `@techlove/eslint-config@1`.

## Installation
```bash
npm install @techlove/eslint-config
```

## Setup
Create a `.eslintrc.js` (`.eslintrc.cjs` for ESM) in the root directory:

```javascript
require('@techlove/eslint-config/patch')

module.exports = {
  extends: '@techlove/eslint-config'
}
```

## License

MIT
