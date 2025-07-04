import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json(
    { message: "Logout successfully" },
    { status: 200 }
  );

  response.cookies.set("token", "", { maxAge: 0 });

  return response;
}
