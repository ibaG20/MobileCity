import { Request, Response } from "express";
import { prisma } from "../../../../prisma/client";

export default {
    async updateClient(req: Request, res: Response) {
        const { id } = req.params;
        const { cpf, name, phone, email, status } = req.body;
        let client = await prisma.client.findUnique({
            where: {
                id: Number(id),
            }
        });

        client = await prisma.client.update({
            where: {
                id: Number(id),
            },
            data: {
                cpf,
                name,
                phone,
                email,
                status
            }
        });

        return res.status(200).json(client);
    }
} 