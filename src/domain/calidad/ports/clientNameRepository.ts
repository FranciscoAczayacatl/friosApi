import { ClientName } from "../models/clientName.model";

export interface ClientNameRepository {
  getAllNames(): Promise<ClientName[]>;
}