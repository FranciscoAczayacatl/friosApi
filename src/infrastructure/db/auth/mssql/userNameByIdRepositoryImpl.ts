import sql from "mssql";
import { config } from "../../share/dbConfig";
import { UserNameByIdRepository } from "../../../../domain/auth/ports/UserNameByIdRepository";
import { UserNameById } from "../../../../domain/auth/models/UserNameById.model";


export class UserNameByIdRepositoryImpl implements UserNameByIdRepository {
  async getNameById(id: number): Promise<UserNameById | null> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request()
        .input("IdUsuario", sql.Int, id)
        .execute("APP_SEG_Usuarios_SelectNombreById");

      return result.recordset[0] || null;
    } catch (error) {
      console.error("Error fetching username by ID:", error);
      throw new Error("Error fetching username by ID");
    }
  }
}