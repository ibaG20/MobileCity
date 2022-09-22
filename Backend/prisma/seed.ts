import { clients } from './clients';
import { rents } from './rents';
import { transports } from './transports';
import { PrismaClient} from '@prisma/client';
import { users } from './users';

const prisma = new PrismaClient();

async function main() {

    for (let transport of transports) {
        await prisma.transport.create({
            data: transport
        })
    }
    for (let client of clients) {
        await prisma.client.create({
            data: client
        })
    }
    for (let user of users) {
        await prisma.user.create({
            data: user
        })
    }
    for (let rent of rents) {
        await prisma.rent.create({
            data: rent
        })
    }
}
 
main()
.catch(e => {
    console.log(e);
    process.exit(1)
})
.finally(() => {
    prisma.$disconnect();
})