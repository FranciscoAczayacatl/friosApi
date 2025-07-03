import { PalletDistribucionSelectByIdRepository } from "../../../../domain/frios/ports/PalletDistribucionSelectByIdRepository";
import { PalletDistribucions } from "../../../../domain/frios/models/PalletDistribucion";
import sql from "mssql";
import { config } from "../../share/dbConfig";

export class PalletDistribucionSelectByIdRepositoryImpl implements PalletDistribucionSelectByIdRepository {
  async selectByIdsd(id: number): Promise<PalletDistribucions | null> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request()
        .input("IdPalletDistribucion", sql.Int, id)
        .execute("APP_Id_Pallet_Distribucion_Select");

      if (result.recordset.length > 0) {
        return result.recordset[0] as PalletDistribucions;
      }

      return null;
    } catch (error) {
      console.error("Error selecting PalletDistribucion by ID:", error);
      throw new Error("Failed to retrieve PalletDistribucion");
    }
  }
}