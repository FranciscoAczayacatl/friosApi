import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { CalidadImagenesEvidenciaDeleteRepository } from '../../../../domain/calidad/ports/CalidadImagenesEvidenciaDeleteRepository';

export class CalidadImagenesEvidenciaDeleteRepositoryImpl
  implements CalidadImagenesEvidenciaDeleteRepository
{
  async deleteById(id: number): Promise<void> {
    try {
      const pool = await sql.connect(config);
      await pool.request()
        .input('IdImagenes', sql.Int, id)
        .query(`
          DELETE FROM TTS_App.dbo.APP_Calida_ImagenesEvidencia
          WHERE IdImagenes = @IdImagenes
        `);
    } catch (error) {
      console.error('Error deleting imagen evidencia:', error);
      throw new Error('Failed to delete imagen evidencia');
    }
  }
}