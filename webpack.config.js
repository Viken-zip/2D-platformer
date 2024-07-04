const path = require('path');

module.exports = {
  entry: { main: './src/main/app.ts', editor: './src/editor/editorApp.ts'}, // Entry point of your application
  output: {
    filename: '[name].js', // Output bundle file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'], // Resolve TypeScript and JavaScript files
  },
  module: {
    rules: [
      {
        test: /\.ts?$/, // Match TypeScript files
        use: 'ts-loader', // Use ts-loader for TypeScript compilation
        exclude: /node_modules/,
      }
    ],
  },
};