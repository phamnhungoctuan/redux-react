module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve:{
     modules: [__dirname, 'node_modules'],
    alias:{
      reducer: 'app/reducer/reducer.js',
      mang: 'app/reducer/mang.js',
      isAdding: 'app/reducer/isAdding.js',
      store: 'app/components/Store.js'
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
};
