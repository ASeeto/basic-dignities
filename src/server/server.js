var express = require('express');
var app = express();

app.use('/dist', express.static(__dirname+'/../../dist'));
app.use('/img', express.static(__dirname+'/../../src/client/public/img'));
app.use('/js', express.static(__dirname+'/../../src/client/public/js'));

app.engine('.html', require('ejs').__express);
app.set('views', '.');
app.set('view engine', 'html');

app.listen(3000, function() {
	console.log('Server listening on port 3000');
});

app.get('*', function(req, res) {
	res.render('index');
});