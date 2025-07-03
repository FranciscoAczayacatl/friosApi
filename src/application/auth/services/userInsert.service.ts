import { UserInsertRepository } from "../../../domain/auth/ports/userInsertRepository";
import { UserInsertDTO } from "../../../domain/auth/models/user.model";

export class UserInsertService {
  constructor(private repository: UserInsertRepository) {}

  async execute(user: UserInsertDTO): Promise<void> {
    await this.repository.insertUser(user);
  }
}