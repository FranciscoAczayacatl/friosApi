import { Request, Response } from 'express';
import { CalidadCategoriaSelectRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadCategoriaSelectRepositoryImpl';
import { CalidadCategoriaSelectService } from '../../../application/calidad/services/calidadCategoriaSelect.service';


export const calidadCategoriaSelectHandler = async (_req: Request, res: Response) => {
  const repository = new CalidadCategoriaSelectRepositoryImpl();
  const service = new CalidadCategoriaSelectService(repository);

  try {
    const result = await service.execute();
    res.status(200).json(result);
  } catch (error) {
    console.error('Error getting categorias:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};