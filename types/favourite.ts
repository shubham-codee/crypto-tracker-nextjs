import { ObjectId } from "mongodb";

export type Favourite = {
  _id: ObjectId;
  userId: ObjectId;
  coinSymbol: string;
};
