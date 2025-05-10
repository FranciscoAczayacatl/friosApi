export class GetPalletCalibersByPedidoService {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(idPedido) {
        return await this.repository.getByPedidoId(idPedido);
    }
}
