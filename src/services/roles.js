const { RolModel } = require('../models');

class RolService {
  async getAll() {
    try {
      const roles = await RolModel.getAll();

      return {
        success: true,
        roles,
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
      const rol = await RolModel.get(cod);

      return {
        success: true,
        rol,
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
      const rol = await RolModel.create(data);

      return {
        success: true,
        rol,
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
      const rol = await RolModel.edit(cod, data);

      return {
        success: true,
        rol,
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
      const rol = await RolModel.delete(cod);

      return {
        success: true,
        rol,
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

module.exports = RolService;
