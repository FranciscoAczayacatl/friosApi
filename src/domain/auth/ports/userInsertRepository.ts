import { UserInsertDTO } from "../models/user.model";

export interface UserInsertRepository {
  insertUser(user: UserInsertDTO): Promise<void>;
}