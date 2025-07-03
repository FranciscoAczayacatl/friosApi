import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { CalidadCategoriaSelectRepository } from '../../../../domain/calidad/ports/CalidadCategoriaSelectRepository';
import { CalidadCategoriaSelect } from '../../../../domain/calidad/models/CalidadCategoriaSelect';


export class CalidadCategoriaSelectRepositoryImpl implements CalidadCategoriaSelectRepository {
  async getAll(): Promise<CalidadCategoriaSelect[]> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request().query(`
        SELECT IdCategoria, Categoria
        FROM TTS_App.dbo.APP_Calidad_Categoria
      `);
      return result.recordset as CalidadCategoriaSelect[];
    } catch (error) {
      console.error('Error fetching categorias:', error);
      throw new Error('Failed to fetch categorias');
    }
  }
}