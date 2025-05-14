export interface PalletsDistribucionDeleteByIdRepository {
  deleteById(id: number): Promise<void>;
}