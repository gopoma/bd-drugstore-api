const { TableNames } = require('../config');
const { MySQL } = require('../helpers');

class TipoUnidadMedidaModel {
  static async getAll() {
    const tiposUnidadMedida = await MySQL.getAll({
      tableName: TableNames.TIPO_UNIDAD_MEDIDA,
    });

    return tiposUnidadMedida;
  }

  static async get(cod) {
    const tipoUnidadMedida = await MySQL.get({
      tableName: TableNames.TIPO_UNIDAD_MEDIDA,
      cod,
    });

    return tipoUnidadMedida;
  }

  static async create(data) {
    const tipoUnidadMedida = await MySQL.create({
      tableName: TableNames.TIPO_UNIDAD_MEDIDA,
      data,
    });

    return tipoUnidadMedida;
  }

  static async edit(cod, data) {
    const tipoUnidadMedida = await MySQL.edit({
      tableName: TableNames.TIPO_UNIDAD_MEDIDA,
      cod,
      data,
    });

    return tipoUnidadMedida;
  }

  static async delete(cod) {
    const tipoUnidadMedida = await MySQL.delete({
      tableName: TableNames.TIPO_UNIDAD_MEDIDA,
      cod,
    });

    return tipoUnidadMedida;
  }
}

module.exports = TipoUnidadMedidaModel;
