const connection = require('../db/connection');
const { TableCodFields } = require('../config');

class OracleDB {
  static async getAll({ tableName }) {
    const [items] = await connection.query({
      sql: `SELECT * FROM ${tableName}`,
    });

    return items;
  }

  static async get({ tableName, cod }) {
    const [[item]] = await connection.query({
      sql: `SELECT * FROM ${tableName} WHERE ?? = ?`,
      values: [TableCodFields[tableName], cod],
    });

    return item;
  }

  static async create({ tableName, data }) {
    const [{ insertId: cod }] = await connection.query({
      sql: `INSERT INTO ${tableName} (??) VALUES (?)`,
      values: [Object.keys(data), Object.values(data)],
    });

    return OracleDB.get({ tableName, cod });
  }

  // eslint-disable-next-line
  static async edit({ tableName, cod, data }) {
    const assignationsWithTrailingComma = Object.keys(data).reduce((acc) => `${acc}?? = ?, `, '');
    // eslint-disable-next-line
    const assignations = assignationsWithTrailingComma.substring(0, assignationsWithTrailingComma.length - 2);
    const values = Object.entries(data).reduce((acc, current) => [...acc, ...current], []);

    await connection.query({
      sql: `
        UPDATE ${tableName}
        SET ${assignations}
        WHERE ?? = ?
      `,
      values: [...values, TableCodFields[tableName], cod],
    });

    return OracleDB.get({ tableName, cod });
  }

  static async delete({ tableName, cod }) {
    const categoria = await OracleDB.get({ tableName, cod });

    await connection.query({
      sql: `DELETE FROM ${tableName} WHERE ?? = ?`,
      values: [TableCodFields[tableName], cod],
    });

    return categoria;
  }
}

module.exports = OracleDB;
