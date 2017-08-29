const pgp = require('pg-promise');
const connection = require('./database/db_connection.js');
const db = pgp(connection);
require('env2')('./config.env');

// const storeMessage = (username, message, res) => {
//   db
//   .one(`insert into messages(username , context) values(${username} , ${message})`, {username, message})
//   .then(date => { res.redirect('..'); })
//   .catch(err => { errHandler(err); });
// };
const storeMessage = (username, message, res) => {
  console.log('user name', username);
  connection.query(`insert into messages (username , context) values($1 , $2)`, [username, message])
  .then((dbRes) => {
    res.redirect('/');
  })
  .catch(errHandler);
};
const errHandler = err => {
  res.statusCode = 500;
  res.end('Server Error');
};

module.exports = {
  storeMessage
};
