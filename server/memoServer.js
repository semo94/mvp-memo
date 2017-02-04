var express = require('express');
var db = require('./app/config');
var Users = require('./app/collections/users');
var User = require('./app/models/user');
var Memos = require('./app/collections/memos');
var Memo = require('./app/models/memo');

var app = express();

app.get('/', function(req, res) {
	res.send("hello its me");
})

module.exports = app;