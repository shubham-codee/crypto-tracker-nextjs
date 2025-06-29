import { ObjectId } from "mongodb";

export type NewUser = {
  name: string;
  email: string;
  password: string;
};

export type User = NewUser & {
  _id: ObjectId;
};
