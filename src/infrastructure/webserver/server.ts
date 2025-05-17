import express from 'express';
import { obtenerPalletsHandler } from '../../interfaces/controllers/movementsOfTheMonthController';
import { GetdetailRequestHandler } from '../../interfaces/controllers/detailRequestController';
import { obtenerPalletDistribucionHandler } from '../../interfaces/controllers/palletDistribucionController';
import { getOrderByIdServiceHandler } from '../../interfaces/controllers/orderByPalletController';
import { getSelectedProductsByPalletHandler } from '../../interfaces/controllers/selectedProductsController';
import { getPalletCalibersByPedidoHandler } from '../../interfaces/controllers/palletCalibersController';
import { getPalletCountByIdHandler } from '../../interfaces/controllers/palletCountController';
import { getLastPalletHandler } from '../../interfaces/controllers/lastPallet.controller';
import { getAgriculturalBoxesHandler } from '../../interfaces/controllers/agriculturalBoxes.controller';
import { getOpenOrdersHandler } from '../../interfaces/controllers/openOrders.controller';
import { insertPalletHandler } from '../../interfaces/controllers/pallet.controller';
import { getLastPalletDetailHandler } from '../../interfaces/controllers/lastPalletDetail.controller';
import { getLastPalletDistributionHandler } from '../../interfaces/controllers/lastPalletDistribution.controller';
import { getPalletDetailsByIdNoPalletHandler } from '../../interfaces/controllers/palletDetailByIdNoPallet.controller';
import { palletDetailInsertHandler } from '../../interfaces/controllers/palletDetailInsert.controller';
import { palletDistribucionInsertHandler } from '../../interfaces/controllers/palletDistribucionInsertHandler';
import { palletPCKSelectHandler } from '../../interfaces/controllers/palletPCKSelect.controller';
import { updatePalletHandler } from '../../interfaces/controllers/updatePallet.controller';
import { palletDistribucionSelectByIdHandler } from '../../interfaces/controllers/palletDistribucionSelectById.controller';
import { palletsDetalleDeleteByDistribucionIdHandler } from '../../interfaces/controllers/palletsDetalleDeleteByDistribucionId.controller';
import { palletsDistribucionDeleteByIdHandler } from '../../interfaces/controllers/palletsDistribucionDeleteById.controller';
import { palletDistribucionUpdateTemperaturaHandler } from '../../interfaces/controllers/palletDistribucionUpdateTemperatura.handler';
import { podEmbarqueInsertHandler } from '../../interfaces/controllers/podEmbarqueInsertController';
import { podLiberoEmbarqueSelectHandler } from '../../interfaces/controllers/podLiberoEmbarqueSelect.controller';
import { movControlPalletsUpdateFacturadoHandler } from '../../interfaces/controllers/movControlPalletsUpdateFacturado.controller';


export const createServer = () => {
  const app = express();
  app.use(express.json());
  app.use((req, res, next) => {
    console.log(`➡️ ${req.method} ${req.originalUrl}`);
    next();
  });
  app.get('/pallets', obtenerPalletsHandler);// /pallets?mes=4&ejercicio=2025
  app.get('/pedido-detalle', GetdetailRequestHandler);// /pedido-detalle?idPedido=799
  //app.get('/pallet-distribucion', obtenerPalletDistribucionHandler);// /pallet-distribucion?idPallet=123
  app.get('/pallets/:idPallet', getOrderByIdServiceHandler); // /pallets/763
  app.get('/productos-pallet/:idPallet', getSelectedProductsByPalletHandler); // /productos-pallet/799
  app.get('/calibres-pallet/:idPedido', getPalletCalibersByPedidoHandler);// /calibres-pallet/809
  app.get('/conteo-total-pallet/:idPallet', getPalletCountByIdHandler); // /conteo-total-pallet/799
  app.get('/pallet/last', getLastPalletHandler);
  app.get('/agricultural-box-partners', getAgriculturalBoxesHandler);
  app.get('/orders/open', getOpenOrdersHandler);
  app.post('/pallets', insertPalletHandler);

  app.get('/pallets/details/last', getLastPalletDetailHandler); ///pallets/details/last
  app.get('/pallets/distribution/last', getLastPalletDistributionHandler); // /pallets/distribution/last
  app.get('/pallets/details/:idNoPallet', getPalletDetailsByIdNoPalletHandler);// /pallets/details/1234
  app.post('/pallets/detail/insert', palletDetailInsertHandler);

  // app.post('/pallets/distribucion/insert', palletDistribucionInsertHandler);

  app.get('/pallets/pck/select/:IdPallet', palletPCKSelectHandler);
  app.put('/pallets/update', updatePalletHandler);


  app.get("/pallets/distribucion/:id", palletDistribucionSelectByIdHandler);
  app.delete("/palletsDetalle/distribucion/:id", palletsDetalleDeleteByDistribucionIdHandler);
  app.delete("/palletsDistribucion/:id/:IdPallet", palletsDistribucionDeleteByIdHandler);
  app.put("/palletdistribucion/temperatura", palletDistribucionUpdateTemperaturaHandler);


  app.post("/pod/embarque", podEmbarqueInsertHandler);
  app.get("/pod/libero-embarque", podLiberoEmbarqueSelectHandler);

  
  app.put("/control-pallets/update-facturado/:id", movControlPalletsUpdateFacturadoHandler);


  return app;
};