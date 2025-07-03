import { Request, Response } from 'express';
import { LotesAbiertosRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/lotesAbiertosRepositoryImpl';
import { GetLotesAbiertosService } from '../../../application/calidad/services/getLotesAbiertos.service';

const repo = new LotesAbiertosRepositoryImpl();
const service = new GetLotesAbiertosService(repo);

export const getLotesAbiertosHandler = async (req: Request, res: Response) => {
  try {
    const result = await service.execute();
    res.json(result);
  } catch (error) {
    console.error('Error fetching lotes abiertos:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};