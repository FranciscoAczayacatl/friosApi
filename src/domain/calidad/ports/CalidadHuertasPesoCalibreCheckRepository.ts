export interface CalidadHuertasPesoCalibreCheckRepository {
  existsByLoteAndCalibre(idLote: number, calibrePattern: string, marca: string): Promise<boolean>;
}