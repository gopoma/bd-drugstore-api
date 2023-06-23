const connection = require('../db/connection');
require('colors');

(async () => {
  try {
    const result = await connection.query(`
      UPDATE V1M_ARTICULO
      SET ArtPreUni = ?, ArtSto = ?, ArtCat = ?
      WHERE ArtCod = ?;
    `, [20.28, 30, 3, 4]);

    console.log(result);
  } catch (error) {
    console.error('Error:'.red, error);
  } finally {
    await connection.end();
  }
})();
