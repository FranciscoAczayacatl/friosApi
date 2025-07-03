import { OpenOrder } from '../../../domain/frios/models/OpenOrder';
import { OpenOrderRepository } from '../../../domain/frios/ports/openOrderRepository';

export class GetOpenOrdersService {
  constructor(private repository: OpenOrderRepository) {}

  async execute(): Promise<OpenOrder[]> {
    return await this.repository.getOpenOrders();
  }
}