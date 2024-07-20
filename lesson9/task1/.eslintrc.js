module.exports = {
    extends: 'eslint-config-airbnb-base',
    rules: {
        "no-console": 2,
    },
    pharserOptions: {
        ecmaVersion: 10,
        sourceType: "module"
    },
    env: {
        browser: true,
    }
};