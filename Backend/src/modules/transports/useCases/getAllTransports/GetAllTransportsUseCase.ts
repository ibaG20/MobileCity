import { Transport } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllTransportsUseCase {
    async execute(): Promise<Transport[]> {
        const transports = await prisma.transport.findMany({
            orderBy: {
                registerDate: "desc",
            },
        });

        return transports;
    }
} 