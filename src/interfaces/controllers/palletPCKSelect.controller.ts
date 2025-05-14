import { Request, Response } from 'express';
import { PalletPCKSelectRepositoryImpl } from '../../infrastructure/db/mssql/palletPCKSelect.repository.impl';
import { PalletPCKSelectService } from '../../application/services/palletPCKSelect.service';

export const palletPCKSelectHandler = async (req: Request, res: Response) => {
  const { IdPallet } = req.params;

  const repository = new PalletPCKSelectRepositoryImpl();
  const service = new PalletPCKSelectService(repository);

  try {
    const data = await service.execute(Number(IdPallet));
    res.status(200).json(data);
  } catch (error) {
    console.error('Error in palletPCKSelectHandler:', error);
    res.status(500).json({ error: 'Failed to fetch pallet PCK data' });
  }
};