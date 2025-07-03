import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { CalidadHuertasData } from '../../../../domain/calidad/models/calidadHuertasData.model';
import { CalidadHuertasDataRepository } from '../../../../domain/calidad/ports/calidadHuertasDataRepository';

export class CalidadHuertasDataRepositoryImpl implements CalidadHuertasDataRepository {
  async getAll(): Promise<CalidadHuertasData[]> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request()
        .query(`
          SELECT  
            IdRegistroEmpacado, IdLote,Fecha, NoRegistro, Huerta, Municipio, Cajas, Peso,
            VelocidadCepillado, TipoCorte, EstadoFruta, Destino, Activo, Creador
          FROM TTS_App.dbo.APP_Calidad_Huertas
        `);

      return result.recordset;
    } catch (error) {
      console.error("Error fetching calidad huertas data:", error);
      throw new Error("Failed to fetch calidad huertas data");
    }
  }
}