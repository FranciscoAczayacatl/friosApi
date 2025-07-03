import { Request, Response } from 'express';
import { CalidadRangoPesosInsertRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadRangoPesosInsertRepositoryImpl';
import { CalidadRangoPesosInsertService } from '../../../application/calidad/services/calidadRangoPesosInsert.service';

export const calidadRangoPesosInsertHandler = async (_req: Request, res: Response) => {
  const repository = new CalidadRangoPesosInsertRepositoryImpl();
  const service = new CalidadRangoPesosInsertService(repository);

  try {
    const result = await service.execute();
    res.status(201).json(result);
  } catch (error) {
    console.error('Error inserting calidad rango pesos:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};