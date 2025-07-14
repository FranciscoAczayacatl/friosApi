
import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { ImageEvidenceRepository } from '../../../../domain/calidad/ports/imageEvidenceRepository';
import { ImageEvidenceModel } from '../../../../domain/calidad/models/imageEvidenceModel';

export class ImageEvidenceRepositoryImpl implements ImageEvidenceRepository {
  async getImagesByCalibreId(id: number): Promise<ImageEvidenceModel[]> {
    try {
      const pool = await sql.connect(config);
      const result = await pool
        .request()
        .input('IdHuertasPesoCalibre', sql.Int, id)
        .query(`
          SELECT * FROM [TTS_App].[dbo].[APP_Calida_ImagenesEvidencia]
          WHERE IdHuertasPesoCalibre = @IdHuertasPesoCalibre
        `);
      return result.recordset;
    } catch (error) {
      console.error('Error getting image evidence by calibre ID:', error);
      throw error;
    }
  }
}