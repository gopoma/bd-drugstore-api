const { TableNames } = require('../config');
const { OracleDB } = require('../helpers');

class TipoUnidadMedidaModel {
  static async getAll() {
    const tiposUnidadMedida = await OracleDB.getAll({
      tableName: TableNames.TIPO_UNIDAD_MEDIDA,
    });

    return tiposUnidadMedida;
  }

  static async get(cod) {
    const tipoUnidadMedida = await OracleDB.get({
      tableName: TableNames.TIPO_UNIDAD_MEDIDA,
      cod,
    });

    return tipoUnidadMedida;
  }

  static async create(data) {
    const tipoUnidadMedida = await OracleDB.create({
      tableName: TableNames.TIPO_UNIDAD_MEDIDA,
      data,
    });

    return tipoUnidadMedida;
  }

  static async edit(cod, data) {
    const tipoUnidadMedida = await OracleDB.edit({
      tableName: TableNames.TIPO_UNIDAD_MEDIDA,
      cod,
      data,
    });

    return tipoUnidadMedida;
  }

  static async delete(cod) {
    const tipoUnidadMedida = await OracleDB.delete({
      tableName: TableNames.TIPO_UNIDAD_MEDIDA,
      cod,
    });

    return tipoUnidadMedida;
  }
}

module.exports = TipoUnidadMedidaModel;
