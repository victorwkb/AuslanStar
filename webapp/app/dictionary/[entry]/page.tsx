'use client';

import { useEffect, useState } from 'react';

type Entry = {
  _id: String
  entry_in_english: String
  sub_entries: String
}

export default async function EntryID({ params }: any) {
  const [entry, setEntry] = useState<Entry | null>(null);
  const [loading, setLoading] = useState(false);

  const getEntry = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/api/dictionary/${params.entry}`, {
        method: 'GET'
      });

      if (response) {
        const entry = await response.json();
        if (entry) setEntry(entry);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    useEffect(() => {
      getEntry();
    }, []);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-green-100 min-h-screen p-10">
      <div>
        {loading && <div>Loading...</div>}
        {entry && <div>entry.</div>}
      </div>

    </div>
  );
}
