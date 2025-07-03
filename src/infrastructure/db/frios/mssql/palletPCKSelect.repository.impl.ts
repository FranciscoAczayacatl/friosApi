import sql from 'mssql';
import { PalletPCKSelectRepository } from '../../../../domain/frios/ports/palletPCKSelect.repository';
import { PalletPCKSelectDTO } from '../../../../domain/frios/models/palletPCKSelect.dto';
import { config } from '../../share/dbConfig';

export class PalletPCKSelectRepositoryImpl implements PalletPCKSelectRepository {
  async select(idPallet: number): Promise<PalletPCKSelectDTO[]> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request()
        .input('IdPallet', sql.Int, idPallet)
        .execute('APP_MOV_Pallets_PCK_Select');

      return result.recordset as PalletPCKSelectDTO[];
    } catch (error) {
      console.error('Error fetching pallet PCK select data:', error);
      throw new Error('Failed to fetch pallet PCK data');
    }
  }
}