module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-empty-function': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/style-prop-object': 'off',
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'no-use-before-define': ['error', { functions: true, classes: true, variables: false }],
  },
};
