const { Router } = require('express');
const { PedidoService } = require('../services');

function pedidos(app) {
  const router = Router();
  app.use('/api/pedidos', router);

  const pedidoServ = new PedidoService();

  router.get('/', async (req, res) => {
    const result = await pedidoServ.getAll();

    return res.status(result.success ? 200 : 500).json(result);
  });

  router.post('/', async (req, res) => {
    const result = await pedidoServ.create(req.body);

    return res.status(result.success ? 201 : 400).json(result);
  });

  router.patch('/:num', async (req, res) => {
    const result = await pedidoServ.edit(req.params.num, req.body);

    return res.status(result.success ? 202 : 400).json(result);
  });

  router.post('/:num/articulos', async (req, res) => {
    const result = await pedidoServ.add(req.params.num, req.body);

    return res.status(result.success ? 202 : 400).json(result);
  });
}

module.exports = pedidos;
