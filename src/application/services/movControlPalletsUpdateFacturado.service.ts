import { MovControlPalletsUpdateFacturadoRepository } from "../../domain/ports/movControlPalletsUpdateFacturado.repository";

export class MovControlPalletsUpdateFacturadoService {
  constructor(private repository: MovControlPalletsUpdateFacturadoRepository) {}

  async execute(idNoPallet: number, Facturado:number): Promise<void> {
    await this.repository.updateFacturado(idNoPallet, Facturado);
  }
}