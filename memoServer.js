var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var db = require('./server/app/config');
var Users = require('./server/app/collections/users');
var User = require('./server/app/models/user');
var Memos = require('./server/app/collections/memos');
var Memo = require('./server/app/models/memo');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
app.use(session({secret: 'shhh!'}));

app.post('/signup', function(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	new User({ username: username }).fetch().then(function(found) {
		if (found) {
			res.status(200).send("this user is already existed");
		} else {
			Users.create({
				username: username,
				password: password
			})
			.then(function(newUser) {
				req.session.userId = newUser.get('id');
				req.session.username = newUser.get('username');
				console.log(req.session);
				res.status(200).send("user createed successfully!");
			});
		}
	});
})

module.exports = app;