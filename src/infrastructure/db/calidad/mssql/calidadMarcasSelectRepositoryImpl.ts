import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { CalidadMarcasSelectRepository } from '../../../../domain/calidad/ports/CalidadMarcasSelectRepository';
import { CalidadMarcasSelect } from '../../../../domain/calidad/models/CalidadMarcasSelect';


export class CalidadMarcasSelectRepositoryImpl implements CalidadMarcasSelectRepository {
  async getAll(): Promise<CalidadMarcasSelect[]> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request().query(`
        SELECT IdMarca, Marca
        FROM TTS_App.dbo.APP_Calidad_Marcas
      `);
      return result.recordset as CalidadMarcasSelect[];
    } catch (error) {
      console.error('Error fetching marcas:', error);
      throw new Error('Failed to fetch marcas');
    }
  }
}