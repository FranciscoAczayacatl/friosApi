export class ObtenerPalletsService {
    constructor(repo) {
        this.repo = repo;
    }
    async execute(mes, ejercicio) {
        return await this.repo.obtenerPalletsPorMesYAnio(mes, ejercicio);
    }
}
