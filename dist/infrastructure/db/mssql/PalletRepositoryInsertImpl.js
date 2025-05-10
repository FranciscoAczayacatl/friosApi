import sql from 'mssql';
import { config } from '../share/dbConfig';
export class PalletRepositoryImpl {
    async insertPallet(pallet) {
        try {
            const pool = await sql.connect(config);
            await pool.request()
                .input('IdPallet', sql.Int, pallet.IdPallet)
                .input('Fecha', sql.DateTime, pallet.Fecha)
                .input('Ejercicio', sql.SmallInt, pallet.Ejercicio)
                .input('IdMes', sql.TinyInt, pallet.IdMes)
                .input('Dia', sql.TinyInt, pallet.Dia)
                .input('IdPedido', sql.Int, pallet.IdPedido)
                .input('Pallets', sql.Decimal(14, 2), pallet.Pallets)
                .input('Cajas', sql.Decimal(14, 2), pallet.Cajas)
                .input('Kilogramos', sql.Decimal(14, 2), pallet.Kilogramos)
                .input('Observaciones', sql.VarChar(255), pallet.Observaciones)
                .input('Bloqueo', sql.TinyInt, pallet.Bloqueo)
                .input('IdPartnerIfcoNo', sql.TinyInt, pallet.IdPartnerIfcoNo)
                .execute('APP_Pallet_Insert');
        }
        catch (error) {
            console.error('Error executing APP_Pallet_Insert:', error);
            throw new Error('Failed to insert pallet');
        }
    }
}
