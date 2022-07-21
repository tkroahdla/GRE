module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|mjs)?$/,
        exclude: /(node_modules|pages)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
