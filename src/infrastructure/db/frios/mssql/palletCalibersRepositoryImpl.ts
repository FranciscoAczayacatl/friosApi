import { PalletCalibersRepository } from "../../../../domain/frios/ports/palletCalibersRepository";
import { PalletCaliber } from "../../../../domain/frios/models/palletCalibers.model";
import sql from "mssql";
import { config } from "../../share/dbConfig";

export class PalletCalibersRepositoryImpl implements PalletCalibersRepository {
  async getByPedidoId(idPedido: number): Promise<PalletCaliber[]> {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input("IdPedido", sql.Int, idPedido)
      .execute("APP_Palets_Calibres_Select");

    return result.recordset as PalletCaliber[];
  }
}