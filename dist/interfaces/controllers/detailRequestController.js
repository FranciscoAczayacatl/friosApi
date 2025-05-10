import { DetailRequestRepositoryImpl } from '../../infrastructure/db/mssql/detailRequestRepositoryImpl';
import { GetDetailRequestService } from '../../application/services/detailRequest.service';
const repo = new DetailRequestRepositoryImpl();
const service = new GetDetailRequestService(repo);
export const GetdetailRequestHandler = async (req, res) => {
    const idPedido = parseInt(req.query.idPedido);
    if (isNaN(idPedido)) {
        return res.status(400).json({ message: 'Parámetro idPedido inválido' });
    }
    try {
        const detalles = await service.execute(idPedido);
        res.json(detalles);
    }
    catch (error) {
        console.error('Error al obtener detalles del pedido:', error);
        res.status(500).json({ message: 'Error interno al obtener detalles del pedido' });
    }
};
