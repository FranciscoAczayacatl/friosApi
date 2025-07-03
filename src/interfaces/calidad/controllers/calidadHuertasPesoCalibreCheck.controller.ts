import { Request, Response } from 'express';
import { CalidadHuertasPesoCalibreCheckRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadHuertasPesoCalibreCheckRepositoryImpl';
import { CalidadHuertasPesoCalibreCheckService } from '../../../application/calidad/services/calidadHuertasPesoCalibreCheck.service';


export const calidadHuertasPesoCalibreCheckHandler = async (req: Request, res: Response) => {
  const idLote = Number(req.params.idLote);
  const calibre = req.query.calibre?.toString() || '';

  if (isNaN(idLote) || !calibre) {
    return res.status(400).json({ message: 'Invalid parameters' });
  }

  const repository = new CalidadHuertasPesoCalibreCheckRepositoryImpl();
  const service = new CalidadHuertasPesoCalibreCheckService(repository);

  try {
    // const exists = await service.execute(idLote, calibre, marca:'ee');
    // res.json({ exists });
  } catch (error) {
    console.error('Error checking calibre pattern:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};