import { Request, Response } from 'express';
import { CalidadHuertasPesoCalibreDeleteRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadHuertasPesoCalibreDeleteRepositoryImpl';
import { CalidadHuertasPesoCalibreDeleteService } from '../../../application/calidad/services/calidadHuertasPesoCalibreDelete.service';


export const calidadHuertasPesoCalibreDeleteHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: 'Invalid ID' });

  const repository = new CalidadHuertasPesoCalibreDeleteRepositoryImpl();
  const service = new CalidadHuertasPesoCalibreDeleteService(repository);

  try {
    await service.execute(id);
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error('Error deleting CalidadHuertasPesoCalibre:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};