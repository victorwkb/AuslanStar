'use client';

import { useEffect, useState } from 'react';

type Entry = {
  _id: String
  entry_in_english: String
  sub_entries: Array<String>
}

/* function SearchBar({ handleSearch }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const onSearch = () => {
      handleSearch(searchTerm);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onSearch();
      }
    };

    return (
      <div className="flex flex-col items-center w-full max-w-md">
        <input
          className="w-full shadow appearance-none border rounded py-3 px-4 text-grey-darker text-lg"
          type="text"
          placeholder="Type a word or sentence here"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          onKeyDown={handleKeyDown}
        />
        <button
          className="w-full bg-green-500 hover:bg-green-700 text-white py-3 px-4 rounded mt-4 text-lg"
          onClick={onSearch}
        >
          Search
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">Results will appear here</p>


      </div>
    );
  } */

export default async function Dictionary({ params }: any) {
  const [entry, setEntry] = useState<Entry | null>(null);
  const [loading, setLoading] = useState(false);

  const getEntry = async() => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/api/dictionary/${params}`, {
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

  };

  return (
    <div className="flex flex-col items-center justify-center bg-green-100 min-h-screen p-10">
      <header className="layout-header text-center">
        <h1 className="text-5xl text-primary font-bold">Free Auslan Dictionary</h1>
        <p className="text-secondary mt-1 text-lg">Find signs and meanings easily</p>
        <p className="text-tertiary mt-1 text-md">Enter a word or sentence to see the corresponding Auslan sign
          video.</p>
      </header>


      <div>
        {loading && <div>Loading...</div>}
        {entry && <div>entry.entry_in_english</div>}
      </div>

    </div>
  );
}




// import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
// import { createClient } from "@supabase/supabase-js";
// import { BedrockEmbeddings } from "@langchain/community/embeddings/bedrock";

// import {
//   DistanceStrategy,
//   PGVectorStore,
// } from "@langchain/community/vectorstores/pgvector"
// import { PoolConfig } from "pg";

// const embeddings = new BedrockEmbeddings({
//   region: process.env.BEDROCK_AWS_REGION!,
//   credentials: {
//     accessKeyId: process.env.BEDROCK_AWS_ACCESS_KEY_ID!,
//     secretAccessKey: process.env.BEDROCK_AWS_SECRET_ACCESS_KEY!,
//   },
//   model: "amazon.titan-embed-text-v1",
// });

// const privateKey = process.env.SUPABASE_ANON_KEY!;
// if (!privateKey) throw new Error(`Expected env var SUPABASE_PRIVATE_KEY`);
//
// const url = process.env.SUPABASE_URL!;
// if (!url) throw new Error(`Expected env var SUPABASE_URL`);

// const config = {
//   postgresConnectionOptions: {
//     host: "https://cfwpmooqcwldryskjpcr.supabase.co",
//     port: 5432,
//     user: "aws-0-ap-southeast-2.pooler.supabase.com",
//     password: process.env.SUPABASE_ANON_KEY,
//     database: "postgres"
//   } as PoolConfig,
//   tableName: "langchain_pg_embedding",
//   columns: {
//     idColumnName: "uuid",
//     vectorColumnName: "embedding",
//     contentColumnName: "document",
//     metadataColumnName: "cmetadata"
//   },
//   distanceStrategy: "cosine" as DistanceStrategy,
// }

// const pgVectorStore = new PGVectorStore(embeddings, config);

// const supaClient = createClient(url, privateKey);

// const semanticSearch = async (query: string) => {

// const vectorStore = new SupabaseVectorStore(
//   embeddings,
//   {
//     client: supaClient,
//     tableName: "langchain_pg_embedding",
//     queryName: "match_def",
//   }
// )
// const result = await vectorStore.similaritySearch(query, 3);

// const res = vectorStore.similaritySearch(query, 1)
// const result = await pgVectorStore.similaritySearch(query, 5);

//   return res
// }

