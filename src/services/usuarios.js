const { UsuarioModel } = require('../models');

class UsuarioService {
  async getAll() {
    try {
      const usuarios = await UsuarioModel.getAll();

      return {
        success: true,
        usuarios,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        messages: ['Consulte al Administrador'],
      };
    }
  }

  async get(cod) {
    try {
      const usuario = await UsuarioModel.get(cod);

      return {
        success: true,
        usuario,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        messages: ['Consulte al Administrador'],
      };
    }
  }

  async create(data) {
    try {
      const { UsuCod } = await UsuarioModel.create(data);
      const { usuario } = await this.get(UsuCod);

      return {
        success: true,
        usuario,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        messages: ['Consulte al Administrador'],
      };
    }
  }

  async edit(cod, data) {
    try {
      const { UsuCod } = await UsuarioModel.edit(cod, data);
      const { usuario } = await this.get(UsuCod);

      return {
        success: true,
        usuario,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        messages: ['Consulte al Administrador'],
      };
    }
  }
}

module.exports = UsuarioService;
