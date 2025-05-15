import { PalletDistribucionUpdateTemperaturaRepository } from "../../../domain/ports/PalletDistribucionUpdateTemperaturaRepository";
import { PalletDistribucionUpdateTemperatura } from "../../../domain/models/PalletDistribucionUpdateTemperatura.model";
import sql from "mssql";
import { config } from "../share/dbConfig";

export class PalletDistribucionUpdateTemperaturaRepositoryImpl implements PalletDistribucionUpdateTemperaturaRepository {
  async updateTemperatura(data: PalletDistribucionUpdateTemperatura): Promise<void> {
    try {
      const pool = await sql.connect(config);
      await pool.request()
        .input("Temperatura", sql.Decimal(14, 2), data.Temperatura)
        .input("IdPalletDistribucion", sql.Int, data.IdPalletDistribucion)
        .execute("APP_MOV_PalletsDistribucion_Update");
    } catch (error) {
      console.error("Error updating temperatura:", error);
      throw new Error("Failed to update temperatura");
    }
  }
}