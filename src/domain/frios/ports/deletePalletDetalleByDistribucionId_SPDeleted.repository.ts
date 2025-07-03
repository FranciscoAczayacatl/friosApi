export interface DeletePalletDetalleByDistribucionId_SPDeletedRepository {
  deleteByDistribucionId(id: number): Promise<void>;
}