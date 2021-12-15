module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: '3.6.5',
        targets: {
          // esmodules: true,
          edge: '17',
          firefox: '60',
          chrome: '67',
          safari: '11.1',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
};
