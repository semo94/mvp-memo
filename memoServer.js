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
				res.status(200).send("user createed successfully!");
			});
		}
	});
})

app.post('/signin',function(req,res){
	var username = req.body.username;
	var password = req.body.password;
	new User({ username: username }).fetch().then(function(found) {
		if (found) {
			if(found.get('password') === password){
				req.session.userId = found.get('id');
				req.session.username = found.get('username');
				res.status(200).send('user signedin successfully!');
			}else{
				res.status(200).send('password is not correct');
			}
		} else {
			res.status(200).send("username is not exist");
		}
	});
})

app.post('/write',function(req,res){
	var memo = req.body.memo;
	var userId = req.session.userId;
	Memos.create({
		user_id: userId,
		text: memo
	})
	.then(function(newMemo){
		res.status(200).send();
	})
})

app.get('/memos',function(req,res){
	if(req.session.userId){
		Memos.reset().fetch().then(function(memos) {
			var userMemos=[];
			for(var i=0;i<memos.models.length;i++){
				if(req.session.userId===memos.models[i].attributes.user_id){
					userMemos.push(memos.models[i]);
				}
			}
			res.status(200).send(userMemos);
		});
	}else{
		res.status(200).send('notAuth');
	}
})

app.get('/signout', function(req,res){
	req.session.destroy();
	res.status(200).send();
})

module.exports = app;