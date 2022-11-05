import { PrismaClient, ROLE } from "@prisma/client";
import {userdata} from "./prisma/seed_data"
const prisma = new PrismaClient();

async function createUser() {
  const qualifications = { education: "BE" };
  //   await prisma.user.deleteMany();
  const singleUser = userdata[0]
  const user = await prisma.user.create({
    data : singleUser,
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
    data:  userdata,
    skipDuplicates: true,
  });
  console.log("users created", users);
  //users created { count: 3 } it return count of rows created
}

async function getUsers() {
  const users = await prisma.user.findMany();
  console.log(users);
}
async function getUserByEmail() {
  const users = await prisma.user.findUnique({
    where: { email_name: { name: "satish", email: "satish@email.com" } },
    include: { createdBids: true },
  });
  console.log(users);

  const singleUser = await prisma.user.findFirst({ where: { name: "MA" } });
  console.log(singleUser);

  const orderedUsers = await prisma.user.findMany({
    where: { AND:[{ role: ROLE.ADMIN}, { name: { contains: "ish" }}], NOT:{qualifications : {equals: { education: 'BE'}}} },
    orderBy: { name: "desc" },
  });
  console.log("orderedUsers : : ", orderedUsers);
}

async function deleteUser(id: string) {
  await prisma.user.delete({ where: { id: id } });
}

getUserByEmail()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
