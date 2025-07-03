import { UserLogin } from "../models/userLogin.model";

export interface UserLoginRepository {
  validateUser(username: string): Promise<{ Usuario: string; Contraseña: string; IdPerfil: number; Activo: number, IdUsuario:number} | null>;
}