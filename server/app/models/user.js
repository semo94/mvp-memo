var db = require('../config');
var Memo = require('./memo.js');

var User = db.Model.extend({
	tableName: 'users',
	memos: function() {
		return this.hasMany(Memo);
	}
});

module.exports = User;