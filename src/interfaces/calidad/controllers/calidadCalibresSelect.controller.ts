import { Request, Response } from 'express';
import { CalidadCalibresSelectRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadCalibresSelectRepositoryImpl';
import { CalidadCalibresSelectService } from '../../../application/calidad/services/calidadCalibresSelect.service';


export const calidadCalibresSelectHandler = async (_req: Request, res: Response) => {
  const repository = new CalidadCalibresSelectRepositoryImpl();
  const service = new CalidadCalibresSelectService(repository);

  try {
    const result = await service.execute();
    res.status(200).json(result);
  } catch (error) {
    console.error('Error getting calibres:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};