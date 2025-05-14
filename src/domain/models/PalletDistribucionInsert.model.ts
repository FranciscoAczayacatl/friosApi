export interface PalletDistribucionInsert {
  IdPalletDistribucion: number;
  IdPallet: number;
  Identificador: string;
  NumeroPallet: number;
  Cajas: number;
  Kilogramos: number;
  Temperatura: number;
  Termografo: number;
  FechaOriginal: string;
  FechaPropuesta: string;
}