import { MovControlPalletsUpdateFacturadoRepository } from "../../../domain/ports/movControlPalletsUpdateFacturado.repository";
import sql from "mssql";
import { config } from "../share/dbConfig";

export class MovControlPalletsUpdateFacturadoRepositoryImpl implements MovControlPalletsUpdateFacturadoRepository {
  async updateFacturado(idNoPallet: number, Facturado:number): Promise<void> {
    try {
      const pool = await sql.connect(config);
      await pool.request()
        .input("IdNoPallet", sql.Int, idNoPallet)
        .input("Facturado", sql.Int, Facturado)
        .execute("APP_MOV_ControlPallets_Update");
    } catch (error) {
      console.error("Error executing APP_MOV_ControlPallets_Update:", error);
      throw new Error("Failed to update facturado in MOV_ControlPallets");
    }
  }
}