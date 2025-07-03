import { Request, Response } from 'express';
import { CalidadHuertasSelectByIdLoteRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadHuertasSelectByIdLoteRepositoryImpl';
import { CalidadHuertasSelectByIdLoteService } from '../../../application/calidad/services/calidadHuertasSelectByIdLote.service';


export const calidadHuertasSelectByIdLoteHandler = async (req: Request, res: Response) => {
  const idLote = Number(req.params.idLote);
  if (isNaN(idLote)) return res.status(400).json({ message: 'Invalid IdLote' });

  const repository = new CalidadHuertasSelectByIdLoteRepositoryImpl();
  const service = new CalidadHuertasSelectByIdLoteService(repository);

  try {
    const result = await service.execute(idLote);
    res.json(result);
  } catch (error) {
    console.error('Error en handler:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};