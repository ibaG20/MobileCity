import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

interface IRequest {
    email: string;
    password: string;
}

class AuthenticateUserUseCase {

    async execute({ email, password }: IRequest){
        //verificar se user existe
        const userAlreadyExists = await prisma.user.findFirst({
            where: {
                email
            }
        });

        if(!userAlreadyExists){ //mostra esse erro se o user não existir
            throw new AppError("User or password incorrect!");
        }
        
        //verificar se a senha esta correta
        const passwordMatch = await compare(password, userAlreadyExists.password)
        
        if(!passwordMatch){ //mostra se a senha estiver errada/nn existir
            throw new AppError("User or password incorrect!");
        }

        //gerar token do user
        const token = sign({}, "b417ff8a-acc7-485a-8951-8ab7fac6c656", {
            subject: userAlreadyExists.id,
            //expiresIn: "20s"
        });

        return { token };
    }
}

export { AuthenticateUserUseCase }