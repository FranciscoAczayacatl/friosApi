import { Request, Response } from 'express';
import { OrderByPalletRepositoryImpl } from '../../infrastructure/db/mssql/OrderByPalletRepositoryImpl';
import { GetOrderByPalletIdService } from '../../application/services/orderByPallet.service';

const repo = new OrderByPalletRepositoryImpl();
const service = new GetOrderByPalletIdService(repo);

export const getOrderByIdServiceHandler = async (req: Request, res: Response) => {
  const idPallet = parseInt(req.params.idPallet);

  if (isNaN(idPallet)) {
    return res.status(400).json({ message: 'Parámetro idPallet inválido' });
  }

  try {
    const data = await service.execute(idPallet);
    if (!data) return res.status(404).json({ message: 'No se encontró información para el pallet' });

    res.json(data);
  } catch (error) {
    console.error('Error al obtener el pedido por pallet:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};