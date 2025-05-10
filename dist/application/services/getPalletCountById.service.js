export class GetPalletCountByIdService {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(idPallet) {
        return await this.repository.getCountByPalletId(idPallet);
    }
}
