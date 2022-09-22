import { Router } from "express";
import UpdateClientController from "../modules/clients/useCases/updateClient/UpdateClientController";
import { CreateTransportController } from "../modules/transports/useCases/createTransport/CreateTransportController";
import { GetAllTransportsController } from "../modules/transports/useCases/getAllTransports/GetAllTransportsController";
import GetTransportByIdController from "../modules/transports/useCases/getTransportById/GetTransportByIdController";
import UpdateTransportController from "../modules/transports/useCases/updateTransport/UpdateTransportController";

const createTransportController = new CreateTransportController();
const getAllTransportsController = new GetAllTransportsController();

const transportRoutes = Router();

transportRoutes.post("/", createTransportController.handle);
transportRoutes.get("/", getAllTransportsController.handle);
transportRoutes.get("/:id", GetTransportByIdController.findTransport);
transportRoutes.put("/:id", UpdateTransportController.updateTransport);

export { transportRoutes };