import { Request, Response } from 'express';
import { UpdatePalletService } from '../../application/services/updatePallet.service';
import { UpdatePalletRepositoryImpl } from '../../infrastructure/db/mssql/updatePalletRepositoryImpl';

export const updatePalletHandler = async (req: Request, res: Response) => {
  const { Pallets, Cajas, Kilogramos, IdPallet } = req.body;

  const repository = new UpdatePalletRepositoryImpl();
  const service = new UpdatePalletService(repository);

  try {
    await service.execute({ Pallets, Cajas, Kilogramos, IdPallet });
    res.status(200).json({ message: 'Pallet updated successfully' });
  } catch (error) {
    console.error('Error updating pallet:', error);
    res.status(500).json({ message: 'Failed to update pallet' });
  }
}