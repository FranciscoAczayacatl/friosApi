import { LastPalletDetail } from '../../../../domain/frios/models/lastPalletDetail.model';
import { LastPalletDetailRepository } from '../../../../domain/frios/ports/lastPalletDetailRepository';
import sql from 'mssql';
import { config } from '../../share/dbConfig';

export class LastPalletDetailRepositoryImpl implements LastPalletDetailRepository {
  async getLastPalletDetail(): Promise<LastPalletDetail | null> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request().execute('APP_Ultimo_IdDetallePallet_Select');

      return result.recordset[0] ?? null;
    } catch (error) {
      console.error('Error executing APP_Ultimo_IdDetallePallet_Select:', error);
      throw new Error('Failed to fetch last pallet detail ID');
    }
  }
}