import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { CalidadCalibresSelectRepository } from '../../../../domain/calidad/ports/CalidadCalibresSelectRepository';
import { CalidadCalibresSelect } from '../../../../domain/calidad/models/CalidadCalibresSelect';


export class CalidadCalibresSelectRepositoryImpl implements CalidadCalibresSelectRepository {
  async getAll(): Promise<CalidadCalibresSelect[]> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request().query(`
        SELECT IdCalibre, Calibre
        FROM TTS_App.dbo.APP_Calidad_Calibres
      `);
      return result.recordset as CalidadCalibresSelect[];
    } catch (error) {
      console.error('Error fetching calibres:', error);
      throw new Error('Failed to fetch calibres');
    }
  }
}