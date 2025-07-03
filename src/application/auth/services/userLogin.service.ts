import bcrypt from "bcrypt";
import { UserLogin } from "../../../domain/auth/models/userLogin.model";
import { UserLoginRepository } from "../../../domain/auth/ports/userLoginRepository";


export class UserLoginService {
  constructor(private repository: UserLoginRepository) {}

  async execute(data: UserLogin): Promise<{ valid: boolean; IdPerfil?: number; Active?: number; Id?: number}> {
    const user = await this.repository.validateUser(data.Usuario);
    if (!user) return { valid: false };
    console.log('====================================');
    console.log(user);
    console.log('====================================');
    const match = await bcrypt.compare(data.Contraseña, user.Contraseña);
    return match ? { valid: true, IdPerfil: user.IdPerfil, Active: user.Activo, Id: user.IdUsuario} : { valid: false };
  }
}