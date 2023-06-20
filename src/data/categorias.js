const EstadoRegistro = require('../config/estado-registro');

const categorias = [
  {
    CatCod: 1,
    CatDes: 'Antibióticos',
    CatEstReg: EstadoRegistro.ACTIVO,
  },
  {
    CatCod: 2,
    CatDes: 'Ampollas',
    CatEstReg: EstadoRegistro.ACTIVO,
  },
  {
    CatCod: 3,
    CatDes: 'Jarabes',
    CatEstReg: EstadoRegistro.ACTIVO,
  },
  {
    CatCod: 4,
    CatDes: 'Higiene',
    CatEstReg: EstadoRegistro.ACTIVO,
  },
];

module.exports = categorias;
