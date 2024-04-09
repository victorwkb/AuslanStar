import connect from "@/db";
import Entry from "@/app/models/entry";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect();
    // filter by "entry_in_english" field
    const query = "abbreviate"
    const entry = await Entry.findOne({ entry_in_english: query });

    return NextResponse.json(entry, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
