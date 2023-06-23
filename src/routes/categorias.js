const { Router } = require('express');
const { CategoriaService } = require('../services');

function categorias(app) {
  const router = Router();
  app.use('/api/categorias', router);

  const categoriaServ = new CategoriaService();

  router.get('/', async (req, res) => {
    const result = await categoriaServ.getAll();

    return res.status(result.success ? 200 : 500).json(result);
  });

  router.get('/:cod', async (req, res) => {
    const result = await categoriaServ.get(req.params.cod);

    return res.status(result.success ? 200 : 400).json(result);
  });

  router.post('/', async (req, res) => {
    const result = await categoriaServ.create(req.body);

    return res.status(result.success ? 201 : 400).json(result);
  });

  router.patch('/:cod', async (req, res) => {
    const result = await categoriaServ.edit(req.params.cod, req.body);

    return res.status(result.success ? 202 : 400).json(result);
  });

  router.delete('/:cod', async (req, res) => {
    const result = await categoriaServ.delete(req.params.cod);

    return res.status(result.success ? 202 : 400).json(result);
  });
}

module.exports = categorias;
