import { PalletsDistribucionDeleteByIdRepository } from "../../../domain/ports/palletsDistribucionDeleteById.repository";
import sql from "mssql";
import { config } from "../share/dbConfig";

export class PalletsDistribucionDeleteByIdRepositoryImpl implements PalletsDistribucionDeleteByIdRepository {
  async deleteById(id: number): Promise<void> {
    try {
      const pool = await sql.connect(config);
      await pool.request()
        .input("IdPalletDistribucion", sql.Int, id)
        .execute("APP_MOV_PalletsDistribucion_Deleted");
    } catch (error) {
      console.error("Error deleting PalletsDistribucion by ID:", error);
      throw new Error("Failed to delete PalletsDistribucion");
    }
  }
}