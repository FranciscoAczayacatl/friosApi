import { PalletCalibersRepositoryImpl } from "../../infrastructure/db/mssql/palletCalibersRepositoryImpl";
import { GetPalletCalibersByPedidoService } from "../../application/services/getPalletCalibersByPedido.service";
const repo = new PalletCalibersRepositoryImpl();
const service = new GetPalletCalibersByPedidoService(repo);
export const getPalletCalibersByPedidoHandler = async (req, res) => {
    const idPedido = parseInt(req.params.idPedido);
    if (isNaN(idPedido)) {
        return res.status(400).json({ message: "IdPedido inválido" });
    }
    try {
        const data = await service.execute(idPedido);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener calibres de pallets", error });
    }
};
