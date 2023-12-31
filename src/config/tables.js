const TableNames = {
  USUARIO: 'GZM_USUARIO',
  ROL: 'GZZ_ROL', // ok
  ARTICULO: 'V1M_ARTICULO',
  CATEGORIA: 'V1Z_CATEGORIA', // ok
  LABORATORIO: 'V1Z_LABORATORIO', // ok
  TIPO_UNIDAD_MEDIDA: 'V1Z_TIPO_UNIDAD_MEDIDA', // ok
  PEDIDO_ARTICULO: 'V1T_PEDIDO_ARTICULO',
  PEDIDO: 'V1T_PEDIDO',
  TIPO_ESTADO_PEDIDO: 'V1Z_TIPO_ESTADO_PEDIDO', // ok
};

const TableCodFields = {
  [TableNames.USUARIO]: 'UsuCod',
  [TableNames.ROL]: 'RolCod',
  [TableNames.ARTICULO]: 'ArtCod',
  [TableNames.CATEGORIA]: 'CatCod',
  [TableNames.LABORATORIO]: 'LabCod',
  [TableNames.TIPO_UNIDAD_MEDIDA]: 'TipUniMedCod',
  [TableNames.PEDIDO]: 'PedNum',
  [TableNames.PEDIDO_ARTICULO]: ['PedArtPed', 'PedArtArt'],
  [TableNames.TIPO_ESTADO_PEDIDO]: 'TipEstPedCod',
};

module.exports = {
  TableNames,
  TableCodFields,
};
