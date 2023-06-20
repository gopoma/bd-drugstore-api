const EstadoRegistro = require('../config/estado-registro');

const tiposUnidadesMedida = [
  {
    TipUniMedCod: 1,
    TipUniMedDes: 'Tableta',
    TipUniMedEstReg: EstadoRegistro.ACTIVO,
  },
  {
    TipUniMedCod: 2,
    TipUniMedDes: 'Cápsula',
    TipUniMedEstReg: EstadoRegistro.ACTIVO,
  },
  {
    TipUniMedCod: 3,
    TipUniMedDes: 'Comprimido',
    TipUniMedEstReg: EstadoRegistro.ACTIVO,
  },
  {
    TipUniMedCod: 4,
    TipUniMedDes: 'Unidad',
    TipUniMedEstReg: EstadoRegistro.ACTIVO,
  },
];

module.exports = tiposUnidadesMedida;
