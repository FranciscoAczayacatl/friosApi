import { OpenOrder } from '../../domain/models/OpenOrder';
import { OpenOrderRepository } from '../../domain/ports/openOrderRepository';

export class GetOpenOrdersService {
  constructor(private repository: OpenOrderRepository) {}

  async execute(): Promise<OpenOrder[]> {
    return await this.repository.getOpenOrders();
  }
}