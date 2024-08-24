module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@contexts': './src/contexts',
          '@styles': './src/styles',
          "@types": "types.ts"
        },
      },
    ],
  ],
};
