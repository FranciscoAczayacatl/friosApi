import { Request, Response } from "express";
import { QualityHuertaRecentRepositoryImpl } from "../../../infrastructure/db/calidad/mssql/qualityHuertaRecentRepositoryImpl";
import { QualityHuertaRecentService } from "../../../application/calidad/services/qualityHuertaRecent.service";

export const getRecentQualityHuertaHandler = async (req: Request, res: Response) => {
  const repo = new QualityHuertaRecentRepositoryImpl();
  const service = new QualityHuertaRecentService(repo);

  try {
    const result = await service.execute();
    res.json(result);
  } catch (error) {
    console.error("Error fetching recent quality huerta data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};