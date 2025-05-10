export class GetOpenOrdersService {
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        return await this.repository.getOpenOrders();
    }
}
