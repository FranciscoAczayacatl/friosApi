export interface CalidadHuertasInsert {
  IdLote: number;
  Fecha: Date;
  NoRegistro: string;
  Huerta: string;
  Municipio: string;
  Cajas: number;
  Peso: number;
  VelocidadCepillado: string;
  TipoCorte: string;
  EstadoFruta: string;
  Destino: string;
  Activo: number;
  Creador: string | null;
  IdRangoPesos: number;
  Observaciones:string;
}