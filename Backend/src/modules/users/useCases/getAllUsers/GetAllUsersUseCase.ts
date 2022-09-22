import { User } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../../../../prisma/client";

export class GetAllUsersUseCase {
    async execute(){

        const users = await prisma.user.findMany();  

        return users;
    }
}