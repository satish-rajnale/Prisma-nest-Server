import { ROLE } from "@prisma/client";


export interface User {
  id?: string;
  name: string;
  email: string;
  role: ROLE;
  qualifications: any;
  createdBids?: IBid[];
  votedBids?: IBid[];
}

export interface IBid {
  id: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
  owner: User;
  ownerId: String;
  votedBy?: User;
  votedById?: string;
  // container:Container[]
}
