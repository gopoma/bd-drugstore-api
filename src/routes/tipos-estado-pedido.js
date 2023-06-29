const { Router } = require('express');
const { TipoEstadoPedidoService } = require('../services');

function tiposEstadoPedido(app) {
  const router = Router();
  app.use('/api/tipos-estado-pedido', router);

  const tipoEstadoPedidoServ = new TipoEstadoPedidoService();

  router.get('/', async (req, res) => {
    const result = await tipoEstadoPedidoServ.getAll();

    return res.status(result.success ? 200 : 500).json(result);
  });

  router.get('/:cod', async (req, res) => {
    const result = await tipoEstadoPedidoServ.get(req.params.cod);

    return res.status(result.success ? 200 : 400).json(result);
  });

  router.post('/', async (req, res) => {
    const result = await tipoEstadoPedidoServ.create(req.body);

    return res.status(result.success ? 201 : 400).json(result);
  });

  router.patch('/:cod', async (req, res) => {
    const result = await tipoEstadoPedidoServ.edit(req.params.cod, req.body);

    return res.status(result.success ? 202 : 400).json(result);
  });

  router.delete('/:cod', async (req, res) => {
    const result = await tipoEstadoPedidoServ.delete(req.params.cod);

    return res.status(result.success ? 202 : 400).json(result);
  });
}

module.exports = tiposEstadoPedido;
