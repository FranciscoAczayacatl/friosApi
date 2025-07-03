import { Request, Response } from 'express';
import { CalidadHuertasPesoCalibreInsertRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadHuertasPesoCalibreInsertRepositoryImpl';
import { CalidadHuertasPesoCalibreInsertService } from '../../../application/calidad/services/calidadHuertasPesoCalibreInsert.service';
import { CalidadPorcentajeGeneralDanosInsertRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadPorcentajeGeneralDanosInsertRepositoryImpl';
import { CalidadPorcentajeGeneralDanosInsertService } from '../../../application/calidad/services/calidadPorcentajeGeneralDanosInsert.service';
import { CalidadHuertasPesoCalibreCheckRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadHuertasPesoCalibreCheckRepositoryImpl';
import { CalidadHuertasPesoCalibreCheckService } from '../../../application/calidad/services/calidadHuertasPesoCalibreCheck.service';

export const calidadHuertasPesoCalibreInsertHandler = async (req: Request, res: Response) => {
  const { IdLote, Peso, Calibre, Marca } = req.body;

  if (!IdLote || !Peso || !Calibre || !Marca) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const repository = new CalidadHuertasPesoCalibreInsertRepositoryImpl();
  const service = new CalidadHuertasPesoCalibreInsertService(repository);
    const CalidadHuertasPesoCalibreCheckRepositoryImplrepository = new CalidadHuertasPesoCalibreCheckRepositoryImpl();
    const  calidadHuertasPesoCalibreCheckService = new CalidadHuertasPesoCalibreCheckService(CalidadHuertasPesoCalibreCheckRepositoryImplrepository);

  const CalidadPorcentajeGeneralDanosInsertServicerepository = new CalidadPorcentajeGeneralDanosInsertRepositoryImpl();
    const calidadPorcentajeGeneralDanosInsertService = new CalidadPorcentajeGeneralDanosInsertService(CalidadPorcentajeGeneralDanosInsertServicerepository );


    

  try {
    const exists = await calidadHuertasPesoCalibreCheckService.execute(IdLote, Calibre, Marca);
  console.log(exists);
  
    if(exists){
      return res.status(400).json({ message: 'existe' });
    }
    const result = await service.execute({ IdLote, Peso, Calibre, Marca });
    console.log(result);
    const data ={ 
      IdLote:result.IdLote, 
      Trips:'', 
      Rona: '', 
      Golpe:'', 
      Rozadura:'', 
      Varicela:'', 
      Clavo:'', 
      Alga:'', 
      Escama:'', 
      Granizo:'', 
      Gusano:'', 
      Quemadura:'', 
      Sunblotch:'',
      IdHuertasPesoCalibre: result.IdHuertasPesoCalibre || 0,
    }
    await calidadPorcentajeGeneralDanosInsertService.execute(data);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error inserting CalidadHuertasPesoCalibre:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};