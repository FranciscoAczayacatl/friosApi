import { Request, Response } from 'express';
import { CalidadHuertasPesoCalibreSelectByLoteRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadHuertasPesoCalibreSelectByLoteRepositoryImpl';
import { CalidadHuertasPesoCalibreSelectByLoteService } from '../../../application/calidad/services/calidadHuertasPesoCalibreSelectByLote.service';

export const calidadHuertasPesoCalibreSelectByLoteHandler = async (req: Request, res: Response) => {
  const idLote = Number(req.params.idLote);
  if (isNaN(idLote)) return res.status(400).json({ message: 'Invalid IdLote' });

  const repository = new CalidadHuertasPesoCalibreSelectByLoteRepositoryImpl();
  const service = new CalidadHuertasPesoCalibreSelectByLoteService(repository);

  try {
    const result = await service.execute(idLote);
    res.json(result);
  } catch (error) {
    console.error('Error fetching calidadHuertasPesoCalibre por lote:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};