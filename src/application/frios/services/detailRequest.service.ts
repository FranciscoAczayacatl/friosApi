import { detailRequestRepository } from '../../../domain/frios/ports/detailRequestRepository';
import { detailRequestR } from '../../../domain/frios/models/detailRequest.model';

export class GetDetailRequestService {
  constructor(private repo: detailRequestRepository) {}

  async execute(idPedido: number): Promise<detailRequestR[]> {
    return await this.repo.getByPedidoId(idPedido);
  }
}