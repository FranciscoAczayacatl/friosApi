
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

export const palletDetailInsertHandler = async (req: Request, res: Response) => {
  try {
   console.log('====================================');
    console.log('entro');
    console.log('====================================');
    const { IdPallet, IdNoPallet }: palletDetailInsert = req.body;

     console.log('====================================');
    console.log(IdPallet, IdNoPallet);
    console.log('====================================');

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
            FechaOriginal: fecha.toISOString(),
            FechaPropuesta: fecha.toISOString()
          }
          await palletDistribucionInsertService.execute(datapalletDistribucion);
    } else {
      const maxNumeroPallet = Math.max(...obtenerPalletDistribucion.map(p => Number(p.NumeroPallet)));
      const datapalletDistribucion={
            IdPalletDistribucion: lastPalletDistribution,
            IdPallet: IdPallet,
            Identificador: `PALLET ${maxNumeroPallet > 10 ? '' : '0'}${maxNumeroPallet + 1}`,
            NumeroPallet: maxNumeroPallet + 1,
            Cajas: totalCajas,
            Kilogramos: totalKilogramos,
            Temperatura: 0.00,
            Termografo: 0,
            FechaOriginal: fecha.toISOString(),
            FechaPropuesta: fecha.toISOString()
          }
          await palletDistribucionInsertService.execute(datapalletDistribucion);
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