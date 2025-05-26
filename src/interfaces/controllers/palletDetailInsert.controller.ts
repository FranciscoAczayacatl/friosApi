
import { Request, Response } from 'express';
import { PalletDetailInsertRepositoryImpl } from "../../infrastructure/db/mssql/palletDetailInsertRepositoryImpl";
import { palletDetailInsertService } from '../../application/services/palletDetailInsert.service';
import { palletDetailInsert } from "../../domain/models/InsertPalletsDetail.model";
import { PalletDetailByIdNoPalletRepositoryImpl } from '../../infrastructure/db/mssql/PalletDetailByIdNoPalletRepositoryImpl';
import { GetPalletDetailsByIdNoPalletService } from '../../application/services/getPalletDetailsByIdNoPallet.service';
import { LastPalletDetailRepositoryImpl } from '../../infrastructure/db/mssql/LastPalletDetailRepositoryImpl';
import { GetLastPalletDetailService } from '../../application/services/getLastPalletDetail.service';
import { LastPalletDistributionRepositoryImpl } from '../../infrastructure/db/mssql/LastPalletDistributionRepositoryImpl';
import { GetLastPalletDistributionService } from '../../application/services/getLastPalletDistribution.service';
import { PalletDistribucionInsertRepositoryImpl } from '../../infrastructure/db/mssql/palletDistribucionInsertRepositoryImpl';
import { PalletDistribucionInsertService } from '../../application/services/palletDistribucionInsert.service';
import { PalletDistribucionRepositoryImpl } from '../../infrastructure/db/mssql/PalletDistribucionRepositoryImpl';
import { ObtenerPalletDistribucionService } from '../../application/services/palletDistribucion.service';
import { PalletPCKSelectRepositoryImpl } from '../../infrastructure/db/mssql/palletPCKSelect.repository.impl';
import { PalletPCKSelectService } from '../../application/services/palletPCKSelect.service';
import { UpdatePalletRepositoryImpl } from '../../infrastructure/db/mssql/updatePalletRepositoryImpl';
import { UpdatePalletService } from '../../application/services/updatePallet.service';
import { MovControlPalletsUpdateFacturadoRepositoryImpl } from '../../infrastructure/db/mssql/movControlPalletsUpdateFacturado.repository.impl';
import { MovControlPalletsUpdateFacturadoService } from '../../application/services/movControlPalletsUpdateFacturado.service';
import { MovPalletsDetalleSearchRepositoryImpl } from '../../infrastructure/db/mssql/movPalletsDetalleSearch.repository.impl';
import { MovPalletsDetalleSearchService } from '../../application/services/movPalletsDetalleSearch.service';
import { MovControlPalletsDateSelectByIdRepositoryImpl } from '../../infrastructure/db/mssql/movControlPalletsDateSelectById.repository.impl';
import { MovControlPalletsDateSelectByIdService } from '../../application/services/movControlPalletsDateSelectById.service';

const PalletDetailInsertRepositoryImplRepo = new PalletDetailInsertRepositoryImpl();
const palletDetailInsertServicew = new palletDetailInsertService(PalletDetailInsertRepositoryImplRepo);

const PalletDetailByIdNoPalletRepositoryImplrepo = new PalletDetailByIdNoPalletRepositoryImpl();
const getPalletDetailsByIdNoPalletService = new GetPalletDetailsByIdNoPalletService(PalletDetailByIdNoPalletRepositoryImplrepo);


const LastPalletDetailRepositoryImplrepo = new LastPalletDetailRepositoryImpl();
const getLastPalletDetailService = new GetLastPalletDetailService(LastPalletDetailRepositoryImplrepo);

const LastPalletDistributionRepositoryImplrepo = new LastPalletDistributionRepositoryImpl();
const getLastPalletDistributionService = new GetLastPalletDistributionService(LastPalletDistributionRepositoryImplrepo);

const PalletDistribucionInsertRepositoryImplrepo = new PalletDistribucionInsertRepositoryImpl();
const palletDistribucionInsertService = new PalletDistribucionInsertService(PalletDistribucionInsertRepositoryImplrepo);

const PalletDistribucionRepositoryImplrepo = new PalletDistribucionRepositoryImpl();
const obtenerPalletDistribucionService= new ObtenerPalletDistribucionService(PalletDistribucionRepositoryImplrepo);

const PalletPCKSelectRepositoryImplrepository = new PalletPCKSelectRepositoryImpl();
const palletPCKSelectService = new PalletPCKSelectService(PalletPCKSelectRepositoryImplrepository);

const UpdatePalletRepositoryImplrepository = new UpdatePalletRepositoryImpl();
const updatePalletService = new UpdatePalletService(UpdatePalletRepositoryImplrepository);


const MovControlPalletsUpdateFacturadoRepositoryImplrepo = new MovControlPalletsUpdateFacturadoRepositoryImpl();
const movControlPalletsUpdateFacturadoService = new MovControlPalletsUpdateFacturadoService(MovControlPalletsUpdateFacturadoRepositoryImplrepo);

const MovPalletsDetalleSearchRepositoryImplrepos = new MovPalletsDetalleSearchRepositoryImpl();
const movPalletsDetalleSearchService = new MovPalletsDetalleSearchService(MovPalletsDetalleSearchRepositoryImplrepos);

const MovControlPalletsDateSelectByIdRepositoryImplrepo = new MovControlPalletsDateSelectByIdRepositoryImpl();
const movControlPalletsDateSelectByIdService = new MovControlPalletsDateSelectByIdService(MovControlPalletsDateSelectByIdRepositoryImplrepo);

