export interface CalidadImagenInsert {
  IdImagen?: number;
  IdLote: number;
  ImagenBin: Buffer;
  Nombre: string;
  Usuario: string;
  Fecha?: Date;
  IdHuertasPesoCalibre: number;
}