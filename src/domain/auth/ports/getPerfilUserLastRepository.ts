import { perfilUserLast } from "../models/getPerfilUserLast.model";

export interface GetPerfilUserRepository{
  getUser():Promise<perfilUserLast[]>
}