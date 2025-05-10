import { PalletRepositoryImpl } from '../../infrastructure/db/mssql/PalletRepositoryImpl';
import { ObtenerPalletsService } from '../../application/services/movementsOfTheMonth.services';
const repo = new PalletRepositoryImpl();
const service = new ObtenerPalletsService(repo);
export const obtenerPalletsHandler = async (req, res) => {
    const mes = parseInt(req.query.mes);
    const ejercicio = parseInt(req.query.ejercicio);
    if (isNaN(mes) || isNaN(ejercicio)) {
        return res.status(400).json({ message: 'Parámetros inválidos' });
    }
    try {
        const pallets = await service.execute(mes, ejercicio);
        const palletsConFacturado = pallets.map((pallet) => ({
            ...pallet,
            facturado: pallet.IdFacturaPallet ? 'Si' : 'No',
        }));
        res.json(palletsConFacturado);
    }
    catch (error) {
        console.error('Error al obtener pallets:', error);
        res.status(500).json({ message: 'Error interno al obtener pallets' });
    }
};
