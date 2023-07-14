const { PedidoModel } = require('../models');

class PedidoService {
  async getAll() {
    try {
      const pedidos = await PedidoModel.getAll();

      return {
        success: true,
        pedidos,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        messages: ['Consulte al Administrador'],
      };
    }
  }

  async get(num) {
    try {
      const pedido = await PedidoModel.get(num);

      return {
        success: true,
        pedido,
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
      const { PedNum } = await PedidoModel.create(data);
      const { pedido } = await this.get(PedNum);

      return {
        success: true,
        pedido,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        messages: ['Consulte al Administrador'],
      };
    }
  }

  async edit(num, data) {
    try {
      const { PedNum } = await PedidoModel.edit(num, data);
      const { pedido } = await this.get(PedNum);

      return {
        success: true,
        pedido,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        messages: ['Consulte al Administrador'],
      };
    }
  }

  async add(num, data) {
    try {
      await PedidoModel.add(num, data);
      const { pedido } = await this.get(num);

      return {
        success: true,
        pedido,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        messages: ['Consulte al Administrador'],
      };
    }
  }

  async editArticulo(num, artCod, data) {
    try {
      const PedNum = await PedidoModel.editArticulo(num, artCod, data);
      const { pedido } = await this.get(PedNum);

      return {
        success: true,
        pedido,
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

module.exports = PedidoService;
