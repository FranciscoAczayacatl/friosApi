export class GetDetailRequestService {
    constructor(repo) {
        this.repo = repo;
    }
    async execute(idPedido) {
        return await this.repo.getByPedidoId(idPedido);
    }
}
