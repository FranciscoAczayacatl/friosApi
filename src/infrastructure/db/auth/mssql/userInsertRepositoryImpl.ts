import sql from "mssql";
import { config } from "../../share/dbConfig";
import { UserInsertDTO } from "../../../../domain/auth/models/user.model";
import { UserInsertRepository } from "../../../../domain/auth/ports/userInsertRepository";

export class UserInsertRepositoryImpl implements UserInsertRepository {
  async insertUser(user: UserInsertDTO): Promise<void> {
    const pool = await sql.connect(config);
    await pool.request()
      .input("IdUsuario", sql.Int, user.IdUsuario)
      .input("Nombre", sql.VarChar(50), user.Nombre)
      .input("Usuario", sql.VarChar(50), user.Usuario)
      .input("Contraseña", sql.VarChar(sql.MAX), user.Contraseña)
      .input("IdPerfil", sql.Int, user.IdPerfil)
      .input("Activo", sql.TinyInt, user.Activo)
      .input("Creador", sql.VarChar(50), user.Creador)
      .execute("APP_SEG_Usuarios_Insert");
  }
}