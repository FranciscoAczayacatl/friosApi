export interface MovControlPalletsUpdateFacturadoRepository {
  updateFacturado(idNoPallet: number,Facturado:number): Promise<void>;
}