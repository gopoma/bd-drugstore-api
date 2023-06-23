const connection = require('../db/connection');
const { TableNames } = require('../config');
require('colors');

(async () => {
  try {
    let [articulos] = await connection.query(`SELECT * FROM ${TableNames.ARTICULO}`);
    console.log('Artículos antes del Soft Delete:'.cyan);
    console.table(articulos);

    const resultSoftDelete = await connection.query(
      `UPDATE ${TableNames.ARTICULO} SET ArtEstReg = ? WHERE ArtCod = ?`,
      ['*', 4],
    );
    console.log('Soft Delete: '.magenta, resultSoftDelete);

    [articulos] = await connection.query(`SELECT * FROM ${TableNames.ARTICULO}`);
    console.log('Artículos después del Soft Delete:'.magenta);
    console.table(articulos);

    const resultHardDelete = await connection.query(
      `DELETE FROM ${TableNames.ARTICULO} WHERE ArtCod = ?`,
      [4],
    );
    console.log('Hard Delete: '.red, resultHardDelete);

    [articulos] = await connection.query(`SELECT * FROM ${TableNames.ARTICULO}`);
    console.log('Artículos después del Hard Delete:'.red);
    console.table(articulos);
  } catch (error) {
    console.log(error);
  } finally {
    await connection.end();
  }
})();
