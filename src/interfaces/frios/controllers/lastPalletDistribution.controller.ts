import { Request, Response } from 'express';
import { LastPalletDistributionRepositoryImpl } from '../../../infrastructure/db/frios/mssql/LastPalletDistributionRepositoryImpl';
import { GetLastPalletDistributionService } from '../../../application/frios/services/getLastPalletDistribution.service';

const repo = new LastPalletDistributionRepositoryImpl();
const service = new GetLastPalletDistributionService(repo);

export const getLastPalletDistributionHandler = async (req: Request, res: Response) => {
  try {
    const result = await service.execute();
    if (!result) {
      return res.status(404).json({ message: 'No pallet distribution found' });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching last pallet distribution', error });
  }
};