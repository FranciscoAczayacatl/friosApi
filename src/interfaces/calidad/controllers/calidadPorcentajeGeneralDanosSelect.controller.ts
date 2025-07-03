import { Request, Response } from 'express';
import { CalidadPorcentajeGeneralDanosSelectRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadPorcentajeGeneralDanosSelectRepositoryImpl';
import { CalidadPorcentajeGeneralDanosSelectService } from '../../../application/calidad/services/calidadPorcentajeGeneralDanosSelect.service';


export const calidadPorcentajeGeneralDanosSelectHandler = async (req: Request, res: Response) => {
  const repository = new CalidadPorcentajeGeneralDanosSelectRepositoryImpl();
  const service = new CalidadPorcentajeGeneralDanosSelectService(repository);

  try {
    const result = await service.execute();
    res.json(result);
  } catch (error) {
    console.error('Error fetching porcentaje general daños:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};