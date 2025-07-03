import { MovPalletsDetalleSearchRepository } from "../../../domain/frios/ports/movPalletsDetalleSearch.repository";

export class MovPalletsDetalleSearchService {
  constructor(private repository: MovPalletsDetalleSearchRepository) {}

  async execute(idNoPallet: number, idPallet: number): Promise<boolean> {
    const result = await this.repository.search(idNoPallet, idPallet);
    return result !== null;
  }
}