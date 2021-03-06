const express = require('express');

const server = express();

// Add our routes
server.use('/api', require('./api'));

// Serve static content
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  server.use(webpackDevMiddleware(webpack(
    require('../webpack.config.js')
  )));
} else {
  server.use(express.static('./dist'));
}

// Handle errors
server.use(function(err, req, res, next) {
  if (!err) return next();

  console.error(err.stack);
  res.status(500);
  res.send({
    error: err,
  });
});

const PORT = process.env.PORT || 3141;
server.listen(PORT, function() {
  console.log(`Server running at http://localhost:${PORT}`);
});

