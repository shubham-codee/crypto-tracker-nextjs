import clientPromise from "@/lib/mongodb";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const token = (await cookies()).get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized: token missing" },
        { status: 401 }
      );
    }

    const payload = verify(token, process.env.JWT_SECRET as string);

    if (!payload) {
      return NextResponse.json(
        { message: "Unauthorized: no payload" },
        { status: 401 }
      );
    }

    const userId = (payload as { userId: string }).userId;

    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized: no userId" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { coinSymbol } = body;

    const client = await clientPromise;
    const db = client.db("crypto-tracker");
    const favouritesCollection = db.collection("favourites");

    const existingFavourite = await favouritesCollection.findOne({
      userId,
      coinSymbol,
    });

    if (existingFavourite) {
      return NextResponse.json(
        { message: "Item is already in favourites" },
        { status: 400 }
      );
    }

    await favouritesCollection.insertOne({ userId, coinSymbol });

    return NextResponse.json({ message: "Favourite added." }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const token = (await cookies()).get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized: token missing" },
        { status: 401 }
      );
    }

    const payload = verify(token, process.env.JWT_SECRET as string);

    if (!payload) {
      return NextResponse.json(
        { message: "Unauthorized: no payload" },
        { status: 401 }
      );
    }

    const userId = (payload as { userId: string }).userId;

    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized: no userId" },
        { status: 401 }
      );
    }

    const client = await clientPromise;
    const db = client.db("crypto-tracker");
    const favouritesCollection = db.collection("favourites");

    const data = await favouritesCollection
      .find({ userId }, { projection: { coinSymbol: 1, _id: 0 } })
      .toArray();

    if (!data) {
      return NextResponse.json(
        { message: "Fetched favourites", data: [] },
        { status: 200 }
      );
    }

    const coinSymbols = data.map((item) => item.coinSymbol);

    return NextResponse.json(
      { message: "Fetched favourites", data: coinSymbols },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const token = (await cookies()).get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized: token missing" },
        { status: 401 }
      );
    }

    const payload = verify(token, process.env.JWT_SECRET as string);

    if (!payload) {
      return NextResponse.json(
        { message: "Unauthorized: no payload" },
        { status: 401 }
      );
    }

    const userId = (payload as { userId: string }).userId;

    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized: no userId" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { coinSymbol } = body;

    const client = await clientPromise;
    const db = client.db("crypto-tracker");
    const favouritesCollection = db.collection("favourites");

    const { deletedCount } = await favouritesCollection.deleteOne({
      userId,
      coinSymbol,
    });

    if (!deletedCount) {
      return NextResponse.json(
        { message: "Favourite not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Favourite deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
