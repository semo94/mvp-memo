var db = require('../config');
var User = require('./user.js');

var Memo = db.Model.extend({
  tableName: 'memos',
  hasTimestamps: true,
  user: function() {
    return this.belongsTo(User,'user_id');
  }
});

module.exports = Memo;
