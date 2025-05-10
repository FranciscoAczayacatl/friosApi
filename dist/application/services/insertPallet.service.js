export class InsertPalletService {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(pallet) {
        await this.repository.insertPallet(pallet);
    }
}
