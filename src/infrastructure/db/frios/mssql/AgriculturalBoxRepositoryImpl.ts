import { AgriculturalBox } from '../../../../domain/frios/models/AgriculturalBox';
import { AgriculturalBoxRepository } from '../../../../domain/frios/ports/agriculturalBoxRepository';
import sql from 'mssql';
import { config } from '../../share/dbConfig';

export class AgriculturalBoxRepositoryImpl implements AgriculturalBoxRepository {
  async getAll(): Promise<AgriculturalBox[]> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request().execute('APP_Cajas_Agricolas_Select');
      return result.recordset;
    } catch (error) {
      console.error('Error executing APP_Cajas_Agricolas_Select:', error);
      throw new Error('Failed to fetch agricultural boxes');
    }
  }
}