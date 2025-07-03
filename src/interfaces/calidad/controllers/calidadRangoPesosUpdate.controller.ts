import { Request, Response } from 'express';
import { CalidadRangoPesosUpdateRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadRangoPesosUpdateRepositoryImpl';
import { CalidadRangoPesosUpdateService } from '../../../application/calidad/services/calidadRangoPesosUpdate.service';


export const calidadRangoPesosUpdateHandler = async (req: Request, res: Response) => {
  const {
    IdRangoPesos,
    Cal32,
    Cal36,
    Cal40,
    Cal48,
    Cal60,
    Cal70,
    Cal84,
  } = req.body;

  console.log(req.body);
  

  if (!IdRangoPesos) {
    return res.status(400).json({ message: 'IdRangoPesos is required' });
  }

  const repository = new CalidadRangoPesosUpdateRepositoryImpl();
  const service = new CalidadRangoPesosUpdateService(repository);

  try {
    await service.execute({ IdRangoPesos, Cal32, Cal36, Cal40, Cal48, Cal60, Cal70, Cal84 });
    res.status(200).json({ message: 'Updated successfully' });
  } catch (error) {
    console.error('Error updating CalidadRangoPesos:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};