import { Router } from 'express';
import { getLotesAbiertosHandler } from '../interfaces/calidad/controllers/lotesAbiertos.controller';
import { getCalidadHuertasDataHandler } from '../interfaces/calidad/controllers/calidadHuertasData.controller';
import { calidadHuertasInsertHandler } from '../interfaces/calidad/controllers/calidadHuertasInsert.controller';
import { getRecentQualityHuertaHandler } from '../interfaces/auth/controllers/qualityHuertaRecent.controller';
import { getClientNamesHandler } from '../interfaces/calidad/controllers/clientName.controller';
import { calidadHuertasClientesSelectByIdLoteHandler } from '../interfaces/calidad/controllers/calidadHuertasClientesSelectByIdLote.controller';
import { calidadHuertasClientesInsertHandler } from '../interfaces/calidad/controllers/calidadHuertasClientesInsert.controller';
import { calidadHuertasClientesDeleteHandler } from '../interfaces/calidad/controllers/calidadHuertasClientesDelete.controller';
import { lotesProductosResumenInfoHandler } from '../interfaces/calidad/controllers/lotesProductosResumenInfo.controller';
import { calidadHuertasPesoCalibreInsertHandler } from '../interfaces/calidad/controllers/calidadHuertasPesoCalibreInsert.controller';
import { calidadHuertasPesoCalibreSelectByLoteHandler } from '../interfaces/calidad/controllers/calidadHuertasPesoCalibreSelectByLote.controller';
import { loteLineaProduccionSelectByIdHandler } from '../interfaces/calidad/controllers/loteLineaProduccionSelectById.controller';
import { calidadHuertasUpdateHandler } from '../interfaces/calidad/controllers/calidadHuertasUpdate.controller';
import { calidadHuertasSelectByIdLoteHandler } from '../interfaces/calidad/controllers/calidadHuertasSelectByIdLote.controller';
import { calidadPorcentajeGeneralDanosSelectHandler } from '../interfaces/calidad/controllers/calidadPorcentajeGeneralDanosSelect.controller';
import { calidadPorcentajeGeneralDanosInsertHandler } from '../interfaces/calidad/controllers/calidadPorcentajeGeneralDanosInsert.controller';
import { calidadPorcentajeGeneralDanosByIdHandler } from '../interfaces/calidad/controllers/calidadPorcentajeGeneralDanosById.controller';
import { calidadPorcentajeGeneralDanosUpdateHandler } from '../interfaces/calidad/controllers/calidadPorcentajeGeneralDanosUpdate.controller';
import { calidadRangoPesosSelectTodayHandler } from '../interfaces/calidad/controllers/calidadRangoPesosSelectToday.controller';
import { calidadRangoPesosInsertHandler } from '../interfaces/calidad/controllers/calidadRangoPesosInsert.controller';
import { calidadRangoPesosUpdateHandler } from '../interfaces/calidad/controllers/calidadRangoPesosUpdate.controller';
import { calidadHuertasPesoCalibreDeleteHandler } from '../interfaces/calidad/controllers/calidadHuertasPesoCalibreDelete.controller';
import { calidadCalibresSelectHandler } from '../interfaces/calidad/controllers/calidadCalibresSelect.controller';
import { calidadCategoriaSelectHandler } from '../interfaces/calidad/controllers/calidadCategoriaSelect.controller';
import { calidadMarcasSelectHandler } from '../interfaces/calidad/controllers/calidadMarcasSelect.controller';


const router = Router()

router.get('/lotes-abiertos', getLotesAbiertosHandler);
router.get('/huertas/:IdUser', getCalidadHuertasDataHandler);
router.post("/calidad/huertas/insert", calidadHuertasInsertHandler);
router.get('/quality-huertas/recent', getRecentQualityHuertaHandler);
router.get('/clients/names', getClientNamesHandler);
router.get('/calidad/huertas-clientes/:id', calidadHuertasClientesSelectByIdLoteHandler);
router.post('/calidad/huertas-clientes/insert', calidadHuertasClientesInsertHandler);
router.delete('/calidad/huertas-clientes/delete/:id', calidadHuertasClientesDeleteHandler);
router.get('/lotes/productos/resumen/:idLote', lotesProductosResumenInfoHandler);
router.post('/calidad/huertas/peso-calibre', calidadHuertasPesoCalibreInsertHandler);
router.get('/calidad/huertas/peso-calibre/lote/:idLote', calidadHuertasPesoCalibreSelectByLoteHandler);
router.get('/lotes/linea-produccion/:idLote', loteLineaProduccionSelectByIdHandler);
router.put('/calidad/huertas/update', calidadHuertasUpdateHandler);
router.get('/calidad/huertas/by-lote/:idLote', calidadHuertasSelectByIdLoteHandler);
router.get('/calidad/porcentaje-general-danos', calidadPorcentajeGeneralDanosSelectHandler);
router.post('/calidad/porcentaje-danos', calidadPorcentajeGeneralDanosInsertHandler);
router.get('/calidad/porcentaje-danos/:id', calidadPorcentajeGeneralDanosByIdHandler);
router.put('/calidad/porcentaje-danos/update', calidadPorcentajeGeneralDanosUpdateHandler);
router.get('/calidad/rango-pesos/hoy', calidadRangoPesosSelectTodayHandler);
router.post('/calidad/rango-pesos', calidadRangoPesosInsertHandler);
router.put('/calidad/rango-pesos/update', calidadRangoPesosUpdateHandler);
router.delete('/calidad/huertas/peso-calibre/:id', calidadHuertasPesoCalibreDeleteHandler);
router.get('/calidad/calibres', calidadCalibresSelectHandler);
router.get('/calidad/categorias', calidadCategoriaSelectHandler);
router.get('/calidad/marcas', calidadMarcasSelectHandler);

export default router;