var express = require('express');  
var app = express();  
var port = process.env.PORT || 3000;  
  
app.use(express.static('public'));  
app.use(express.json()); // Add this line to parse JSON request body  
  
// Add the following block to handle POST requests to /displayRequest  
app.post('/displayRequest', (req, res) => {  
  console.log('Received JSON request body:', req.body);  
  res.json(req.body);  
});  
  
app.listen(port, () => console.log(`App listening on port ${port}!`));  
