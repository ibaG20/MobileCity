import { Router } from "express";
import { clientRoutes } from "./client.routes";
import { rentRoutes } from "./rent.routes";
import { transportRoutes } from "./transport.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/clients", clientRoutes);
routes.use("/transports", transportRoutes);
routes.use("/rents", rentRoutes);
routes.use("/users", userRoutes);

export { routes }; 