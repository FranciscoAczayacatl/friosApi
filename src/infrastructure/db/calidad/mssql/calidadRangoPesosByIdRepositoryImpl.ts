import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { CalidadRangoPesosByIdRepository } from '../../../../domain/calidad/ports/CalidadRangoPesosByIdRepository';
import { CalidadRangoPesosById } from '../../../../domain/calidad/models/CalidadRangoPesosById';

export class CalidadRangoPesosByIdRepositoryImpl implements CalidadRangoPesosByIdRepository {
  async getById(id: number): Promise<CalidadRangoPesosById | null> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request()
        .input('IdRangoPesos', sql.Int, id)
        .query(`
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
          WHERE IdRangoPesos = @IdRangoPesos
        `);

      return result.recordset[0] || null;
    } catch (error) {
      console.error('Error fetching rango pesos by ID:', error);
      throw new Error('Failed to fetch rango pesos');
    }
  }
}