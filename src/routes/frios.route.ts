import { Router } from 'express';

import { obtenerPalletsHandler } from '../interfaces/frios/controllers/movementsOfTheMonthController';
import { GetdetailRequestHandler } from '../interfaces/frios/controllers/detailRequestController';
import { obtenerPalletDistribucionHandler } from '../interfaces/frios/controllers/palletDistribucionController';
import { getOrderByIdServiceHandler } from '../interfaces/frios/controllers/orderByPalletController';
import { getSelectedProductsByPalletHandler } from '../interfaces/frios/controllers/selectedProductsController';
import { getPalletCalibersByPedidoHandler } from '../interfaces/frios/controllers/palletCalibersController';
import { getPalletCountByIdHandler } from '../interfaces/frios/controllers/palletCountController';
import { getLastPalletHandler } from '../interfaces/frios/controllers/lastPallet.controller';
import { getAgriculturalBoxesHandler } from '../interfaces/frios/controllers/agriculturalBoxes.controller';
import { getOpenOrdersHandler } from '../interfaces/frios/controllers/openOrders.controller';
import { insertPalletHandler } from '../interfaces/frios/controllers/pallet.controller';
import { getLastPalletDetailHandler } from '../interfaces/frios/controllers/lastPalletDetail.controller';
import { getLastPalletDistributionHandler } from '../interfaces/frios/controllers/lastPalletDistribution.controller';
import { getPalletDetailsByIdNoPalletHandler } from '../interfaces/frios/controllers/palletDetailByIdNoPallet.controller';
import { palletDetailInsertHandler } from '../interfaces/frios/controllers/palletDetailInsert.controller';
import { palletDistribucionInsertHandler } from '../interfaces/frios/controllers/palletDistribucionInsertHandler';
import { palletPCKSelectHandler } from '../interfaces/frios/controllers/palletPCKSelect.controller';
import { updatePalletHandler } from '../interfaces/frios/controllers/updatePallet.controller';
import { palletDistribucionSelectByIdHandler } from '../interfaces/frios/controllers/palletDistribucionSelectById.controller';
import { palletsDetalleDeleteByDistribucionIdHandler } from '../interfaces/frios/controllers/palletsDetalleDeleteByDistribucionId.controller';
import { palletsDistribucionDeleteByIdHandler } from '../interfaces/frios/controllers/palletsDistribucionDeleteById.controller';
import { palletDistribucionUpdateTemperaturaHandler } from '../interfaces/frios/controllers/palletDistribucionUpdateTemperatura.handler';
import { podEmbarqueInsertHandler } from '../interfaces/frios/controllers/podEmbarqueInsertController';
import { podLiberoEmbarqueSelectHandler } from '../interfaces/frios/controllers/podLiberoEmbarqueSelect.controller';
import { movControlPalletsUpdateFacturadoHandler } from '../interfaces/frios/controllers/movControlPalletsUpdateFacturado.controller';
import { movPalletsDetalleSearchHandler } from '../interfaces/frios/controllers/movPalletsDetalleSearch.controller';
import { movControlPalletsDateSelectByIdHandler } from '../interfaces/frios/controllers/movControlPalletsDateSelectById.controller';
import { controlPalletsExistsByIdAndMesHandler } from '../interfaces/frios/controllers/controlPalletsExistsByIdAndMes.controller';

const router = Router();
  router.get('/test', ()=>{
    console.log('====================================');
    console.log('entro');
    console.log('====================================');
  })

  router.get('/pallets', obtenerPalletsHandler);// /pallets?mes=4&ejercicio=2025
  router.get('/pedido-detalle', GetdetailRequestHandler);// /pedido-detalle?idPedido=799
  //router.get('/pallet-distribucion', obtenerPalletDistribucionHandler);// /pallet-distribucion?idPallet=123
  router.get('/pallets/:idPallet', getOrderByIdServiceHandler); // /pallets/763
  router.get('/productos-pallet/:idPallet', getSelectedProductsByPalletHandler); // /productos-pallet/799
  router.get('/calibres-pallet/:idPedido', getPalletCalibersByPedidoHandler);// /calibres-pallet/809
  router.get('/conteo-total-pallet/:idPallet', getPalletCountByIdHandler); // /conteo-total-pallet/799
  router.get('/pallet/last', getLastPalletHandler);
  router.get('/agricultural-box-partners', getAgriculturalBoxesHandler);
  router.get('/orders/open', getOpenOrdersHandler);
  router.post('/pallets', insertPalletHandler);

  router.get('/pallets/details/last', getLastPalletDetailHandler); ///pallets/details/last
  router.get('/pallets/distribution/last', getLastPalletDistributionHandler); // /pallets/distribution/last
  router.get('/pallets/details/:idNoPallet', getPalletDetailsByIdNoPalletHandler);// /pallets/details/1234
  router.post('/pallets/detail/insert', palletDetailInsertHandler);
  router.get("/control-pallets/exists/:idNoPallet/:idMes", controlPalletsExistsByIdAndMesHandler);

  //router.post('/pallets/distribucion/insert', palletDistribucionInsertHandler);

  router.get('/pallets/pck/select/:IdPallet', palletPCKSelectHandler);
  router.put('/pallets/update', updatePalletHandler);


  router.get("/pallets/distribucion/:id", palletDistribucionSelectByIdHandler);
  router.delete("/palletsDetalle/distribucion/:id", palletsDetalleDeleteByDistribucionIdHandler);
  router.delete("/palletsDistribucion/:id/:IdPallet", palletsDistribucionDeleteByIdHandler);
  router.put("/palletdistribucion/temperatura", palletDistribucionUpdateTemperaturaHandler);


  router.post("/pod/embarque", podEmbarqueInsertHandler);
  router.get("/pod/libero-embarque", podLiberoEmbarqueSelectHandler);

  
  router.put("/control-pallets/update-facturado/:id", movControlPalletsUpdateFacturadoHandler);
  router.get("/pallets-detalle/search", movPalletsDetalleSearchHandler);
  router.get("/control-pallets/date/:id", movControlPalletsDateSelectByIdHandler);

  

export default router;