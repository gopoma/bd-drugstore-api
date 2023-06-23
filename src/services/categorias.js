const { CategoriaModel } = require('../models');

class CategoriaService {
  async getAll() {
    try {
      const categorias = await CategoriaModel.getAll();

      return {
        success: true,
        categorias,
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
      const categoria = await CategoriaModel.get(cod);

      return {
        success: true,
        categoria,
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
      const categoria = await CategoriaModel.create(data);

      return {
        success: true,
        categoria,
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
      const categoria = await CategoriaModel.edit(cod, data);

      return {
        success: true,
        categoria,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        messages: ['Consulte al Administrador'],
      };
    }
  }

  async delete(cod) {
    try {
      const categoria = await CategoriaModel.delete(cod);

      return {
        success: true,
        categoria,
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

module.exports = CategoriaService;
