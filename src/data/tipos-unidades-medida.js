const EstadoRegistro = require('../config/estado-registro');

const tiposUnidadesMedida = [
  {
    TipUniMedDes: 'Tableta',
    TipUniMedEstReg: EstadoRegistro.ACTIVO,
  },
  {
    TipUniMedDes: 'Cápsula',
    TipUniMedEstReg: EstadoRegistro.ACTIVO,
  },
  {
    TipUniMedDes: 'Comprimido',
    TipUniMedEstReg: EstadoRegistro.ACTIVO,
  },
  {
    TipUniMedDes: 'Unidad',
    TipUniMedEstReg: EstadoRegistro.ACTIVO,
  },
];

module.exports = tiposUnidadesMedida;
