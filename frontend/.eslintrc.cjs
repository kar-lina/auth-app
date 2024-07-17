// const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  // parserOptions: {
  //   parser: {
  //     ts: '@typescript-eslint/parser',
  //   },
  // },
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-recommended",
    //"plugin:vue/recommended",
    "prettier/vue",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  rules: { 
    "no-unused-vars": "error",
    "@typescript-eslint/no-unused-vars-experimental": "error",
    'no-trailing-spaces': ['warn'],
    'prefer-promise-reject-errors': 'off',
    'vue/no-v-html': 'off',
    'no-trailing-spaces': ['warn'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['error', 'Error'],
      },
    ],
  },
  ignorePatterns: ['dist', 'node_modules', 'build', 'coverage', 'docs', 'test'],
  overrides: [
    {
      files: ['components/**/**/*.vue'],
      rules: { 'vue/multi-word-component-names': 'off' },
    },
  ],
};
