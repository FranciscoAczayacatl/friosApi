import { MovPalletsDetalleSearchRepository } from "../../../domain/ports/movPalletsDetalleSearch.repository";
import { MovPalletsDetalleSearchResult } from "../../../domain/models/movPalletsDetalleSearch.model";
import sql from "mssql";
import { config } from "../share/dbConfig";

export class MovPalletsDetalleSearchRepositoryImpl implements MovPalletsDetalleSearchRepository {
  async search(idNoPallet: number, idPallet: number): Promise<MovPalletsDetalleSearchResult | null> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request()
        .input("IdNoPallet", sql.Int, idNoPallet)
        .input("IdPallet", sql.Int, idPallet)
        .execute("APP_MOV_PalletsDetalle_Serach");

      if (result.recordset.length > 0) {
        return result.recordset[0] as MovPalletsDetalleSearchResult;
      }

      return null;
    } catch (error) {
      console.error("Error executing APP_MOV_PalletsDetalle_Serach:", error);
      throw new Error("Failed to search in MOV_PalletsDetalle");
    }
  }
}