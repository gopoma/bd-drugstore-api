const connection = require('./db/connection');

(async () => {
  const [results] = await connection.execute('SELECT 1+1');
  console.log(results);

  connection.end();
})();
