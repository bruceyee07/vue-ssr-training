module.exports = {
    presets: [
        '@vue/app',
        'env',
        {
            modules: false,
        },
    ],
    plugins: ['syntax-dynamic-import'],
};
