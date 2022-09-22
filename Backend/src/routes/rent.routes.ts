import { Router } from "express";
import { CreateRentController } from "../modules/rent/useCases/createRent/CreateRentController";
import FinishRentController from "../modules/rent/useCases/finishRent/FinishRentController";
import { GetAllRentsController } from "../modules/rent/useCases/getAllRents/GetAllRentsController";
import GetRentByIdController from "../modules/rent/useCases/getRentById/GetRentByIdController";

const createRentController = new CreateRentController();
const getAllRentsController = new GetAllRentsController();

const rentRoutes = Router();

rentRoutes.post("/", createRentController.handle);
rentRoutes.get("/", getAllRentsController.handle);
rentRoutes.get("/:id", GetRentByIdController.findRent);
rentRoutes.put("/:id", FinishRentController.finishRent);

export { rentRoutes };