const categorias = require('./categorias');
const laboratorios = require('./laboratorios');
const roles = require('./roles');
const tiposEstadoPedido = require('./tipos-estado-pedido');
const tiposUnidadMedida = require('./tipos-unidad-medida');

const articulos = require('./articulos');
const usuarios = require('./usuarios');
const pedidos = require('./pedidos');

module.exports = {
  categorias,
  laboratorios,
  roles,
  tiposEstadoPedido,
  tiposUnidadMedida,

  articulos,
  usuarios,
  pedidos,
};