export const palletDetailInsertHandler = async (req: Request, res: Response) => {
  try {
    const { IdPallet, IdNoPallet }: palletDetailInsert = req.body;

    const found = await movPalletsDetalleSearchService.execute(IdNoPallet, IdPallet);

    if(found){
      console.log('pallet duplicado');
      res.status(302).json({ message: 'pallet duplicado'});
      return 0
    }

    const result = await getPalletDetailsByIdNoPalletService.execute(IdNoPallet);

    if (!result || result.length === 0) {
      return res.status(400).json({ message: 'No pallet details found' });
    }

    const totalKilogramos = result.reduce((acc, item) => acc + item.Kilogramos, 0);
    const totalCajas = result.reduce((acc, item) => acc + item.Cajas, 0);
    const getLastPalletDistribution = await getLastPalletDistributionService.execute();
    const lastPalletDistribution = (getLastPalletDistribution?.IdPalletDistribucion ?? 0) + 1;

    let lastPalletDetailId = (await getLastPalletDetailService.execute())?.IdDetallePallet ?? 0;

    const fechaActual = new Date();

    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();
    const dia = fechaActual.getDay();

    const fecha = new Date(anio, mes - 1, dia);


    const isSingleItem = result.length === 1;

    for (const item of result) {
      lastPalletDetailId++;

      const pallet = isSingleItem
        ? 1
        : item.Kilogramos / totalKilogramos;

      const paletInsert = {
        IdDetallePallet: lastPalletDetailId,
        IdPalletDistribucion: lastPalletDistribution,
        IdPallet,
        IdNoPallet,
        IdLote: item.IdLote,
        IdProducto: item.IdProducto,
        Pallets: pallet,
        Cajas: item.Cajas,
        Kilogramos: item.Kilogramos,
      };

      await palletDetailInsertServicew.execute(paletInsert);
      
    }

    const obtenerPalletDistribucion = await obtenerPalletDistribucionService.execute(IdPallet);
    console.log(obtenerPalletDistribucion);

    let date = await movControlPalletsDateSelectByIdService.execute(IdNoPallet);
    console.log('====================================');
    console.log(date?.Fecha);
    console.log('====================================');
let sqlDateTime=''
if (date?.Fecha) {
  const originalDate = new Date(date.Fecha); // convertir string a Date

  const zeroedDate = new Date(Date.UTC(
    originalDate.getUTCFullYear(),
    originalDate.getUTCMonth(),
    originalDate.getUTCDate()
  ));

  const isoString = zeroedDate.toISOString(); // "2025-05-06T00:00:00.000Z"

    sqlDateTime = isoString.slice(0, 19).replace('T', ' ');
  console.log(sqlDateTime); // "2025-05-06 00:00:00"
} else {
  console.log('Fecha no disponible');
}
    if (obtenerPalletDistribucion.length === 0) {
          const datapalletDistribucion={
            IdPalletDistribucion: lastPalletDistribution,
            IdPallet: IdPallet,
            Identificador: "PALLET 01",
            NumeroPallet: 1,
            Cajas: totalCajas,
            Kilogramos: totalKilogramos,
            Temperatura: 0.00,
            Termografo: 0,
            FechaOriginal: sqlDateTime || fecha.toISOString(),
            FechaPropuesta: sqlDateTime || fecha.toISOString()
          }
          await palletDistribucionInsertService.execute(datapalletDistribucion);
          await movControlPalletsUpdateFacturadoService.execute(IdNoPallet, 1)
    } else {
      const maxNumeroPallet = Math.max(...obtenerPalletDistribucion.map(p => Number(p.NumeroPallet)));
      const datapalletDistribucion={
            IdPalletDistribucion: lastPalletDistribution,
            IdPallet: IdPallet,
            Identificador: `PALLET ${(maxNumeroPallet + 1).toString().padStart(2, '0')}`,
            NumeroPallet: maxNumeroPallet + 1,
            Cajas: totalCajas,
            Kilogramos: totalKilogramos,
            Temperatura: 0.00,
            Termografo: 0,
            FechaOriginal: sqlDateTime || fecha.toISOString(),
            FechaPropuesta: sqlDateTime || fecha.toISOString(),
          }
          await palletDistribucionInsertService.execute(datapalletDistribucion);
          await movControlPalletsUpdateFacturadoService.execute(IdNoPallet, 1)
    }
    if (obtenerPalletDistribucion.length === 0) {
      const palletPCKSelect = await palletPCKSelectService.execute(IdPallet);
      const updatedata ={
            Pallets: 1,
            Cajas: palletPCKSelect[0].Cajas + totalCajas,
            Kilogramos: palletPCKSelect[0].Kilogramos + totalKilogramos,
            IdPallet: IdPallet
          }
        console.log(updatedata);
        const up = await updatePalletService.execute(updatedata)
    
} else {
  const maxNumeroPallet = Math.max(...obtenerPalletDistribucion.map(p => Number(p.NumeroPallet)));
  const palletPCKSelect = await palletPCKSelectService.execute(IdPallet);
    const updatedata ={
        Pallets: maxNumeroPallet + 1,
        Cajas: palletPCKSelect[0].Cajas + totalCajas,
        Kilogramos: palletPCKSelect[0].Kilogramos + totalKilogramos,
        IdPallet: IdPallet
      }
    console.log(updatedata);
    const up = await updatePalletService.execute(updatedata)
    
    
}
    res.status(201).json({ message: 'Pallet inserted successfully'});
  } catch (error) {
    console.error('Error inserting pallet:', error);
    res.status(500).json({ message: 'Error inserting pallet', error });
  }
};