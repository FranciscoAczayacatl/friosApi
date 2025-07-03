import { MovControlPalletsDate } from "../models/movControlPalletsDate.model";

export interface MovControlPalletsDateSelectByIdRepository {
  selectById(idNoPallet: number): Promise<MovControlPalletsDate | null>;
}