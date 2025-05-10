import { AgriculturalBoxRepositoryImpl } from '../../infrastructure/db/mssql/AgriculturalBoxRepositoryImpl';
import { GetAgriculturalBoxesService } from '../../application/services/getAgriculturalBoxes.service';
const repo = new AgriculturalBoxRepositoryImpl();
const service = new GetAgriculturalBoxesService(repo);
export const getAgriculturalBoxesHandler = async (req, res) => {
    try {
        const boxes = await service.execute();
        res.json(boxes);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching agricultural boxes', error });
    }
};
