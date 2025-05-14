import { DeletePalletDetalleByDistribucionId_SPDeletedRepository} from "../../domain/ports/deletePalletDetalleByDistribucionId_SPDeleted.repository";

export class PalletsDetalleDeleteByDistribucionIdService {
  constructor(private repository: DeletePalletDetalleByDistribucionId_SPDeletedRepository) {}

  async execute(id: number): Promise<void> {
    await this.repository.deleteByDistribucionId(id);
  }
}