const { Router } = require('express');
const { TipoUnidadMedidaService } = require('../services');

function tiposUnidadMedida(app) {
  const router = Router();
  app.use('/api/tipos-unidad-medida', router);

  const tipoUnidadMedidaServ = new TipoUnidadMedidaService();

  router.get('/', async (req, res) => {
    const result = await tipoUnidadMedidaServ.getAll();

    return res.status(result.success ? 200 : 500).json(result);
  });

  router.get('/:cod', async (req, res) => {
    const result = await tipoUnidadMedidaServ.get(req.params.cod);

    return res.status(result.success ? 200 : 400).json(result);
  });

  router.post('/', async (req, res) => {
    const result = await tipoUnidadMedidaServ.create(req.body);

    return res.status(result.success ? 201 : 400).json(result);
  });

  router.patch('/:cod', async (req, res) => {
    const result = await tipoUnidadMedidaServ.edit(req.params.cod, req.body);

    return res.status(result.success ? 202 : 400).json(result);
  });

  router.delete('/:cod', async (req, res) => {
    const result = await tipoUnidadMedidaServ.delete(req.params.cod);

    return res.status(result.success ? 202 : 400).json(result);
  });
}

module.exports = tiposUnidadMedida;
