module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  root: true,
  ignorePatterns: ['/*.*'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  env: {
    browser: true,
  },
  rules: {
    'prettier/prettier': 1,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/ban-types': [
      2,
      {
        types: {
          object: false,
        },
        extendDefaults: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': 0,
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    'no-param-reassign': 0,
    'react/require-default-props': 0,
    'react/jsx-boolean-value': 0,
    'react/button-has-type': 0,
    'react/jsx-no-bind': 0,
    'no-nested-ternary': 0,
    'react/no-array-index-key': 0,
    'no-return-assign': 0,
    'react/prop-types': 0,
    'default-case': 0,
    'func-names': 0,
    'no-bitwise': 0,
    'no-plusplus': 0,
    '@typescript-eslint/naming-convention': 0,
    'react/no-unused-prop-types': 0,
    'import/order': 1,
    'consistent-return': 0,
    'spaced-comment': 0,
    'jsx-a11y/no-autofocus': 'off',
  },
};
