const { TableNames } = require('../config');
const { OracleDB } = require('../helpers');

class TipoEstadoPedidoModel {
  static async getAll() {
    const tiposEstadoPedido = await OracleDB.getAll({
      tableName: TableNames.TIPO_ESTADO_PEDIDO,
    });

    return tiposEstadoPedido;
  }

  static async get(cod) {
    const tipoEstadoPedido = await OracleDB.get({
      tableName: TableNames.TIPO_ESTADO_PEDIDO,
      cod,
    });

    return tipoEstadoPedido;
  }

  static async create(data) {
    const tipoEstadoPedido = await OracleDB.create({
      tableName: TableNames.TIPO_ESTADO_PEDIDO,
      data,
    });

    return tipoEstadoPedido;
  }

  static async edit(cod, data) {
    const tipoEstadoPedido = await OracleDB.edit({
      tableName: TableNames.TIPO_ESTADO_PEDIDO,
      cod,
      data,
    });

    return tipoEstadoPedido;
  }

  static async delete(cod) {
    const tipoEstadoPedido = await OracleDB.delete({
      tableName: TableNames.TIPO_ESTADO_PEDIDO,
      cod,
    });

    return tipoEstadoPedido;
  }
}

module.exports = TipoEstadoPedidoModel;
