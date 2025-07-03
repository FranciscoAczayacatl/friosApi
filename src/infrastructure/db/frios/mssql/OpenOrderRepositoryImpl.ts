import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { OpenOrder } from '../../../../domain/frios/models/OpenOrder';
import { OpenOrderRepository } from '../../../../domain/frios/ports/openOrderRepository';

export class OpenOrderRepositoryImpl implements OpenOrderRepository {
  async getOpenOrders(): Promise<OpenOrder[]> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request().execute('APP_Pedidos_Abiertos_Select');
      return result.recordset;
    } catch (error) {
      console.error('Error executing APP_Pedidos_Abiertos_Select:', error);
      throw new Error('Failed to fetch open orders');
    }
  }
}