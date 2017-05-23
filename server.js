var express = require('express');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var path = require('path');
var fs = require('fs');

var app = express();
var port = process.env.PORT | 3000;
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.post('/get-file-size', upload.single('file'), function(req, res, next){
	res.send({"size": req.file.size});
});
app.listen(port);