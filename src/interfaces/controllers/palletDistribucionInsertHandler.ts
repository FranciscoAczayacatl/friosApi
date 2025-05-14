import { Request, Response } from 'express';
import { PalletDistribucionInsert } from '../../domain/models/PalletDistribucionInsert.model';
import { PalletDistribucionInsertRepositoryImpl } from '../../infrastructure/db/mssql/palletDistribucionInsertRepositoryImpl';
import { PalletDistribucionInsertService } from '../../application/services/palletDistribucionInsert.service';

const repo = new PalletDistribucionInsertRepositoryImpl();
const service = new PalletDistribucionInsertService(repo);

export const palletDistribucionInsertHandler = async (req: Request, res: Response) => {
  try {
    const data: PalletDistribucionInsert = req.body;
    await service.execute(data);
    res.status(201).json({ message: 'Pallet Distribucion inserted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error inserting Pallet Distribucion', error });
  }
};