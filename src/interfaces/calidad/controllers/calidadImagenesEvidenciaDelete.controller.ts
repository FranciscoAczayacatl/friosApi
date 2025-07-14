import { Request, Response } from 'express';
import { CalidadImagenesEvidenciaDeleteRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadImagenesEvidenciaDeleteRepositoryImpl';
import { CalidadImagenesEvidenciaDeleteService } from '../../../application/calidad/services/calidadImagenesEvidenciaDelete.service';

export const calidadImagenesEvidenciaDeleteHandler = async (req: Request, res: Response) => {
  const repository = new CalidadImagenesEvidenciaDeleteRepositoryImpl();
  const service = new CalidadImagenesEvidenciaDeleteService(repository);

  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: 'IdImagenes inválido' });
  }

  try {
    await service.execute(id);
    res.status(200).json({ message: 'Imagen eliminada correctamente' });
  } catch (error) {
    console.error('Error eliminando imagen evidencia:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}