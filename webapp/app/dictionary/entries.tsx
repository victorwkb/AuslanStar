'use server';

import dbConnect from "@/db";
import Entry from "@/app/models/entry";
import { NextResponse } from "next/server";

export default async function getEntry(query: string) {
  try {
    await dbConnect();
    // filter by "entry_in_english" field
    const entry = await Entry.findOne({ entry_in_english: query });
    return entry;
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
