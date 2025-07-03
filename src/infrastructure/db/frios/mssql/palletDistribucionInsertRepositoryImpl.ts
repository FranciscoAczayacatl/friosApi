import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { PalletDistribucionInsert } from '../../../../domain/frios/models/PalletDistribucionInsert.model';
import { PalletDistribucionInsertRepository } from '../../../../domain/frios/ports/palletDistribucionInsertRepository';

export class PalletDistribucionInsertRepositoryImpl implements PalletDistribucionInsertRepository {
  async insert(data: PalletDistribucionInsert): Promise<void> {
    try {
      const pool = await sql.connect(config);
      await pool.request()
        .input('IdPalletDistribucion', sql.Int, data.IdPalletDistribucion)
        .input('IdPallet', sql.Int, data.IdPallet)
        .input('Identificador', sql.VarChar(10), data.Identificador)
        .input('NumeroPallet', sql.SmallInt, data.NumeroPallet)
        .input('Cajas', sql.Decimal(14, 2), data.Cajas)
        .input('Kilogramos', sql.Decimal(14, 2), data.Kilogramos)
        .input('Temperatura', sql.Decimal(14, 2), data.Temperatura)
        .input('Termografo', sql.TinyInt, data.Termografo)
        .input('FechaOriginal', sql.DateTime, data.FechaOriginal)
        .input('FechaPropuesta', sql.DateTime, data.FechaPropuesta)
        .execute('APP_MOV_PalletsDistribucion_Insert');
    } catch (error) {
      console.error('Error inserting Pallet Distribucion:', error);
      throw new Error('Failed to insert Pallet Distribucion');
    }
  }
}