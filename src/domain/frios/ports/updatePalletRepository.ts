import { UpdatePalletDTO } from '../models/updatePallet.dto';

export interface UpdatePalletRepository {
  updatePallet(data: UpdatePalletDTO): Promise<void>;
}