// get the client
const oracledb = require('./.oracledb');
const {
  dbHost,
  dbPort,
  dbUser,
  dbPassword,
  dbName,
} = require('../config');

// Create the connection pool
const connection = oracledb.createPool({
  host: dbHost,
  port: dbPort,
  user: dbUser,
  password: dbPassword,
  database: dbName,
});

module.exports = connection;
