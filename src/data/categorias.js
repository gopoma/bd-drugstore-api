const EstadoRegistro = require('../config/estado-registro');

const categorias = [
  {
    CatDes: 'Antibióticos',
    CatEstReg: EstadoRegistro.ACTIVO,
  },
  {
    CatDes: 'Ampollas',
    CatEstReg: EstadoRegistro.ACTIVO,
  },
  {
    CatDes: 'Jarabes',
    CatEstReg: EstadoRegistro.ACTIVO,
  },
  {
    CatDes: 'Higiene',
    CatEstReg: EstadoRegistro.ACTIVO,
  },
];

module.exports = categorias;
