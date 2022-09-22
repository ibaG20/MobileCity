import { Rent } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllRentsUseCase {
    async execute(): Promise<Rent[]>{
        const rents = await prisma.rent.findMany({
        });

        return rents;
    }
}