import { detailRequestR } from '../models/detailRequest.model';

export interface detailRequestRepository {
  getByPedidoId(idPedido: number): Promise<detailRequestR[]>;
}