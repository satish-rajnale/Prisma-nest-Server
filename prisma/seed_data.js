import { ROLE } from "@prisma/client";
const qualifications = { education: "BE" };
export const userdata = [
    {
        name: "satish",
        email: "satish@email.com",
        role: ROLE.ADMIN,
        qualifications: qualifications,
    },
    {
        name: "Menon",
        email: "menon@email.com",
        role: ROLE.ADMIN,
        qualifications: qualifications,
    },
    {
        name: "PK",
        email: "pk@email.com",
        role: ROLE.ADMIN,
        qualifications: qualifications,
    },
    {
        name: "MA",
        email: "ma@email.com",
        role: ROLE.ADMIN,
        qualifications: qualifications,
    },
]