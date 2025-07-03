import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { CalidadPorcentajeGeneralDanosByIdRepository } from '../../../../domain/calidad/ports/CalidadPorcentajeGeneralDanosByIdRepository';
import { CalidadPorcentajeGeneralDanos } from '../../../../domain/calidad/models/CalidadPorcentajeGeneralDanos';


export class CalidadPorcentajeGeneralDanosByIdRepositoryImpl implements CalidadPorcentajeGeneralDanosByIdRepository {
  async getById(id: number): Promise<CalidadPorcentajeGeneralDanos | null> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request()
        .input('IdPorcentajeGeneralDaños', sql.Int, id)
        .query(`
          SELECT [IdPorcentajeGeneralDaños], [IdLote], [Trips], [Roña], [Golpe], [Rozadura],
                 [Varicela], [Clavo], [Alga], [Escama], [Granizo], [Gusano], [Quemadura],
                 [Sunblotch], [IdHuertasPesoCalibre]
          FROM [TTS_App].[dbo].[APP_Calidad_PorcentajeGeneralDaños]
          WHERE IdPorcentajeGeneralDaños = @IdPorcentajeGeneralDaños
        `);

      return result.recordset[0] || null;
    } catch (error) {
      console.error('Error fetching porcentaje general de daños por ID:', error);
      throw new Error('Database error');
    }
  }
}