import { Request, Response } from 'express';
import { OpenOrderRepositoryImpl } from '../../infrastructure/db/mssql/OpenOrderRepositoryImpl';
import { GetOpenOrdersService } from '../../application/services/getOpenOrders.service';
import { DetailRequestRepositoryImpl } from '../../infrastructure/db/mssql/detailRequestRepositoryImpl';
import { GetDetailRequestService } from '../../application/services/detailRequest.service';

const openOrderRepositoryImplREPO = new OpenOrderRepositoryImpl();
const getOpenOrdersService = new GetOpenOrdersService(openOrderRepositoryImplREPO);

const detailRequestRepositoryImplREPO = new DetailRequestRepositoryImpl();
const getDetailRequestService = new GetDetailRequestService(detailRequestRepositoryImplREPO);

export const getOpenOrdersHandler = async (req: Request, res: Response) => {
  try {
    const openOrders = await getOpenOrdersService.execute();
    res.json(openOrders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching open orders', error });
  }
};