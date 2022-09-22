import { Request, Response } from "express";
import { prisma } from "../../../../prisma/client";

export default {
    async finishRent(req: Request, res: Response) {
        const { id } = req.params;
        let rent = await prisma.rent.findUnique({
            where: {
                id: Number(id),
            }
        });

        rent = await prisma.rent.update({
            where: {
                id: Number(id),
            },
            data: {
                status: false
            }
        });
        
        await prisma.transport.update({
            where: {
                id: Number(rent.transportId)
            },
            data: {
                status: true
            }
        }); 


        return res.status(200).json(rent);
    }

} 