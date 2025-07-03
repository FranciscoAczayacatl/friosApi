import { UserNameById } from "../../../domain/auth/models/UserNameById.model";
import { UserNameByIdRepository } from "../../../domain/auth/ports/UserNameByIdRepository";

export class UserNameByIdService {
  constructor(private repository: UserNameByIdRepository) {}

  async execute(id: number): Promise<UserNameById | null> {
    return this.repository.getNameById(id);
  }
}