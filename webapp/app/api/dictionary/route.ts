import connect from "@/db";
import Entry from "@/app/models/entry";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

// export const GET = async () => {
//   try {
//     await connect();
//     // filter by "entry_in_english" field
//     const query = "abbreviate"
//     const entry = await Entry.findOne({ entry_in_english: query });
//     console.log(entry);
//
//     return NextResponse.json(entry, { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json({ message: "Internal server error" }, { status: 500 });
//   }
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const entry = await Entry.findOne({ entry_in_english: req.query.query as string });
      return res.status(200).json(entry);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
