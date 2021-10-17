const devPresets = ['@babel/preset-env'];

const buildPresets = ['@babel/preset-env', '@babel/preset-typescript'];

const testPresets = ['@vue/cli-plugin-babel/preset'];

module.exports = {
    presets:
        process.env.NODE_ENV === 'development'
            ? devPresets
            : process.env.NODE_ENV === 'test'
            ? testPresets
            : buildPresets,
};
