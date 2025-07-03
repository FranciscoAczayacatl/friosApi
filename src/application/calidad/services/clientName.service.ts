import { ClientNameRepository } from "../../../domain/calidad/ports/clientNameRepository";
import { ClientName } from "../../../domain/calidad/models/clientName.model";

export class ClientNameService {
  constructor(private repository: ClientNameRepository) {}

  async execute(): Promise<ClientName[]> {
    return await this.repository.getAllNames();
  }
}