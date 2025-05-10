import express from 'express';
import { obtenerPalletsHandler } from '../../interfaces/controllers/movementsOfTheMonthController';
import { GetdetailRequestHandler } from '../../interfaces/controllers/detailRequestController';
import { getOrderByIdServiceHandler } from '../../interfaces/controllers/orderByPalletController';
import { getSelectedProductsByPalletHandler } from '../../interfaces/controllers/selectedProductsController';
import { getPalletCalibersByPedidoHandler } from '../../interfaces/controllers/palletCalibersController';
import { getPalletCountByIdHandler } from '../../interfaces/controllers/palletCountController';
import { getLastPalletHandler } from '../../interfaces/controllers/lastPallet.controller';
import { getAgriculturalBoxesHandler } from '../../interfaces/controllers/agriculturalBoxes.controller';
import { getOpenOrdersHandler } from '../../interfaces/controllers/openOrders.controller';
import { insertPalletHandler } from '../../interfaces/controllers/pallet.controller';
export const createServer = () => {
    const app = express();
    app.use(express.json());
    app.get('/pallets', obtenerPalletsHandler); // /pallets?mes=4&ejercicio=2025
    app.get('/pedido-detalle', GetdetailRequestHandler); // /pedido-detalle?idPedido=799
    // app.get('/pallet-distribucion', obtenerPalletDistribucionHandler);// /pallet-distribucion?idPallet=123
    app.get('/pallets/:idPallet', getOrderByIdServiceHandler); // /pallets/763
    app.get('/productos-pallet/:idPallet', getSelectedProductsByPalletHandler); // /productos-pallet/799
    app.get('/calibres-pallet/:idPedido', getPalletCalibersByPedidoHandler); // /calibres-pallet/809
    app.get('/conteo-total-pallet/:idPallet', getPalletCountByIdHandler); // /conteo-total-pallet/799
    app.get('/pallet/last', getLastPalletHandler);
    app.get('/agricultural-box-partners', getAgriculturalBoxesHandler);
    app.get('/orders/open', getOpenOrdersHandler);
    app.post('/pallets', insertPalletHandler);
    return app;
};
