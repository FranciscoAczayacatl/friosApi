import { Request, Response } from 'express';
import { PalletRepositoryImpl } from '../../../infrastructure/db/frios/mssql/PalletRepositoryInsertImpl';
import { InsertPalletService } from '../../../application/frios/services/insertPallet.service';
import { Pallet } from '../../../domain/frios/models/Pallet';

const repo = new PalletRepositoryImpl();
const service = new InsertPalletService(repo);

export const insertPalletHandler = async (req: Request, res: Response) => {
    const {IdPallet, IdPedido, Observaciones, IdPartnerIfcoNo}: Pallet = req.body;
    const now = new Date();
    const day = now.getDate();             // Día (1-31)
    const month = now.getMonth() + 1;      // Mes (0-11) → por eso se suma 1
    const year = now.getFullYear();
    const PaletInsert ={
      IdPallet:IdPallet,
      Fecha: `${year}-${month}-${day} 00:00:00.000`,
      Ejercicio: year,
      IdMes: month,
      Dia: day,
      IdPedido: IdPedido,
      Pallets: 0,
      Cajas: 0,
      Kilogramos: 0,
      Observaciones: Observaciones,
      Bloqueo: 0,
      IdPartnerIfcoNo:IdPartnerIfcoNo
    }

  try {
    console.log(PaletInsert);
    
    await service.execute(PaletInsert);
    res.status(201).json({ message: 'Pallet inserted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error inserting pallet', error });
  }
};