import { Request, Response } from 'express';
import { PalletDetailByIdNoPalletRepositoryImpl } from '../../infrastructure/db/mssql/PalletDetailByIdNoPalletRepositoryImpl';
import { GetPalletDetailsByIdNoPalletService } from '../../application/services/getPalletDetailsByIdNoPallet.service';

const repo = new PalletDetailByIdNoPalletRepositoryImpl();
const service = new GetPalletDetailsByIdNoPalletService(repo);

export const getPalletDetailsByIdNoPalletHandler = async (req: Request, res: Response) => {
  const idNoPallet = parseInt(req.params.idNoPallet);

  if (isNaN(idNoPallet)) {
    return res.status(400).json({ message: 'Invalid idNoPallet parameter' });
  }

  try {
    const result = await service.execute(idNoPallet);

    if (!result.length) {
      return res.status(404).json({ message: 'No pallet details found' });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pallet details', error });
  }
};