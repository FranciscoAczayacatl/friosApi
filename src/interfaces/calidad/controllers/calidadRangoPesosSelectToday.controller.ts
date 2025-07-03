import { Request, Response } from 'express';
import { CalidadRangoPesosSelectTodayRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadRangoPesosSelectTodayRepositoryImpl';

import { CalidadRangoPesosSelectTodayService } from '../../../application/calidad/services/calidadRangoPesosSelectToday.service';

export const calidadRangoPesosSelectTodayHandler = async (_req: Request, res: Response) => {
  const repository = new CalidadRangoPesosSelectTodayRepositoryImpl();
  const service = new CalidadRangoPesosSelectTodayService(repository);

  try {
    const result = await service.execute();
    res.json(result);
  } catch (error) {
    console.error('Error in controller:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};