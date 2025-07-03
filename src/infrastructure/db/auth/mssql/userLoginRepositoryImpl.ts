import { UserLoginRepository } from "../../../../domain/auth/ports/userLoginRepository";
import sql from "mssql";
import { config } from "../../share/dbConfig";

export class UserLoginRepositoryImpl implements UserLoginRepository {
  async validateUser(username: string): Promise<{ Usuario: string; Contraseña: string; IdPerfil: number; Activo: number; IdUsuario:number } | null> {
    try {
      const pool = await sql.connect(config);
      const result = await pool
        .request()
        .input("Usuario", sql.VarChar, username)
        .query(`
          SELECT IdUsuario, Usuario, Contraseña, IdPerfil, Activo
          FROM TTS_App.dbo.APP_SEG_Usuarios
          WHERE Usuario = @Usuario
        `);

      return result.recordset[0] ?? null;
    } catch (error) {
      console.error("Error validating user:", error);
      throw new Error("Failed to validate user");
    }
  }
}