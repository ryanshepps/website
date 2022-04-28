module.exports = {

    'env': {
        'browser': true,
        'es2021': true,
        'node': true,
    },

    'extends': [
        'eslint:recommended',
        'plugin:vue/recommended',
    ],

    'parserOptions': {
        'ecmaVersion': 13,
        'sourceType': 'module',
    },

    'plugins': [
        'vue',
    ],

    'rules': {
        'indent': [
            'error',
            4,
        ],

        'linebreak-style': [
            'error',
            'unix',
        ],

        'quotes': [
            'error',
            'single',
        ],

        'semi': [
            'error',
            'always',
        ],

        'comma-dangle': [
            'error',
            'always-multiline',
        ],

        'eqeqeq': [
            'error',
            'always',
        ],

        'comma-spacing': [
            'error',
            {
                'after': true,
            },
        ],

        'func-call-spacing': [
            'error',
            'never',
        ],

        'max-len': [
            'error',
            {
                'code': 160,
                'ignoreUrls': true,
                'ignoreStrings': true, 
                'ignoreTemplateLiterals': true,
                'ignoreRegExpLiterals': true,
            },
        ],

        'no-constant-condition': 'error',

        'no-extra-parens': 'error',

        // Because Nuxt uses the name of the directories as part of the component name, this rule
        // is not necessary. Should there be a way to ensure that Nuxt components are all multi
        // word, that rule should be a enabled.
        'vue/multi-word-component-names': 'off',

        'vue/html-indent': [
            'error',
            4,
        ],

        'vue/html-closing-bracket-newline': [
            'error',
            {
                'singleline': 'never',
                'multiline': 'never',
            },
        ],

        'vue/first-attribute-linebreak': [
            'error',
            {
                'singleline': 'beside',
                'multiline': 'below',
            },
        ],

        'vue/block-tag-newline': [
            'error',
            {
                'singleline': 'always',
            },
        ],

        'vue/component-name-in-template-casing': 'error',

        'vue/custom-event-name-casing': 'error',

        'vue/html-button-has-type': 'error',

        'vue/html-comment-content-newline': [
            'error',
            {
                'multiline': 'never',
            },
        ],

        'vue/html-comment-content-spacing': 'error',

        'vue/html-comment-indent': [
            'error',
            4,
        ],

        // Makes it easier to navigate properties in Vim.
        'vue/new-line-between-multi-line-property': 'error',

        'vue/no-empty-component-block': 'error',

        'vue/no-multiple-objects-in-class': 'error',

        'vue/no-reserved-component-names': 'error',

        'vue/no-use-computed-property-like-method': 'error',

        'vue/no-useless-mustaches': 'error',

        'vue/padding-line-between-blocks': 'error',

        'vue/require-emit-validator': 'error',

        'vue/script-indent': [
            'error',
            4,
        ],

        'vue/v-on-function-call': [
            'error',
            'always',
        ],

        'vue/array-bracket-newline': [
            'error',
            'never',
        ],

        'vue/block-spacing': [
            'error',
            'always',
        ],

        'vue/comma-dangle': [
            'error',
            'always-multiline',
        ],

        'vue/eqeqeq': [
            'error',
            'always',
        ],

        'vue/comma-spacing': [
            'error',
            {
                'after': true,
            },
        ],

        'vue/func-call-spacing': [
            'error',
            'never',
        ],

        'vue/max-len': [
            'error',
            {
                'code': 160,
                'ignoreUrls': true,
                'ignoreStrings': true, 
                'ignoreTemplateLiterals': true,
                'ignoreRegExpLiterals': true,
                'ignoreHTMLTextContents': true,
            },
        ],

        'vue/no-constant-condition': 'error',

        'vue/no-extra-parens': 'error',

        'vue/no-restricted-syntax': 'error',

        'vue/require-default-prop': 'error',
    },

    'overrides': [
        {
            'files': ['*.vue', ],
            'rules': {
                'max-len': 'off',
            },
        },
    ],
};
