const deleteTables = require('./delete-tables');
const insertMany = require('./insert-many');
const OracleDB = require('./oracledb');

module.exports = {
  deleteTables,
  insertMany,
  OracleDB,
};
