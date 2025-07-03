import { GetPerfilUserRepository } from '../../../domain/auth/ports/getPerfilUserLastRepository';
import { perfilUserLast } from '../../../domain/auth/models/getPerfilUserLast.model';

export class GetPerfilUserService{
  constructor(private repository: GetPerfilUserRepository){}

  async execute(): Promise<perfilUserLast[]>{
    return await this.repository.getUser();
  }

}