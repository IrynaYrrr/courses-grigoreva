module.exports = {
    root: true,
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        'brace-style': ['error', 'stroustrup', { allowSingleLine: false }],
        'consistent-return': 'off',
        'no-restricted-syntax': 'off',
        'guard-for-in': 'off',
        'no-continue': 'off',
        'no-underscore-dangle': 'off',
        radix: 'off',
        'no-await-in-loop': 'off',
        'no-plusplus': 'off',
        'no-nested-ternary': 'off',
        'no-param-reassign': 'off',
        'object-curly-newline': 'off',
    },
};
