// get the client
const mysql = require('mysql2/promise');
const {
  dbHost,
  dbPort,
  dbUser,
  dbPassword,
  dbName,
} = require('../config');

// Create the connection pool
const connection = mysql.createPool({
  host: dbHost,
  port: dbPort,
  user: dbUser,
  password: dbPassword,
  database: dbName,
});

module.exports = connection;
