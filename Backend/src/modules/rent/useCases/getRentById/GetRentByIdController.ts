import { Request, Response } from "express";
import { prisma } from "../../../../prisma/client";

export default{
  async findRent(req: Request, res: Response){

    const {id} = req.params;
    const rent = await prisma.rent.findUnique({
      where: {
        id: Number(id),
      },
      
    })

    return res.status(200).json(rent);
  }
}