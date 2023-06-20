const connection = require('../db/connection');
const TableNames = require('../config/TableNames');

async function deleteTables() {
  const tableNamesValues = Object.values(TableNames);

  // eslint-disable-next-line
  for (const tableName of tableNamesValues) {
    // eslint-disable-next-line
    await connection.query(`DELETE FROM ${tableName}`);
    // eslint-disable-next-line
    await connection.query('SET FOREIGN_KEY_CHECKS = 0');
    // eslint-disable-next-line
    await connection.query(`TRUNCATE ${tableName}`);
    // eslint-disable-next-line
    await connection.query('SET FOREIGN_KEY_CHECKS = 1');
  }
}

module.exports = deleteTables;
