module.exports = {
    root : true,
    env : {
        node : true,
    },
    extends : [
        `@amiceli/eslint-config-base`,
        `@amiceli/eslint-config-vue`,
    ],
    rules : {
        "import/no-extraneous-dependencies" : [
            `error`,
            {
                devDependencies : [
                    `vite.config.js`,
                ],
            },
        ],
    },
}
