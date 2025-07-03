import { Request, Response } from 'express';
import { LoteLineaProduccionSelectByIdRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/loteLineaProduccionSelectByIdRepositoryImpl';
import { LoteLineaProduccionSelectByIdService } from '../../../application/calidad/services/loteLineaProduccionSelectById.service';

export const loteLineaProduccionSelectByIdHandler = async (req: Request, res: Response) => {
  const idLote = Number(req.params.idLote);
  if (isNaN(idLote)) return res.status(400).json({ message: 'Invalid IdLote' });

  const repository = new LoteLineaProduccionSelectByIdRepositoryImpl();
  const service = new LoteLineaProduccionSelectByIdService(repository);

  try {
    const result = await service.execute(idLote);
    res.json(result);
  } catch (error) {
    console.error('Error in handler:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};