import { PalletPCKSelectDTO } from '../models/palletPCKSelect.dto';

export interface PalletPCKSelectRepository {
  select(idPallet: number): Promise<PalletPCKSelectDTO[]>;
}