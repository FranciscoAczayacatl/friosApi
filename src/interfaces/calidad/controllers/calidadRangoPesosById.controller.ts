import { Request, Response } from 'express';
import { CalidadRangoPesosByIdRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadRangoPesosByIdRepositoryImpl';
import { CalidadRangoPesosByIdService } from '../../../application/calidad/services/calidadRangoPesosById.service';

export const calidadRangoPesosByIdHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const repository = new CalidadRangoPesosByIdRepositoryImpl();
  const service = new CalidadRangoPesosByIdService(repository);

  try {
    const result = await service.execute(Number(id));
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'Rango pesos not found' });
    }
  } catch (error) {
    console.error('Error getting rango pesos by id:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};