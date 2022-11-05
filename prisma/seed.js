import { userdata } from './seed_data.js';
import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function seed(){
// seeding users
userdata.forEach((user) => {
    (async function(){
        const usercreated = await prisma.user.upsert({
          // @ts-ignore
            where: { email: user.email },
            update: {},
            create: {
              ...user
            },
          })
    })()
  
});

}

seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })