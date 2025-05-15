import { Request, Response } from "express";
import { PodLiberoEmbarqueSelectRepositoryImpl } from "../../infrastructure/db/mssql/podLiberoEmbarqueSelect.repository.impl";
import { PodLiberoEmbarqueSelectService } from "../../application/services/podLiberoEmbarqueSelect.service";

export const podLiberoEmbarqueSelectHandler = async (req: Request, res: Response) => {
  const repository = new PodLiberoEmbarqueSelectRepositoryImpl();
  const service = new PodLiberoEmbarqueSelectService(repository);

  try {
    const empleados = await service.execute();
    res.json(empleados);
  } catch (error) {
    console.error("Error fetching POD empleados:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};