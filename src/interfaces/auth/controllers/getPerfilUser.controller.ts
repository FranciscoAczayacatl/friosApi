import { GetPerfilUserLastImpl } from "../../../infrastructure/db/auth/mssql/getPerfilUserLastRepositoryImlp";
import { GetPerfilUserService } from '../../../application/auth/services/getPerfilUser.service';
import { Request, Response } from "express";

const REPO = new GetPerfilUserLastImpl();
const service = new GetPerfilUserService(REPO)

export const getPerfilUserHandler = async (req: Request, res:Response) =>{
  try {
    const perfil = await service.execute();
    res.json(perfil);
  } catch (error) {
    res.status(500).json({message:'Error fetching Perfil user', error});
  }
}