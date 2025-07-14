import { Request, Response } from 'express';
import { ImageEvidenceRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/imageEvidenceRepositoryImpl';
import { ImageEvidenceService } from '../../../application/calidad/services/imageEvidenceService';


export const imageEvidenceHandler = async (req: Request, res: Response) => {
  const repository = new ImageEvidenceRepositoryImpl();
  const service = new ImageEvidenceService(repository);

  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    res.status(400).json({ message: 'Invalid IdHuertasPesoCalibre' });
    return;
  }

  try {
    const result = await service.getByCalibreId(id);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error getting image evidence by calibre ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};