// pages/api/dictionary/[id]/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/db'
import Entry from '@/app/models/entry';

connectDB(); // Connect to MongoDB

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { word },
  } = req;

  if (req.method === 'GET') {
    try {
      const dictionaryItem = await Entry.findOne({ entry_in_english: word });
      if (!dictionaryItem) {
        return res.status(404).json({ message: 'Dictionary item not found' });
      }
      res.status(200).json(dictionaryItem);
    } catch (error) {
      console.error('Error fetching dictionary item:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
