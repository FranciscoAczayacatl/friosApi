export interface Pallet {
  IdPallet: number;
  Fecha: string; // ISO string (e.g., 2025-05-07T12:00:00Z)
  Ejercicio: number;
  IdMes: number;
  Dia: number;
  IdPedido: number;
  Pallets: number;
  Cajas: number;
  Kilogramos: number;
  Observaciones: string;
  Bloqueo: number;
  IdPartnerIfcoNo: number;
}