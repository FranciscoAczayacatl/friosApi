export interface PodEmbarqueInsert {
  Id_Embarque: number;
  Id_Realizo_embarque: number;
  Id_Autorizo_embarque: number;
  Fecha: string; // formato ISO: "YYYY-MM-DDTHH:mm:ss"
  Hora_Inicio: string;
  Hora_Fin: string;
  Hora_Despacho: string;
  Caja_Limpia: string;
  Caja_Sanitizada: string;
  Equipo_Funcionamiento: string;
  Usuario: string;
}