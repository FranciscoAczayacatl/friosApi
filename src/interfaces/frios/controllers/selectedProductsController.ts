import { Request, Response } from "express";
import { SelectedProductsRepositoryImpl } from "../../../infrastructure/db/frios/mssql/selectedProductsRepositoryImpl";
import { GetSelectedProductsByPalletService } from "../../../application/frios/services/getSelectedProductsByPallet.service";
import { PalletDistribucionRepositoryImpl } from "../../../infrastructure/db/frios/mssql/PalletDistribucionRepositoryImpl";
import { ObtenerPalletDistribucionService } from "../../../application/frios/services/palletDistribucion.service";
import { PalletCalibersRepositoryImpl } from "../../../infrastructure/db/frios/mssql/palletCalibersRepositoryImpl";
import { GetPalletCalibersByPedidoService } from "../../../application/frios/services/getPalletCalibersByPedido.service";
import { PalletCountRepositoryImpl } from "../../../infrastructure/db/frios/mssql/palletCountRepositoryImpl";
import { GetPalletCountByIdService } from "../../../application/frios/services/getPalletCountById.service";

const getSelectedProductsByPalletREPO = new SelectedProductsRepositoryImpl();
const getSelectedProductsByPalletService = new GetSelectedProductsByPalletService(getSelectedProductsByPalletREPO);

const obtenerPalletDistribucionREPO = new PalletDistribucionRepositoryImpl();
const obtenerPalletDistribucionService = new ObtenerPalletDistribucionService(obtenerPalletDistribucionREPO);

const GetPalletCalibersByPedidoREPO = new PalletCalibersRepositoryImpl();
const getPalletCalibersByPedidoService = new GetPalletCalibersByPedidoService(GetPalletCalibersByPedidoREPO);

const getPalletCountByIdREPO = new PalletCountRepositoryImpl();
const getPalletCountByIdService= new GetPalletCountByIdService(getPalletCountByIdREPO);


export const getSelectedProductsByPalletHandler = async (req: Request, res: Response) => {
  const idPallet = parseInt(req.params.idPallet);

  if (isNaN(idPallet)) {
    return res.status(400).json({ message: "IdPallet inválido" });
  }


  try {

    const products = await getSelectedProductsByPalletService.execute(idPallet);
    const datos = await obtenerPalletDistribucionService.execute(idPallet);
    const conteo = await getPalletCountByIdService.execute(idPallet);
    
    const fusion = datos.map(dato => {
      const productosAsociados = products.filter(prod => {
        const ids = Array.isArray(prod.IdPalletDistribucion)
          ? prod.IdPalletDistribucion
          : [prod.IdPalletDistribucion];
        return ids.includes(dato.IdPalletDistribucion);
      });

      return {
        ...dato,
        products: productosAsociados
      };
    });

    const idPedido = fusion[0].products[0].IdPedido;
    const data = await getPalletCalibersByPedidoService.execute(idPedido);


    res.json({
      datos: fusion,
      pedido: data,
      conteo: conteo
      
    });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener productos", error });
  }
};