import { MovPalletsDetalleSearchResult } from "../models/movPalletsDetalleSearch.model";

export interface MovPalletsDetalleSearchRepository {
  search(idNoPallet: number, idPallet: number): Promise<MovPalletsDetalleSearchResult | null>;
}