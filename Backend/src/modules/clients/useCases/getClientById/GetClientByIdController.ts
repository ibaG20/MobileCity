import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export default{
  async findClient(req: Request, res: Response){

    const {id} = req.params;
    const client = await prisma.client.findUnique({
      where: {
        id: Number(id),
      },
      
    });

    if (client !=  null){
      return res.status(200).json(client);
    }else{
      throw new AppError("Client does not exists!");
    }

  }
}