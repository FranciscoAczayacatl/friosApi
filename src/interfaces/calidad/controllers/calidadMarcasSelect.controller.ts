import { Request, Response } from 'express';
import { CalidadMarcasSelectRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadMarcasSelectRepositoryImpl';
import { CalidadMarcasSelectService } from '../../../application/calidad/services/calidadMarcasSelect.service';


export const calidadMarcasSelectHandler = async (_req: Request, res: Response) => {
  const repository = new CalidadMarcasSelectRepositoryImpl();
  const service = new CalidadMarcasSelectService(repository);

  try {
    const result = await service.execute();
    res.status(200).json(result);
  } catch (error) {
    console.error('Error getting marcas:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};