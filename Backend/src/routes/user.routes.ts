import { Router } from "express";
import { AuthenticateUserController } from "../modules/users/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { GetAllUsersController } from "../modules/users/useCases/getAllUsers/GetAllUsersControllers";
import UpdateUserController from "../modules/users/useCases/updateUser/UpdateUserController";

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const getAllUsersController = new GetAllUsersController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.post("/login", authenticateUserController.handle);
userRoutes.get("/", getAllUsersController.handle);
userRoutes.put("/:id", UpdateUserController.updateUser);

export { userRoutes };