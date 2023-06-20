const connection = require('./db/connection');
const { deleteTables } = require('./helpers');
require('colors');

(async () => {
  try {
    await deleteTables();
    console.log('OK'.green);
  } catch (error) {
    console.error('Error:'.red, error);
  } finally {
    await connection.end();
  }
})();
