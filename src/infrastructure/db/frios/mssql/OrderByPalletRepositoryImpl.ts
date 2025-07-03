import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { OrderByPallet } from '../../../../domain/frios/models/orderByPallet.model';
import { OrderByPalletRepository } from '../../../../domain/frios/ports/orderByPalletRepository';

export class OrderByPalletRepositoryImpl implements OrderByPalletRepository {
  async getOrderByPalletId(idPallet: number): Promise<OrderByPallet | null> {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input('IdPallet', sql.Int, idPallet)
      .execute('APP_PedidoId_Select');

    if (result.recordset.length === 0) return null;
    return result.recordset[0] as OrderByPallet;
  }
}