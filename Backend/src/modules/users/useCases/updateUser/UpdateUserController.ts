import { hash } from "bcryptjs";
import { Request, Response } from "express";
import { prisma } from "../../../../prisma/client";

export default {
    async updateUser(req: Request, res: Response) {
        const { id } = req.params;
        const { name, email, password } = req.body;
        let user = await prisma.user.findUnique({
            where: {
                id
            }
        });

        const passwordHash = await hash(password, 8);

        user = await prisma.user.update({
            where: {
                id
            },
            data: {
                name,
                email,
                password: passwordHash
            }
        });

        return res.status(200).json(user);
    }
} 