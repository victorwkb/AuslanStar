import dbConnect from "@/db";
import Entry from "@/app/models/entry";
import { NextResponse } from "next/server";

export async function getEntry(query) => {
  try {
    await dbConnect();
    // filter by "entry_in_english" field
    const entry = await Entry.findOne({ entry_in_english: query });
    console.log(entry)

    return NextResponse.json({ message: "GET" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
