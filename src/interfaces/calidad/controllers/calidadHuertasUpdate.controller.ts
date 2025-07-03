import { Request, Response } from 'express';
import { CalidadHuertasUpdateRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadHuertasUpdateRepositoryImpl';
import { CalidadHuertasUpdateService } from '../../../application/calidad/services/calidadHuertasUpdate.service';

export const calidadHuertasUpdateHandler = async (req: Request, res: Response) => {
  const { IdLote, VelocidadCepillado, TipoCorte, EstadoFruta, Observaciones } = req.body;

  if (!IdLote || VelocidadCepillado === undefined || TipoCorte === undefined || EstadoFruta === undefined || Observaciones === undefined) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const repository = new CalidadHuertasUpdateRepositoryImpl();
  const service = new CalidadHuertasUpdateService(repository);

  try {
    await service.execute({ IdLote, VelocidadCepillado, TipoCorte, EstadoFruta, Observaciones });
    res.json({ message: 'Calidad Huertas updated successfully' });
  } catch (error) {
    console.error('Error updating calidad huertas:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};