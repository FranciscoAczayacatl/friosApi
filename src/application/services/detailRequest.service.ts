import { detailRequestRepository } from '../../domain/ports/detailRequestRepository';
import { detailRequestR } from '../../domain/models/detailRequest.model';

export class GetDetailRequestService {
  constructor(private repo: detailRequestRepository) {}

  async execute(idPedido: number): Promise<detailRequestR[]> {
    return await this.repo.getByPedidoId(idPedido);
  }
}