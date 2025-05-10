export class ObtenerPalletDistribucionService {
    constructor(repo) {
        this.repo = repo;
    }
    async execute(idPallet) {
        return await this.repo.getByPalletId(idPallet);
    }
}
