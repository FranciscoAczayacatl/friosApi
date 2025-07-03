import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { LotesAbiertosRepository } from '../../../../domain/calidad/ports/lotesAbiertosRepository';
import { LotesAbiertos } from '../../../../domain/calidad/models/lotesAbiertos.model';

export class LotesAbiertosRepositoryImpl implements LotesAbiertosRepository {
  async getRecentLotes(): Promise<LotesAbiertos[]> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request().execute('APP_MOV_LotesAbiertos_Select');
      return result.recordset as LotesAbiertos[];
    } catch (error) {
      console.error('Error executing APP_MOV_LotesAbiertos_Select:', error);
      throw new Error('Failed to fetch recent lotes');
    }
  }
}