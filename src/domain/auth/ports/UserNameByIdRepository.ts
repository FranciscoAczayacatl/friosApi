import { UserNameById } from "../models/UserNameById.model";

export interface UserNameByIdRepository {
  getNameById(id: number): Promise<UserNameById | null>;
}