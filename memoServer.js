var express = require('express');
var db = require('./server/app/config');
var Users = require('./server/app/collections/users');
var User = require('./server/app/models/user');
var Memos = require('./server/app/collections/memos');
var Memo = require('./server/app/models/memo');
var app = express();

app.use(express.static(__dirname + '/client'));

app.get('/signup', function(req, res) {
	console.log(req.data)
	res.render('signup')
})

module.exports = app;