const { TipoUnidadMedidaModel } = require('../models');

class TipoUnidadMedidaService {
  async getAll() {
    try {
      const tiposUnidadMedida = await TipoUnidadMedidaModel.getAll();

      return {
        success: true,
        tiposUnidadMedida,
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
      const tipoUnidadMedida = await TipoUnidadMedidaModel.get(cod);

      return {
        success: true,
        tipoUnidadMedida,
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
      const tipoUnidadMedida = await TipoUnidadMedidaModel.create(data);

      return {
        success: true,
        tipoUnidadMedida,
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
      const tipoUnidadMedida = await TipoUnidadMedidaModel.edit(cod, data);

      return {
        success: true,
        tipoUnidadMedida,
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
      const tipoUnidadMedida = await TipoUnidadMedidaModel.delete(cod);

      return {
        success: true,
        tipoUnidadMedida,
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

module.exports = TipoUnidadMedidaService;
