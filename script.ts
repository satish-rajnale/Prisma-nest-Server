import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createUser() {
  const qualifications = { education: "BE" };
  await prisma.user.deleteMany();
  const user = await prisma.user.create({
    data: {
      name: "satish",
      email: "satish@email.com",
      role: "ADMIN",
      qualifications: qualifications,
    },
    //include here will return all the above data on creation with the selected fields inside include
    // include : {
    // createdBids : true
    // },

    //select here will return only the selected fields inside select
    select: {
      votedBids: true,
    },
  });
  //Note: You can have only one include or select clause at a time on the create function
  console.log("user created", user);
}

async function createManyUsers() {
  const qualifications = { education: "BE" };

  const users = await prisma.user.createMany({
    data: [
      {
        name: "Menon",
        email: "menon@email.com",
        role: "ADMIN",
        qualifications: qualifications,
      },
      {
        name: "PK",
        email: "pk@email.com",
        role: "ADMIN",
        qualifications: qualifications,
      },
      {
        name: "MA",
        email: "ma@email.com",
        role: "ADMIN",
        qualifications: qualifications,
      },
    ],
    skipDuplicates: true,
  });
  console.log("users created", users);
  //users created { count: 3 } it return count of rows created
}

async function main() {
  const users = await prisma.user.findMany();
  console.log(users);
  // await prisma.user.deleteMany()
}

createManyUsers()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
