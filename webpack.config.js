var path = require('path');

module.exports = {
  entry: [
    "./js/util.js",
    "./js/render.js",
    "./js/wizard.js",
    "./js/backend.js",
    "./js/game.js",
    "./js/stat.js",
    "./js/setup.js",
    "./js/dialog.js",
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
};
