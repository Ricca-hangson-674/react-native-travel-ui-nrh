// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            test: './test',
            '@': './src',
            '@screens': './src/screens',
            '@assets': './src/assets',
          },
        },
      ],
    ],
  };
};
