import "express-async-errors";
import express, { NextFunction, Request, Response } from 'express';
import { routes } from './routes';
import { AppError } from "./errors/AppError";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";


const app = express();
var cors = require('cors') 

app.use(express.json());
app.use(cors());

app.use(routes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError){
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    });
}
);

app.listen(3333, () => console.log("Server is running in port 3333 🚀"));