import { LastPalletDistribution } from '../../../domain/models/lastPalletDistribution.model';
import { LastPalletDistributionRepository } from '../../../domain/ports/lastPalletDistributionRepository';
import sql from 'mssql';
import { config } from '../share/dbConfig';

export class LastPalletDistributionRepositoryImpl implements LastPalletDistributionRepository {
  async getLastPalletDistribution(): Promise<LastPalletDistribution | null> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request().execute('APP_Ultimo_IdPalletDistribucion_Select');

      return result.recordset[0] ?? null;
    } catch (error) {
      console.error('Error executing APP_Ultimo_IdPalletDistribucion_Select:', error);
      throw new Error('Failed to fetch last pallet distribution ID');
    }
  }
}