Estructura para un Pedido

```js
const pedido = {
  PedNum: 1,
  cliente: {
    PedCliCod,
    PedCliNom,
    PedCliApe,
    PedCliEma,
    PedCliUsuTel,
    PedCliUsuDir,
    PedCliEstReg,
  },
  PedFecAño,
  PedFecMes,
  PedFecDia,
  PedTipEstPed,
  PedEstReg,
  articulos: [
    {
      PedArtArtCod: 3
      PedArtArtNom: "PRODUCTO 3",
      PedArtPreUni: 99.99,
      PedArtCanSol: 20,
      PedArtCanDes: 10,
      PedArtEstReg: "A"
    },
    {
      PedArtArtCod: 4
      PedArtArtNom: "PRODUCTO 4",
      PedArtPreUni: 199.99,
      PedArtCanSol: 30,
      PedArtCanDes: 10,
      PedArtEstReg: "A"
    },
    {
      PedArtArtCod: 5
      PedArtArtNom: "PRODUCTO 5",
      PedArtPreUni: 299.99,
      PedArtCanSol: 20,
      PedArtCanDes: 20,
      PedArtEstReg: "A"
    }
  ]
};
```
