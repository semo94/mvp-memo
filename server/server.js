var app = require('./memoServer.js');
var express = require('express');
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/client'));

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});

