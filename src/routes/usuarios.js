const { Router } = require('express');
const { UsuarioService } = require('../services');

function usuarios(app) {
  const router = Router();
  app.use('/api/usuarios', router);

  const usuarioServ = new UsuarioService();

  router.get('/', async (req, res) => {
    const result = await usuarioServ.getAll();

    return res.status(result.success ? 200 : 500).json(result);
  });

  router.get('/:cod', async (req, res) => {
    const result = await usuarioServ.get(req.params.cod);

    return res.status(result.success ? 200 : 400).json(result);
  });

  router.post('/', async (req, res) => {
    const result = await usuarioServ.create(req.body);

    return res.status(result.success ? 201 : 400).json(result);
  });

  router.patch('/:cod', async (req, res) => {
    const result = await usuarioServ.edit(req.params.cod, req.body);

    return res.status(result.success ? 202 : 400).json(result);
  });

  router.delete('/:cod', async (req, res) => {
    const result = await usuarioServ.delete(req.params.cod);

    return res.status(result.success ? 202 : 400).json(result);
  });
}

module.exports = usuarios;
