import { palletDetailInsert } from "../../../../domain/frios/models/InsertPalletsDetail.model";
import { palletDetailInsertRepository } from "../../../../domain/frios/ports/paletDetailInsertRepository";
import sql from 'mssql';
import { config } from '../../share/dbConfig';



export class PalletDetailInsertRepositoryImpl implements palletDetailInsertRepository{
  async insertPalletDetail(pallet: palletDetailInsert): Promise<void>{
    try {
      const pool = await sql.connect(config);
      await pool.request()
        .input('IdDetallePallet', sql.Int, pallet.IdDetallePallet)
        .input('IdPalletDistribucion', sql.Int, pallet.IdPalletDistribucion)
        .input('IdPallet', sql.Int, pallet.IdPallet)
        .input('IdNoPallet', sql.Int, pallet.IdNoPallet)
        .input('IdLote', sql.Int, pallet.IdLote)
        .input('IdProducto', sql.Int, pallet.IdProducto)
        .input('Pallets', sql.Decimal(14, 4), pallet.Pallets)
        .input('Cajas', sql.Decimal(14, 2), pallet.Cajas)
        .input('Kilogramos', sql.Decimal(14, 2), pallet.Kilogramos)
        .execute('APP_MOV_PalletsDetalle_Insert')

    } catch (error) {
      console.log('====================================');
      console.log('entro');
      console.log('====================================');
      console.error('Error executing APP_Pallet_Insert:', error);
      throw new Error('Failed to insert pallet');
    }
  }
}