const { LaboratorioModel } = require('../models');

class LaboratorioService {
  async getAll() {
    try {
      const laboratorios = await LaboratorioModel.getAll();

      return {
        success: true,
        laboratorios,
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
      const laboratorio = await LaboratorioModel.get(cod);

      return {
        success: true,
        laboratorio,
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
      const laboratorio = await LaboratorioModel.create(data);

      return {
        success: true,
        laboratorio,
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
      const laboratorio = await LaboratorioModel.edit(cod, data);

      return {
        success: true,
        laboratorio,
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
      const laboratorio = await LaboratorioModel.delete(cod);

      return {
        success: true,
        laboratorio,
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

module.exports = LaboratorioService;
