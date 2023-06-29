const { Router } = require('express');
const { LaboratorioService } = require('../services');

function laboratorios(app) {
  const router = Router();
  app.use('/api/laboratorios', router);

  const laboratorioServ = new LaboratorioService();

  router.get('/', async (req, res) => {
    const result = await laboratorioServ.getAll();

    return res.status(result.success ? 200 : 500).json(result);
  });

  router.get('/:cod', async (req, res) => {
    const result = await laboratorioServ.get(req.params.cod);

    return res.status(result.success ? 200 : 400).json(result);
  });

  router.post('/', async (req, res) => {
    const result = await laboratorioServ.create(req.body);

    return res.status(result.success ? 201 : 400).json(result);
  });

  router.patch('/:cod', async (req, res) => {
    const result = await laboratorioServ.edit(req.params.cod, req.body);

    return res.status(result.success ? 202 : 400).json(result);
  });

  router.delete('/:cod', async (req, res) => {
    const result = await laboratorioServ.delete(req.params.cod);

    return res.status(result.success ? 202 : 400).json(result);
  });
}

module.exports = laboratorios;
