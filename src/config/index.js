const config = require('./environment');
const EstadoRegistro = require('./estado-registro');
const { TableNames, TableCodFields } = require('./tables');

module.exports = {
  ...config,
  config,
  EstadoRegistro,
  TableNames,
  TableCodFields,
};
