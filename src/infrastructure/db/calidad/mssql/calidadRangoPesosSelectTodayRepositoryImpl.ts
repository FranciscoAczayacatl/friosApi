import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { CalidadRangoPesosSelectTodayRepository } from '../../../../domain/calidad/ports/CalidadRangoPesosSelectTodayRepository';
import { CalidadRangoPesosSelectToday } from '../../../../domain/calidad/models/CalidadRangoPesosSelectToday';

export class CalidadRangoPesosSelectTodayRepositoryImpl implements CalidadRangoPesosSelectTodayRepository {
  async selectToday(): Promise<CalidadRangoPesosSelectToday[]> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request().query(`
        SELECT 
          IdRangoPesos,
          Cal32,
          Cal36,
          Cal40,
          Cal48,
          Cal60,
          Cal70,
          Cal84,
          Fecha
        FROM TTS_App.dbo.APP_Calidad_RangoPesos
        WHERE CAST(Fecha AS DATE) = CAST(GETDATE() AS DATE)
      `);

      return result.recordset as CalidadRangoPesosSelectToday[];
    } catch (error) {
      console.error('Error fetching today\'s rango pesos:', error);
      throw new Error('Failed to fetch today\'s rango pesos');
    }
  }
}