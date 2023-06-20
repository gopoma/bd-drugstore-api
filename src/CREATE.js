const connection = require('./db/connection');
const TableNames = require('./config/TableNames');
const {
  laboratorios,
  categorias,
  tiposUnidadesMedida,
  articulos,
} = require('./data');
const { deleteTables, insertMany } = require('./helpers');
require('colors');

async function insertarCategorias() {
  await insertMany(TableNames.CATEGORIA, categorias);
  console.log(`${TableNames.CATEGORIA}:`, 'SEED EXECUTED'.green);
}

async function insertarLaboratorios() {
  await insertMany(TableNames.LABORATORIO, laboratorios);
  console.log(`${TableNames.LABORATORIO}:`, 'SEED EXECUTED'.green);
}

async function insertarTiposUnidadesMedida() {
  await insertMany(TableNames.TIPO_UNIDAD_MEDIDA, tiposUnidadesMedida);
  console.log(`${TableNames.TIPO_UNIDAD_MEDIDA}:`, 'SEED EXECUTED'.green);
}

async function insertarArticulos() {
  const result = await insertMany(TableNames.ARTICULO, articulos);
  console.log(`${TableNames.ARTICULO}:`, 'SEED EXECUTED'.green);
  console.log(result);
}

(async () => {
  try {
    await deleteTables();

    await insertarCategorias();
    await insertarLaboratorios();
    await insertarTiposUnidadesMedida();
    await insertarArticulos();
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await connection.end();
  }
})();
