module.exports = {
  parserOptions: {
    ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  extends: ['plugin:prettier/recommended'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],

    // disallow use of console statements (except for console.error)
    'no-console': ['warn', { allow: ['error'] }],

    // disallow the unary operators ++ and --
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],

    // require the use of === and !==
    eqeqeq: ['error', 'always', { null: 'ignore' }]
  },

  ignorePatterns: ['dist/', '.eslintrc.js'] // Avoid linting on the dist folder and, ironically, this file too
};
