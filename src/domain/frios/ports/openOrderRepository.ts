import { OpenOrder } from '../models/OpenOrder';

export interface OpenOrderRepository {
  getOpenOrders(): Promise<OpenOrder[]>;
}