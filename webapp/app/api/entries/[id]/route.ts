import Entry from "@/app/models/Entry";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  const foundEntry = await Entry.findOne({ _id: id });
  return NextResponse.json({ foundEntry }, { status: 200 });
}

