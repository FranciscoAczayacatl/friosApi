import { PalletCountRepository } from "../../../../domain/frios/ports/palletCountRepository";
import { PalletCount } from "../../../../domain/frios/models/palletCount.model";
import sql from "mssql";
import { config } from "../../share/dbConfig";

export class PalletCountRepositoryImpl implements PalletCountRepository {
  async getCountByPalletId(idPallet: number): Promise<PalletCount[]> {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input("IdPallet", sql.Int, idPallet)
      .execute("APP_Conteo_Total_Pallets_Select");

    return result.recordset as PalletCount[];
  }
}