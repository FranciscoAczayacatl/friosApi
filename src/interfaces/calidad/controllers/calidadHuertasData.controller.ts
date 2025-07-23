import { Request, Response } from 'express';
import { CalidadHuertasDataRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadHuertasDataRepositoryImpl';
import { CalidadHuertasDataService } from '../../../application/calidad/services/calidadHuertasData.service';
import { LotesAbiertosRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/lotesAbiertosRepositoryImpl';
import { GetLotesAbiertosService } from '../../../application/calidad/services/getLotesAbiertos.service';
import { CalidadHuertasInsertRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadHuertasInsertRepositoryImpl';
import { CalidadHuertasInsertService } from '../../../application/calidad/services/calidadHuertasInsert.service';
import { UserNameByIdRepositoryImpl } from '../../../infrastructure/db/auth/mssql/userNameByIdRepositoryImpl';
import { UserNameByIdService } from '../../../application/auth/services/userNameById.service';
import { LotesAbiertos } from '../../../domain/calidad/models/lotesAbiertos.model';
import { CalidadHuertasData } from '../../../domain/calidad/models/calidadHuertasData.model';
import { QualityHuertaRecentRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/qualityHuertaRecentRepositoryImpl';
import { QualityHuertaRecentService } from '../../../application/calidad/services/qualityHuertaRecent.service';
import { LoteLineaProduccionSelectByIdRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/loteLineaProduccionSelectByIdRepositoryImpl';
import { LoteLineaProduccionSelectByIdService } from '../../../application/calidad/services/loteLineaProduccionSelectById.service';
import { CalidadRangoPesosSelectTodayRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadRangoPesosSelectTodayRepositoryImpl';
import { CalidadRangoPesosSelectTodayService } from '../../../application/calidad/services/calidadRangoPesosSelectToday.service';
import { CalidadRangoPesosInsertRepositoryImpl } from '../../../infrastructure/db/calidad/mssql/calidadRangoPesosInsertRepositoryImpl';
import { CalidadRangoPesosInsertService } from '../../../application/calidad/services/calidadRangoPesosInsert.service';

const repo = new CalidadHuertasDataRepositoryImpl();
const service = new CalidadHuertasDataService(repo);

const LotesAbiertosRepositoryImplrepo = new LotesAbiertosRepositoryImpl();
const getLotesAbiertosService= new GetLotesAbiertosService(LotesAbiertosRepositoryImplrepo );

const CalidadHuertasInsertRepositoryImplrepository = new CalidadHuertasInsertRepositoryImpl();
const calidadHuertasInsertService = new CalidadHuertasInsertService(CalidadHuertasInsertRepositoryImplrepository);

const UserNameByIdRepositoryImplrepository = new UserNameByIdRepositoryImpl();
const userNameByIdService = new UserNameByIdService(UserNameByIdRepositoryImplrepository);

const QualityHuertaRecentServicerepo = new QualityHuertaRecentRepositoryImpl();
const qualityHuertaRecentService = new QualityHuertaRecentService(QualityHuertaRecentServicerepo);

const loteLineaProduccionSelectByIdRepositoryImplrepository = new LoteLineaProduccionSelectByIdRepositoryImpl();
const loteLineaProduccionSelectByIdService = new LoteLineaProduccionSelectByIdService(loteLineaProduccionSelectByIdRepositoryImplrepository);

const CalidadRangoPesosSelectTodayRepositoryImplrepository = new CalidadRangoPesosSelectTodayRepositoryImpl();
const calidadRangoPesosSelectTodayService = new CalidadRangoPesosSelectTodayService(CalidadRangoPesosSelectTodayRepositoryImplrepository);

  const CalidadRangoPesosInsertRepositoryImplrepository = new CalidadRangoPesosInsertRepositoryImpl();
  const calidadRangoPesosInsertService = new CalidadRangoPesosInsertService(CalidadRangoPesosInsertRepositoryImplrepository);



export const getCalidadHuertasDataHandler = async (req: Request, res: Response) => {
  try {
    const data = await service.execute();
    const idUser = parseInt(req.params.IdUser);

    console.log('====================================');
    console.log(req.params.IdUser);
    console.log('====================================');
    const dbHuertasArr: CalidadHuertasData[] = []
    const dbTTSArr: LotesAbiertos[] = []

    const Busquedafecha = await calidadRangoPesosSelectTodayService.execute()
    let fecha = 0

    if (Busquedafecha.length === 0){
      const fechaNew = await calidadRangoPesosInsertService.execute();
      fecha = fechaNew.IdRangoPesos;
    }else {
      fecha = Busquedafecha[0].IdRangoPesos
    }

    if(data.length !== 0){
      const dbTTS = await getLotesAbiertosService.execute();

      for(const dbHuertas of data){
        dbHuertasArr.push(dbHuertas)
      }
      for(const dbT of dbTTS){
        dbTTSArr .push(dbT)
      }
      const difference = dbTTSArr.filter(a1 => !dbHuertasArr.some(a2 => a2.IdLote === a1.IdLote));
      if (difference.length !== 0) {
        const user= await userNameByIdService.execute(idUser)
        const userName = user?.Nombre ?? 'NULL';
          for (const element of difference) {
            const destino = await loteLineaProduccionSelectByIdService.execute(element.IdLote)
            let destino1 = ''
            if (destino.length === 0) {
              destino1 =  "Revisar Api"
            }else{
              if (destino[0].LineaProduccion === 'NACIONAL') {
                destino1 =  "NACIONAL"
              }else{
                destino1 =  "EXPORTACION"
              }
            }
          const lote = {
            IdLote: element.IdLote,
            Fecha: element.Fecha,
            Huerta: element.Huerta,
            NoRegistro: element.NoRegistro,
            Municipio: element.Municipio,
            Cajas: element.Cajas,
            Peso: element.PesoNeto,
            VelocidadCepillado: '',
            TipoCorte: '',
            EstadoFruta: '',
            Destino: destino1,
            Activo: 0,
            Creador: userName ,
            IdRangoPesos: fecha,
            Observaciones:''
          }
        await calidadHuertasInsertService.execute(lote)

      }
      } else {
        console.log('datos iguales');
      }

    }else{
      const result = await getLotesAbiertosService.execute();
      const user = await userNameByIdService.execute(idUser)
      const userName = user?.Nombre ?? 'NULL';
      
      for (const element of result) {
        const destino = await loteLineaProduccionSelectByIdService.execute(element.IdLote)
        const lote = {
          IdLote: element.IdLote,
          Fecha: element.Fecha,
          Huerta: element.Huerta,
          NoRegistro: element.NoRegistro,
          Municipio: element.Municipio,
          Cajas: element.Cajas,
          Peso: element.PesoNeto,
          VelocidadCepillado: '',
          TipoCorte: '',
          EstadoFruta: '',
          Destino: destino[0].LineaProduccion === 'NACIONAL' ? 'NACIONAL': "EXPORTACION",
          Activo: 0,
          Creador: userName ,
          IdRangoPesos: fecha,
          Observaciones:''
        }
        await calidadHuertasInsertService.execute(lote)

      }
    }

    const dataActual = await service.execute();

    const dataNew = await qualityHuertaRecentService.execute();
    res.json(dataNew);
  } catch (error) {
    console.error("Error in calidad huertas endpoint:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};