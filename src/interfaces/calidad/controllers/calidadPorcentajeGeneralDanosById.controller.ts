import { Request, Response } from 'express';
import { CalidadPorcentajeGeneralDanosByIdRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadPorcentajeGeneralDanosByIdRepositoryImpl';
import { CalidadPorcentajeGeneralDanosByIdService } from '../../../application/calidad/services/calidadPorcentajeGeneralDanosById.service';


export const calidadPorcentajeGeneralDanosByIdHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: 'Invalid ID' });

  const repository = new CalidadPorcentajeGeneralDanosByIdRepositoryImpl();
  const service = new CalidadPorcentajeGeneralDanosByIdService(repository);

  try {
    const result = await service.execute(id);
    if (!result) {
      return res.status(404).json({ message: 'No record found' });
    }
    res.json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};