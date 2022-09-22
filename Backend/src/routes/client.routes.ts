import { Router } from "express";
import { CreateClientController } from "../modules/clients/useCases/createClient/CreateClientController";
import DeleteClientController from "../modules/clients/useCases/deleteClient/DeleteClientController";
import { GetAllClientsController } from "../modules/clients/useCases/getAllClients/GetAllClientsController";
import GetClientByIdController from "../modules/clients/useCases/getClientById/GetClientByIdController";
import UpdateClientController from "../modules/clients/useCases/updateClient/UpdateClientController";

const createClientController = new CreateClientController();
const getAllClientsController = new GetAllClientsController();

const clientRoutes = Router();

clientRoutes.post("/", createClientController.handle);
clientRoutes.get("/", getAllClientsController.handle);
clientRoutes.get("/:id", GetClientByIdController.findClient);
clientRoutes.put("/:id", UpdateClientController.updateClient);
clientRoutes.delete("/:id", DeleteClientController.deleteClient);

export { clientRoutes };    