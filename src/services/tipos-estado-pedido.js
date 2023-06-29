const { TipoEstadoPedidoModel } = require('../models');

class TipoEstadoPedidoService {
  async getAll() {
    try {
      const tiposEstadoPedido = await TipoEstadoPedidoModel.getAll();

      return {
        success: true,
        tiposEstadoPedido,
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
      const tipoEstadoPedido = await TipoEstadoPedidoModel.get(cod);

      return {
        success: true,
        tipoEstadoPedido,
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
      const tipoEstadoPedido = await TipoEstadoPedidoModel.create(data);

      return {
        success: true,
        tipoEstadoPedido,
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
      const tipoEstadoPedido = await TipoEstadoPedidoModel.edit(cod, data);

      return {
        success: true,
        tipoEstadoPedido,
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
      const tipoEstadoPedido = await TipoEstadoPedidoModel.delete(cod);

      return {
        success: true,
        tipoEstadoPedido,
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

module.exports = TipoEstadoPedidoService;
