const connection = require('../db/connection');

async function insertMany(tableName, data) {
  const fields = Object.keys(data[0]);
  const values = data.map((e) => Object.values(e));

  const result = await connection.query({
    sql: `INSERT INTO ${tableName} (??) VALUES ?`,
    values: [fields, values],
  });

  return result;
}

module.exports = insertMany;
