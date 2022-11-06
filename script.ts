// import { PrismaClient, ROLE } from "@prisma/client";
// import {userdata} from "./prisma/seed_data"
// const prisma = new PrismaClient();


// async function getUserByEmail() {
//   const users = await prisma.user.findUnique({
//     where: { email_name: { name: "satish", email: "satish@email.com" } },
//     include: { createdBids: true },
//   });
//   console.log(users);

//   const singleUser = await prisma.user.findFirst({ where: { name: "MA" } });
//   console.log(singleUser);

//   const orderedUsers = await prisma.user.findMany({
//     where: { AND:[{ role: ROLE.ADMIN}, { name: { contains: "ish" }}], NOT:{qualifications : {equals: { education: 'BE'}}} },
//     orderBy: { name: "desc" },
//   });
//   console.log("orderedUsers : : ", orderedUsers);
// }

// async function deleteUser(id: string) {
//   await prisma.user.delete({ where: { id: id } });
// }

// getUserByEmail()
//   .catch((e) => console.error(e))
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
export const jj = "sdasd"
