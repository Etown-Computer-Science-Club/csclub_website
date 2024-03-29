module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
  },
  plugins: ['import'],
  extends: ['airbnb'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-uses-vars': 'error',
    'react/require-default-props': 'off',
    'import/no-duplicates': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-console': 'warn',
    'react/prop-types': 'error',
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',
    quotes: ['error', 'single'],
    indent: ['error', 2],
  },
  env: {
    browser: true,
    es2020: true,
  },
};
