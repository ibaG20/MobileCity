import { Request, Response } from "express";
import { prisma } from "../../../../prisma/client";

export default{
  async findTransport(req: Request, res: Response){

    const {id} = req.params;
    const transport = await prisma.transport.findUnique({
      where: {
        id: Number(id),
      },
    })

    return res.status(200).json(transport);
  }
}