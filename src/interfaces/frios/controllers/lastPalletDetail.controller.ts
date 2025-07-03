import { Request, Response } from 'express';
import { LastPalletDetailRepositoryImpl } from '../../../infrastructure/db/frios/mssql/LastPalletDetailRepositoryImpl';
import { GetLastPalletDetailService } from '../../../application/frios/services/getLastPalletDetail.service';

const repo = new LastPalletDetailRepositoryImpl();
const service = new GetLastPalletDetailService(repo);

export const getLastPalletDetailHandler = async (req: Request, res: Response) => {
  try {
    const result = await service.execute();
    if (!result) {
      return res.status(404).json({ message: 'No pallet detail found' });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching last pallet detail', error });
  }
};