import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { CalidadPorcentajeGeneralDanosSelect } from '../../../../domain/calidad/models/CalidadPorcentajeGeneralDanosSelect';
import { CalidadPorcentajeGeneralDanosSelectRepository } from '../../../../domain/calidad/ports/CalidadPorcentajeGeneralDanosSelectRepository';


export class CalidadPorcentajeGeneralDanosSelectRepositoryImpl implements CalidadPorcentajeGeneralDanosSelectRepository {
  async select(): Promise<CalidadPorcentajeGeneralDanosSelect[]> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request().query(`
        SELECT TOP (1000)
          IdPorcentajeGeneralDaños,
          IdLote,
          Trips,
          Roña,
          Golpe,
          Rozadura,
          Varicela,
          Clavo,
          Alga,
          Escama,
          Granizo,
          Gusano,
          Quemadura,
          Sunblotch
        FROM TTS_App.dbo.APP_Calidad_PorcentajeGeneralDaños
      `);

      return result.recordset as CalidadPorcentajeGeneralDanosSelect[];
    } catch (error) {
      console.error('Error fetching porcentaje general daños:', error);
      throw new Error('Failed to fetch porcentaje general daños');
    }
  }
}