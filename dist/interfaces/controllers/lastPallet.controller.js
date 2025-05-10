import { LastPalletRepositoryImpl } from '../../infrastructure/db/mssql/LastPalletRepositoryImpl';
import { GetLastPalletService } from '../../application/services/getLastPallet.service';
const repo = new LastPalletRepositoryImpl();
const service = new GetLastPalletService(repo);
export const getLastPalletHandler = async (req, res) => {
    console.log('entro');
    console.log(req.query);
    const month = parseInt(req.query.month);
    const year = parseInt(req.query.year);
    // Verifica los parámetros recibidos
    console.log(`Received parameters: month=${month}, year=${year}`);
    if (isNaN(month) || isNaN(year)) {
        return res.status(400).json({ message: 'Invalid parameters' });
    }
    try {
        const lastPallet = await service.execute(month, year);
        console.log('Last Pallet:', lastPallet); // Asegúrate de que los datos se reciban correctamente
        if (!lastPallet) {
            return res.status(404).json({ message: 'No pallet found' });
        }
        res.json(lastPallet);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error fetching last pallet', error });
    }
};
