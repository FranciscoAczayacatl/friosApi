import { ControlPalletsExistsByIdAndMesRepository } from "../../../../domain/frios/ports/controlPalletsByIdAndMesRepository";
import { ControlPalletsByIdAndMes } from "../../../../domain/frios/models/controlPalletsByIdAndMes.model";
import sql from "mssql";
import { config } from "../../share/dbConfig";

export class ControlPalletsExistsByIdAndMesRepositoryImpl implements ControlPalletsExistsByIdAndMesRepository {
  async existsByIdAndMes(idNoPallet: number, idMes: number): Promise<boolean> {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input("IdNoPallet", sql.Int, idNoPallet)
      .input("IdMes", sql.Int, idMes)
      .query(`
        SELECT 1 AS ExistsResult 
        FROM TTS.dbo.MOV_ControlPallets 
        WHERE IdNoPallet = @IdNoPallet AND IdMes = @IdMes
      `);

    return result.recordset.length > 0;
  }
}