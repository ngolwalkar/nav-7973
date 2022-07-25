const http = require('http');
const port = process.env.PORT || 3000;
const express = require('express');
const router = express.Router();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

router.get('/test', function(req,res,next){
      res.send('Response Received!');
});
