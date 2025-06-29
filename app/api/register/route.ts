import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { NewUser, User } from "@/types/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("crypto-tracker");
    const usersCollection = db.collection("users");

    const existingUser = await usersCollection.findOne<User>({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 404 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser: NewUser = { name, email, password: hashedPassword };

    const { insertedId: userId } = await usersCollection.insertOne(newUser);

    const response = NextResponse.json(
      { message: "User registered" },
      { status: 200 }
    );

    const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
      expiresIn: "7d",
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
