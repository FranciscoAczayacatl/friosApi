import { Request, Response } from 'express';
import { CalidadImagenInsertRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadImagenInsertRepositoryImpl';
import { CalidadImagenInsertService } from '../../../application/calidad/services/calidadImagenInsert.service';


export const calidadImagenInsertHandler = async (req: Request, res: Response) => {
  const { IdLote, ImagenBin, Nombre, Usuario,IdHuertasPesoCalibre } = req.body;

 
  if (!IdLote || !ImagenBin || !Nombre || !Usuario || !IdHuertasPesoCalibre) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const buffer = Buffer.isBuffer(ImagenBin)
    ? ImagenBin
    : Buffer.from(ImagenBin, 'base64');

  const repository = new CalidadImagenInsertRepositoryImpl();
  const service = new CalidadImagenInsertService(repository);

  try {
    const result = await service.execute({
      IdLote,
      ImagenBin: buffer,
      Nombre,
      Usuario,
      IdHuertasPesoCalibre
    });

    res.status(201).json(result);
  } catch (error) {
    console.error('Error inserting imagen evidencia:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};