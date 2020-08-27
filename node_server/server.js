var express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

var HOST = 'localhost',
	PORT = 8000;

app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})
.use( bodyParser.json() )
.use( bodyParser.urlencoded({ extend:true }) );

app.get('/menu', function(req, res){
	console.log('request =====> ', req);
	res.send('OK');
});

app.post('/login', function(req, res){
	var user = req.body.username,
		pass = req.body.password
	
	if(user == 'admin' && pass == 'admin'){
		res.send('OK');
	} else {
		res.sendStatus(401);
	}
});

var server = app.listen(PORT, HOST, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server iniciado em http://%s:%s', host, port);
});