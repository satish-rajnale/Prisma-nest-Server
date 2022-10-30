import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){
    const user = await prisma.user.create({data: {name:"Menon"}})
    const users = await prisma.user.findMany()
    console.log(users)
}

// main()
//     .catch(e => console.error(e))
//     .finally(async() => {
//         await prisma.$disconnect()
//     })