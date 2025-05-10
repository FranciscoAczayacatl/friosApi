export class GetLastPalletService {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(month, year) {
        return await this.repository.getLastPalletByMonthAndYear(month, year);
    }
}
