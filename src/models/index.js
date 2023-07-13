const CategoriaModel = require('./categorias');
const LaboratorioModel = require('./laboratorios');
const RolModel = require('./roles');
const TipoEstadoPedidoModel = require('./tipos-estado-pedido');
const TipoUnidadMedidaModel = require('./tipos-unidad-medida');

const ArticuloModel = require('./articulos');
const UsuarioModel = require('./usuarios');
const PedidoModel = require('./pedidos');

module.exports = {
  CategoriaModel,
  LaboratorioModel,
  RolModel,
  TipoEstadoPedidoModel,
  TipoUnidadMedidaModel,

  ArticuloModel,
  UsuarioModel,
  PedidoModel,
};
