import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { PalletDistribucion } from '../../../../domain/frios/models/palletDistribucion.model';
import { PalletDistribucionRepository } from '../../../../domain/frios/ports/PalletDistribucionRepository';

export class PalletDistribucionRepositoryImpl implements PalletDistribucionRepository {
  async getByPalletId(idPallet: number): Promise<PalletDistribucion[]> {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input('IdPalet', sql.Int, idPallet)
      .execute('APP_Datos_Palets_Select');

    return result.recordset as PalletDistribucion[];
  }
}