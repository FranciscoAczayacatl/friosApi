import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { CalidadHuertasPesoCalibreDeleteRepository } from '../../../../domain/calidad/ports/CalidadHuertasPesoCalibreDeleteRepository';


export class CalidadHuertasPesoCalibreDeleteRepositoryImpl implements CalidadHuertasPesoCalibreDeleteRepository {
  async delete(id: number): Promise<void> {
    try {
      const pool = await sql.connect(config);
      await pool.request()
        .input('IdHuertasPesoCalibre', sql.Int, id)
        .query(`
          DELETE FROM APP_Calidad_HuertasPesoCalibre
          WHERE IdHuertasPesoCalibre = @IdHuertasPesoCalibre
        `);
    } catch (error) {
      console.error('Error deleting CalidadHuertasPesoCalibre:', error);
      throw new Error('Failed to delete CalidadHuertasPesoCalibre');
    }
  }
}