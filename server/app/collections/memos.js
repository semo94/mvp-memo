var db = require('../config');
var Memo = require('../models/memo');

var Memos = new db.Collection();
Memos.model = Memo;

module.exports = Memos;
