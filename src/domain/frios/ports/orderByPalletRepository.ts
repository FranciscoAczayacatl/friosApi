import { OrderByPallet } from "../models/orderByPallet.model";

export interface OrderByPalletRepository {
  getOrderByPalletId(idPallet: number): Promise<OrderByPallet | null>;
}