import clientPromise from "@/lib/mongodb";
import { User } from "@/types/user";
import { jwtVerify } from "jose";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;

    if (token) {
      const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET)
      );
      const userId = payload.userId as string;

      if (!userId) {
        return NextResponse.json(
          { message: "Unauthorized: no userId" },
          { status: 401 }
        );
      }

      const client = await clientPromise;
      const db = client.db("crypto-tracker");
      const usersCollection = db.collection<User>("users");

      const currUser = await usersCollection.findOne({
        _id: new ObjectId(userId),
      });

      if (!currUser) {
        return NextResponse.json(
          { message: "User does not exist" },
          { status: 404 }
        );
      }

      const { _id, name, email } = currUser;

      return NextResponse.json({ data: { _id, name, email } }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Unauthorized: token missing" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
