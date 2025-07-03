import { Request, Response } from 'express';
import { CalidadPorcentajeGeneralDanosUpdateRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadPorcentajeGeneralDanosUpdateRepositoryImpl';
import { CalidadPorcentajeGeneralDanosUpdateService } from '../../../application/calidad/services/calidadPorcentajeGeneralDanosUpdate.service';


export const calidadPorcentajeGeneralDanosUpdateHandler = async (req: Request, res: Response) => {
  const data = req.body;
  console.log(data)
  if (!data.IdPorcentajeGeneralDanos) {
    console.log('====================================');
    console.log('IdPorcentajeGeneralDanos is required');
    console.log('====================================');
    return res.status(400).json({ message: 'IdPorcentajeGeneralDanos is required' }
    );
  }

  const repository = new CalidadPorcentajeGeneralDanosUpdateRepositoryImpl();
  const service = new CalidadPorcentajeGeneralDanosUpdateService(repository);

  try {
    await service.execute(data);
    res.status(200).json({ message: 'Update successful' });
  } catch (error) {
    console.error('Error updating porcentaje general daños:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};