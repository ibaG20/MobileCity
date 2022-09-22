import { Request, Response } from "express";
import { prisma } from "../../../../prisma/client";

export default {
    async updateTransport(req: Request, res: Response) {
        const { id } = req.params;
        const { serialNumber, type, status } = req.body;
        let transport = await prisma.transport.findUnique({
            where: {
                id: Number(id),
            }
        });

        transport = await prisma.transport.update({
            where: {
                id: Number(id),
            },
            data: {
                serialNumber,
                type,
                status
            }
        });

        return res.status(200).json(transport);
    }

} 