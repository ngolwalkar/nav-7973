const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg1 = 'Hello Node!\n'
  const msg2 = 'Hello Test!\n'
  let url = req.url;
 if(url ==='/test'){
    res.write(msg2); //write a response
    res.end(); //end the response
 }else{
    res.write(msg1); //write a response
    res.end(); //end the response
 }
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
