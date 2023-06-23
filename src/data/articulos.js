const categorias = require('./categorias');
const laboratorios = require('./laboratorios');
const tiposUnidadesMedida = require('./tipos-unidades-medida');
const EstadoRegistro = require('../config/estado-registro');

function pickRandomCode(data) {
  return Math.floor(Math.random() * data.length) + 1;
}

const articulos = [
  {
    ArtNom: 'BIOELECTRO',
    ArtLab: pickRandomCode(laboratorios),
    ArtCat: pickRandomCode(categorias),
    ArtTipUniMed: pickRandomCode(tiposUnidadesMedida),
    ArtFecVenAño: 2024,
    ArtFecVenMes: 5,
    ArtFecVenDia: 13,
    ArtPreUni: 20.25,
    ArtSto: 25,
    ArtEstReg: EstadoRegistro.ACTIVO,
  },
  {
    ArtNom: 'PANADOL FORTE',
    ArtLab: pickRandomCode(laboratorios),
    ArtCat: pickRandomCode(categorias),
    ArtTipUniMed: pickRandomCode(tiposUnidadesMedida),
    ArtFecVenAño: 2023,
    ArtFecVenMes: 8,
    ArtFecVenDia: 20,
    ArtPreUni: 9.99,
    ArtSto: 125,
    ArtEstReg: EstadoRegistro.ACTIVO,
  },
  {
    ArtNom: 'METAMIZOL',
    ArtLab: pickRandomCode(laboratorios),
    ArtCat: pickRandomCode(categorias),
    ArtTipUniMed: pickRandomCode(tiposUnidadesMedida),
    ArtFecVenAño: 2026,
    ArtFecVenMes: 4,
    ArtFecVenDia: 21,
    ArtPreUni: 20.75,
    ArtSto: 225,
    ArtEstReg: EstadoRegistro.ACTIVO,
  },
  {
    ArtNom: 'FRAMYCORT',
    ArtLab: pickRandomCode(laboratorios),
    ArtCat: pickRandomCode(categorias),
    ArtTipUniMed: pickRandomCode(tiposUnidadesMedida),
    ArtFecVenAño: 2023,
    ArtFecVenMes: 12,
    ArtFecVenDia: 25,
    ArtPreUni: 120.25,
    ArtSto: 4,
    ArtEstReg: EstadoRegistro.ACTIVO,
  },
];

module.exports = articulos;
