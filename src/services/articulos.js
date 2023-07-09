const { ArticuloModel } = require('../models');

class ArticuloService {
  async getAll() {
    try {
      const articulos = await ArticuloModel.getAll();

      return {
        success: true,
        articulos,
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
      const articulo = await ArticuloModel.get(cod);

      return {
        success: true,
        articulo,
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
      const { ArtCod } = await ArticuloModel.create(data);
      const { articulo } = await this.get(ArtCod);

      return {
        success: true,
        articulo,
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
      const { ArtCod } = await ArticuloModel.edit(cod, data);
      const { articulo } = await this.get(ArtCod);

      return {
        success: true,
        articulo,
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

module.exports = ArticuloService;
