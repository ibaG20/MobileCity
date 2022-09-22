import { Transport } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export interface ICreateTransportDTO {
    serialNumber: number;
    type: string;
    status: boolean;
}

export class CreateTransportUseCase {
    async execute({ serialNumber, type, status }: ICreateTransportDTO): Promise<Transport> {
        //verificar se usuário já existe
        const transportAlreadyExists = await prisma.transport.findUnique({
            where: {
                serialNumber
            }
        }); 

        if (transportAlreadyExists){
            throw new AppError("Transport already exists!");
        }

        //criar client
        const transport = await prisma.transport.create({
            data: {
                serialNumber,
                type,
                status
            }
        });

        return transport;
    }
}