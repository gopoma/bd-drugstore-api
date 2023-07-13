const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

// Importando las Variables de Entorno
const { env, port } = require('./config');

// Importando las Rutas
const {
  categorias,
  laboratorios,
  roles,
  tiposEstadoPedido,
  tiposUnidadMedida,

  articulos,
  usuarios,
  pedidos,
} = require('./routes');

const app = express();

// Logging
app.use(morgan('dev'));

// Implementando CORS
app.use(cors());

// Implementando cabeceras HTTP seguras
app.use(helmet());

// Configurando el Parser
app.use(express.json());

// Utilizando Rutas
categorias(app);
laboratorios(app);
roles(app);
tiposEstadoPedido(app);
tiposUnidadMedida(app);
articulos(app);
usuarios(app);
pedidos(app);

app.get('/', (req, res) => res.redirect('/api'));
app.get('/api', (req, res) => res.json({
  name: 'bd-drugstore-api',
  version: '1.0.0',
  authors: [
    'Valentina Milagros Chambilla Perca',
    'Gustavo Eduardo Ordoño Poma',
    'Diego Ivan Pacori Anccasi',
  ],
}));

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(' App is running at http://localhost:%d in %s mode', port, env);
  // eslint-disable-next-line
  console.log(' Press CTRL-C to stop\n');
});
