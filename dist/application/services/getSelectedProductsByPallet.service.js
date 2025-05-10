export class GetSelectedProductsByPalletService {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(idPallet) {
        return await this.repository.getByPalletId(idPallet);
    }
}
