export class GetOrderByPalletIdService {
    constructor(repo) {
        this.repo = repo;
    }
    async execute(idPallet) {
        return await this.repo.getOrderByPalletId(idPallet);
    }
}
