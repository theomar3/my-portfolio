var express = require('express'); //grab the express module we downloaded

var app = express(); //actually create an express app. We'll use this to configure the server.

//tells the app to use express' static file functionality and tells it to use the public folder.
app.use(express.static('public'));

//gotta listen on a port to accept requests
app.listen(3333, function() {
  console.log('app listening on port 3333.')
});
