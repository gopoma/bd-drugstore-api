const { TableNames } = require('../config');
const connection = require('../db/connection');
const { MySQL } = require('../helpers');

class PedidoModel {
  static async getAll() {
    const [pedidos] = await connection.query({
      sql: `SELECT
        PedNum,

        UsuCod AS PedCliCod,
        UsuNom AS PedCliNom,
        UsuApe AS PedCliApe,
        UsuEma AS PedCliEma,
        UsuTel AS PedCliUsuTel,
        UsuDir AS PedCliUsuDir,
        UsuEstReg AS PedCliEstReg,

        PedFecAño, PedFecMes, PedFecDia,
        TipEstPedDes AS PedTipEstPed,
        PedEstReg
        FROM V1T_PEDIDO
        JOIN GZM_USUARIO ON PedCli=UsuCod
        JOIN V1Z_TIPO_ESTADO_PEDIDO ON V1T_PEDIDO.TipEstPedCod=V1Z_TIPO_ESTADO_PEDIDO.TipEstPedCod
        ORDER BY PedNum DESC;
      `,
    });

    const clientNormalizedPedidos = pedidos.map((pedido) => {
      const {
        PedCliCod, PedCliNom, PedCliApe, PedCliEma,
        PedCliUsuTel, PedCliUsuDir, PedCliEstReg,
        ...data
      } = pedido;

      return {
        ...data,
        cliente: {
          PedCliCod,
          PedCliNom,
          PedCliApe,
          PedCliEma,
          PedCliUsuTel,
          PedCliUsuDir,
          PedCliEstReg,
        },
      };
    });

    const results = [];
    // eslint-disable-next-line
    for (const pedido of clientNormalizedPedidos) {
      // eslint-disable-next-line
      const [articulos] = await connection.query({
        sql: `SELECT ArtCod AS PedArtArtCod,
          ArtNom AS PedArtArtNom,
          PedArtPreUni,
          PedArtCanSol,
          PedArtCanDes,
          PedArtEstReg
          FROM V1T_PEDIDO_ARTICULO
          JOIN V1M_ARTICULO ON PedArtArt=ArtCod
          WHERE PedArtPed=?`,
        values: [pedido.PedNum],
      });

      results.push({
        ...pedido,
        articulos,
      });
    }

    return results;
  }

  static async get(num) {
    const [[pedido]] = await connection.query({
      sql: `SELECT
        PedNum,

        UsuCod AS PedCliCod,
        UsuNom AS PedCliNom,
        UsuApe AS PedCliApe,
        UsuEma AS PedCliEma,
        UsuTel AS PedCliUsuTel,
        UsuDir AS PedCliUsuDir,
        UsuEstReg AS PedCliEstReg,

        PedFecAño, PedFecMes, PedFecDia,
        TipEstPedDes AS PedTipEstPed,
        PedEstReg
        FROM V1T_PEDIDO
        JOIN GZM_USUARIO ON PedCli=UsuCod
        JOIN V1Z_TIPO_ESTADO_PEDIDO ON V1T_PEDIDO.TipEstPedCod=V1Z_TIPO_ESTADO_PEDIDO.TipEstPedCod
        WHERE PedNum=?
      `,
      values: [num],
    });

    const [articulos] = await connection.query({
      sql: `SELECT ArtCod AS PedArtArtCod,
        ArtNom AS PedArtArtNom,
        PedArtPreUni,
        PedArtCanSol,
        PedArtCanDes,
        PedArtEstReg
        FROM V1T_PEDIDO_ARTICULO
        JOIN V1M_ARTICULO ON PedArtArt=ArtCod
        WHERE PedArtPed=?`,
      values: [pedido.PedNum],
    });

    const {
      PedCliCod, PedCliNom, PedCliApe, PedCliEma,
      PedCliUsuTel, PedCliUsuDir, PedCliEstReg,
      ...data
    } = pedido;
    return {
      ...data,
      cliente: {
        PedCliCod,
        PedCliNom,
        PedCliApe,
        PedCliEma,
        PedCliUsuTel,
        PedCliUsuDir,
        PedCliEstReg,
      },
      articulos,
    };
  }

  static async create(data) {
    const pedido = await MySQL.create({
      tableName: TableNames.PEDIDO,
      data,
    });

    return pedido;
  }

  static async edit(num, data) {
    const pedido = await MySQL.edit({
      tableName: TableNames.PEDIDO,
      cod: num,
      data,
    });

    return pedido;
  }

  static async add(num, data) {
    await connection.query({
      sql: `INSERT INTO V1T_PEDIDO_ARTICULO (
          PedArtPed, PedArtArt,
          PedArtPreUni,
          PedArtCanSol, PedArtCanDes,
          PedArtEstReg
        ) VALUES (?, ?, ?, ?, ?, ?)`,
      values: [num, data.PedArtArt, data.PedArtPreUni,
        data.PedArtCanSol, data.PedArtCanDes, data.PedArtEstReg],
    });
  }

  static async editArticulo(num, artCod, data) {
    await connection.query({
      sql: `UPDATE V1T_PEDIDO_ARTICULO
        SET PedArtPreUni=?,
        PedArtCanSol=?, PedArtCanDes=?,
        PedArtEstReg=?
        WHERE PedArtPed=? AND PedArtArt=?`,
      values: [data.PedArtPreUni, data.PedArtCanSol, data.PedArtCanDes, data.PedArtEstReg,
        num, artCod],
    });

    return num;
  }
}

module.exports = PedidoModel;
