
var compressor = require('node-minify');
compressor.minify({
    compressor: 'uglifyjs',
    input: './js/*.js',
    output: 'app.js',
    callback: function(err, min) {}
  });

  compressor.minify({
    compressor: 'clean-css',
    input: './css/*.css',
    output: 'app.css',
    callback: function(err, min) {}
  }); 