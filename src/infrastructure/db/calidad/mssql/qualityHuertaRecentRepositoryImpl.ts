import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { QualityHuertaRecent } from '../../../../domain/calidad/models/qualityHuertaRecent.model';
import { QualityHuertaRecentRepository } from '../../../../domain/calidad/ports/qualityHuertaRecentRepository';

export class QualityHuertaRecentRepositoryImpl implements QualityHuertaRecentRepository {
  async getRecentQualityEntries(): Promise<QualityHuertaRecent[]> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request().execute('APP_Calidad_Huertas_Select_Date');
      return result.recordset;
    } catch (error) {
      console.error('Error executing APP_Calidad_Huertas_Select_Date:', error);
      throw new Error('Failed to fetch recent quality entries');
    }
  }
}