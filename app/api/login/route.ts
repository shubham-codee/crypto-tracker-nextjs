import clientPromise from "@/lib/mongodb";
import { User } from "@/types/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("crypto-tracker");
    const usersCollection = db.collection<User>("users");

    const existingUser = await usersCollection.findOne<User>({ email });

    if (!existingUser) {
      return NextResponse.json(
        { message: "User not registered" },
        { status: 404 }
      );
    }

    const passwordFromDB = existingUser.password;

    const isMatch = await bcrypt.compare(password, passwordFromDB);

    if (!isMatch) {
      return NextResponse.json(
        { message: "Incorrect password" },
        { status: 401 }
      );
    } else {
      const token = jwt.sign(
        {
          userId: existingUser._id,
        },
        process.env.JWT_SECRET as string,
        { expiresIn: "7d" }
      );

      const response = NextResponse.json(
        {
          message: "Login successful",
        },
        { status: 200 }
      );

      response.cookies.set("token", token, {
        httpOnly: true,
        secure: true,
        path: "/",
        maxAge: 60 * 60 * 60 * 24 * 7,
      });
      
      return response;
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
