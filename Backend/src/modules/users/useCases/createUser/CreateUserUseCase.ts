import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { hash } from "bcryptjs"

interface IUserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserUseCase {

    async execute({ name, email, password }: IUserRequest){
        //verificar se user existe
        const userAlreadyExists = await prisma.user.findFirst({
            where: {
                email
            }
        });

        if(userAlreadyExists) {
            throw new AppError("User already exists!");
        }

        //cadastrar user

        const passwordHash = await hash(password, 8);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: passwordHash,
            }
        });
 
        return user;
    }
}

export { CreateUserUseCase }