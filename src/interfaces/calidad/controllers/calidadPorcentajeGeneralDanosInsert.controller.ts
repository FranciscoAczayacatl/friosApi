import { Request, Response } from 'express';
import { CalidadPorcentajeGeneralDanosInsertRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadPorcentajeGeneralDanosInsertRepositoryImpl';
import { CalidadPorcentajeGeneralDanosInsertService } from '../../../application/calidad/services/calidadPorcentajeGeneralDanosInsert.service';


export const calidadPorcentajeGeneralDanosInsertHandler = async (req: Request, res: Response) => {
  const repository = new CalidadPorcentajeGeneralDanosInsertRepositoryImpl();
  const service = new CalidadPorcentajeGeneralDanosInsertService(repository);

  try {
    await service.execute(req.body);
    res.status(201).json({ message: 'Inserted successfully' });
  } catch (error) {
    console.error('Error inserting PorcentajeGeneralDaños:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};