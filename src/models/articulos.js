const { TableNames } = require('../config');
const connection = require('../db/connection');
const { OracleDB } = require('../helpers');

class ArticuloModel {
  static async getAll() {
    const [articulos] = await connection.query({
      sql: `SELECT ArtCod, ArtNom,
        LabDes AS ArtLab,
        CatDes AS ArtCat,
        TipUniMedDes AS ArtTipUniMed,
        ArtFecVenAño, ArtFecVenMes, ArtFecVenDia,
        ArtPreUni, ArtSto, ArtEstReg
        FROM V1M_ARTICULO
        JOIN V1Z_LABORATORIO ON ArtLab=LabCod
        JOIN V1Z_CATEGORIA ON ArtCat=CatCod
        JOIN V1Z_TIPO_UNIDAD_MEDIDA ON ArtTipUniMed=TipUniMedCod
        ORDER BY ArtCod DESC`,
    });

    return articulos;
  }

  static async get(cod) {
    const [[articulo]] = await connection.query({
      sql: `SELECT ArtCod, ArtNom,
        LabDes AS ArtLab,
        CatDes AS ArtCat,
        TipUniMedDes AS ArtTipUniMed,
        ArtFecVenAño, ArtFecVenMes, ArtFecVenDia,
        ArtPreUni, ArtSto, ArtEstReg
        FROM V1M_ARTICULO
        JOIN V1Z_LABORATORIO ON ArtLab=LabCod
        JOIN V1Z_CATEGORIA ON ArtCat=CatCod
        JOIN V1Z_TIPO_UNIDAD_MEDIDA ON ArtTipUniMed=TipUniMedCod
        WHERE ArtCod=?;`,
      values: [cod],
    });
    return articulo;
  }

  static async create(data) {
    const articulo = await OracleDB.create({
      tableName: TableNames.ARTICULO,
      data,
    });

    return articulo;
  }

  static async edit(cod, data) {
    const articulo = await OracleDB.edit({
      tableName: TableNames.ARTICULO,
      cod,
      data,
    });

    return articulo;
  }

  static async delete(cod) {
    const articulo = await OracleDB.delete({
      tableName: TableNames.ARTICULO,
      cod,
    });

    return articulo;
  }
}

module.exports = ArticuloModel;
