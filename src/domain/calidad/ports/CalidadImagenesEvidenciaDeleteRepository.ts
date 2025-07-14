export interface CalidadImagenesEvidenciaDeleteRepository {
  deleteById(id: number): Promise<void>;
}