import { DeletePalletDetalleByDistribucionId_SPDeletedRepository } from "../../../../domain/frios/ports/deletePalletDetalleByDistribucionId_SPDeleted.repository";
import sql from "mssql";
import { config } from "../../share/dbConfig";

export class DeletePalletDetalleByDistribucionId_SPDeletedRepositoryImpl implements DeletePalletDetalleByDistribucionId_SPDeletedRepository {
  async deleteByDistribucionId(id: number): Promise<void> {
    try {
      const pool = await sql.connect(config);
      await pool.request()
        .input("IdPalletDistribucion", sql.Int, id)
        .execute("APP_MOV_PalletsDetalle_Deleted");
    } catch (error) {
      console.error("Error deleting pallet detalle:", error);
      throw new Error("Failed to delete pallet detalle");
    }
  }
}