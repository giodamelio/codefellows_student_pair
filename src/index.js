const express = require('express');

const server = express();

server.get('/', function(req, res) {
  res.send('Hello World');
});

const PORT = process.env.PORT || 3141;
server.listen(PORT, function() {
  console.log(`Server running at http://localhost:${PORT}`);
});

