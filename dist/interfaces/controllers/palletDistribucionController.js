import { PalletDistribucionRepositoryImpl } from '../../infrastructure/db/mssql/PalletDistribucionRepositoryImpl';
import { ObtenerPalletDistribucionService } from '../../application/services/palletDistribucion.service';
const repo = new PalletDistribucionRepositoryImpl();
const service = new ObtenerPalletDistribucionService(repo);
export const obtenerPalletDistribucionHandler = async (req, res) => {
    const idPallet = parseInt(req.query.idPallet);
    if (isNaN(idPallet)) {
        return res.status(400).json({ message: 'Parámetro idPallet inválido' });
    }
    try {
        const datos = await service.execute(idPallet);
        res.json(datos);
    }
    catch (error) {
        console.error('Error al obtener la distribución del pallet:', error);
        res.status(500).json({ message: 'Error interno al obtener datos del pallet' });
    }
};
