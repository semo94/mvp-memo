var path = require('path');
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, '../../database/memos.sqlite')
  },
  useNullAsDefault: true
});
var db = require('bookshelf')(knex);

db.knex.schema.hasTable('users').then(function(exists){
  if(!exists){
    db.knex.schema.createTable('users',function (user){
      user.increments('id').primary();
      user.string('username',100);
      user.string('password',255);
    }).then(function(table){
      console.log('created Table',table);
    });
  }
});

db.knex.schema.hasTable('memos').then(function(exists){
  if(!exists){
    db.knex.schema.createTable('memos',function (memo){
      memo.increments('id').primary();
      memo.integer('user_id');
      memo.string('text',1000);
      memo.timestamps();
    }).then(function(table){
      console.log('created Table',table);
    });
  }
});

module.exports = db;