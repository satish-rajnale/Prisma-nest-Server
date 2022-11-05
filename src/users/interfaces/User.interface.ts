export enum ROLE {
  ADMIN = "ADMIN",
  CONTRACTOR = "CONTRACTOR",
  GUEST = "GUEST",
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: ROLE;
  qualifications: any;
  createdBids: IBid[];
  votedBids: IBid[];
}

export interface IBid {
  id: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
  owner: IUser;
  ownerId: String;
  votedBy?: IUser;
  votedById?: string;
  // container:Container[]
}
