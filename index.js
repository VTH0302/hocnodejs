var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));;
app.use(bodyParser.json());


require('./app/routes/info.router')(app);

app.listen(5005, function(){
    console.log("Server is listening on http://localhost:5005");
});