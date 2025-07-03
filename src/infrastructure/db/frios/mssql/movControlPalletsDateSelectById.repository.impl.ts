import { MovControlPalletsDateSelectByIdRepository } from "../../../../domain/frios/ports/movControlPalletsDateSelectById.repository";
import { MovControlPalletsDate } from "../../../../domain/frios/models/movControlPalletsDate.model";
import sql from "mssql";
import { config } from "../../share/dbConfig";

export class MovControlPalletsDateSelectByIdRepositoryImpl implements MovControlPalletsDateSelectByIdRepository {
  async selectById(idNoPallet: number): Promise<MovControlPalletsDate | null> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request()
        .input("IdNoPallet", sql.Int, idNoPallet)
        .execute("APP_MOV_ControlPallets_Date_Select");

      if (result.recordset.length > 0) {
        return result.recordset[0] as MovControlPalletsDate;
      }

      return null;
    } catch (error) {
      console.error("Error fetching control pallet date:", error);
      throw new Error("Database error");
    }
  }
}