const replace = require('rollup-plugin-replace');

// https://stenciljs.com/docs/config
exports.config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/index.ts',
  outputTargets: [
    {
      type: 'www',
      dir: 'public'
    }
  ],
  plugins: [
    replace({
      'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
    }),
  ]
};
