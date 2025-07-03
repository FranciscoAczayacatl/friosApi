import { Request, Response } from 'express';
import { AgriculturalBoxRepositoryImpl } from '../../../infrastructure/db/frios/mssql/AgriculturalBoxRepositoryImpl';
import { GetAgriculturalBoxesService } from '../../../application/frios/services/getAgriculturalBoxes.service';

const repo = new AgriculturalBoxRepositoryImpl();
const service = new GetAgriculturalBoxesService(repo);

export const getAgriculturalBoxesHandler = async (req: Request, res: Response) => {
  try {
    const boxes = await service.execute();
    res.json(boxes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching agricultural boxes', error });
  }
};