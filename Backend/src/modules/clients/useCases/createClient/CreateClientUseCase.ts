import { Client } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export interface ICreateClientDTO {
    cpf: string;
    name: string;
    phone: string;
    email: string;
    status: boolean;
}

export class CreateClientUseCase {
    async execute({ cpf, name, phone, email, status }: ICreateClientDTO): Promise<Client> {
        
        //verificar se usuário já existe
        const clientAlreadyExists = await prisma.client.findUnique({
            where: {
                cpf
            } 
        });

        if (clientAlreadyExists){
            throw new AppError("Client already exists!");
        }

        if (cpf === "" || email === "" || name === "" || phone === ""){
            throw new AppError("Empty fields, put the values!");
        }

        //criar client
        const client = await prisma.client.create({
            data: {
                cpf,
                name,
                phone,
                email,
                status
            }
        });    

        return client;
    }
}