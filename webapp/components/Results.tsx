import { db } from '@/db'
import { entry, subentry, worddefinitions } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { X } from 'lucide-react'
import { BedrockEmbeddings } from '@langchain/community/embeddings/bedrock'
import {
  DistanceStrategy,
  PGVectorStore,
} from '@langchain/community/vectorstores/pgvector'
import { PoolConfig } from 'pg'
import Link from 'next/link'
import { Suspense } from 'react'


const embeddings = new BedrockEmbeddings({
  region: process.env.BEDROCK_AWS_REGION!,
  credentials: {
    accessKeyId: process.env.BEDROCK_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.BEDROCK_AWS_SECRET_ACCESS_KEY!,
  },
  model: "amazon.titan-embed-text-v1",
});

const config = {
  postgresConnectionOptions: {
    host: "aws-0-ap-southeast-2.pooler.supabase.com",
    port: 5432,
    user: "postgres.cfwpmooqcwldryskjpcr",
    password: process.env.SUPABASE_PASSWORD!,
    database: "postgres"
  } as PoolConfig,
  tableName: "langchain_pg_embedding",
  columns: {
    idColumnName: "uuid",
    vectorColumnName: "embedding",
    contentColumnName: "document",
    metadataColumnName: "cmetadata"
  },
  distanceStrategy: "cosine" as DistanceStrategy,
}

const pgVectorStore = new PGVectorStore(embeddings, config);

const Results = async ({ query }: any) => {
  let entryData = await db.select().from(entry).limit(1).where(eq(entry.entryInEnglish, query));

  if (entryData.length === 0) {
    let results = await pgVectorStore.similaritySearch(query, 20)
    let uniqueWordsIndex = new Set();
    let uniqueWords: Set<string> = new Set();
    let uniqueList: string[] = [];

    for (let res of results) {
      if (!uniqueWordsIndex.has(res.metadata.row)) { // Check if word is unique based on row
        uniqueWordsIndex.add(res.metadata.row); // Add word to set of unique words

        const match = await db.query.worddefinitions.findFirst({
          columns: {
            id: true,
            word: true,
            definition: false
          },
          where: (worddefinitions, { eq }) => (eq(worddefinitions.id, res.metadata.row))
        })

        if (match?.word) {
          uniqueWords.add(match.word); // Add word to set of unique words
        }
        if (uniqueWords.size === 3) { // Check if we have enough unique words
          break;
        }
      }
    }

    uniqueWords.forEach((word) => {
      uniqueList.push(word);
    })


    return (
      <Suspense>
        <div className='mt-12 text-center py-4 bg-transparent'>
          <X className='mx-auto h-8 w-8 text-gray-400' />
          <h3 className='mt-2 text-sm font-semibold text-gray-900'>No results</h3>
          <p className='mt-1 text-sm mx-auto max-w-prose text-gray-500'>
            Sorry, we couldn't find any matches for{' '}
            <span className='text-green-600 font-medium'>{query}</span>.
          </p>
          {/*
        {results && (
          results.map((res) => (
            <div className='mt-4'>
              <p className='mt-1 text-sm text-gray-500'>{res.pageContent}</p>
              <p className='mt-1 text-sm text-gray-500'>{JSON.stringify(res.metadata)}</p>
            </div>
          )))
        }
        */}
          <p className="mt-12 text-green-600 text-md">
            Discover more with our suggested words! We're here to help you convey your message effortlessly.
          </p>
          <div className="flex flex-row justify-center gap-x-8 mt-6">
            {uniqueList.map((word) => (
              <Link
                className="px-4 py-2 text-md hover:text-primary transition-colors bg-gray-100 hover:bg-gray-50 text-primary border rounded-lg"
                href={`/search?query=${word}`}>
                {word}
              </Link>
            ))}
          </div>
        </div>
      </Suspense>
    )
  }

  let subEntries = await db.select().from(subentry).where(eq(subentry.entryId, entryData[0].id));

  return (
    <Suspense>
      <div className="bg-gray-100 p-6 shadow-xl rounded-lg max-w-[800px] mx-auto mt-8">
        <div className="mb-4">
          {/* Render entry data */}
          {entryData.map((entry) => (
            <div key={entry.id}>
              <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{entry.entryInEnglish}</h2>
              {/* <p className="text-sm text-gray-600">Entry type: {entry.entryType}</p>
            {entry.categories && (
              <p className="text-sm text-gray-600">Categories: {entry.categories.join(', ')}</p>
            )} */}
            </div>
          ))}
        </div>
        <div>
          {/* Populate through the subentries */}
          {subEntries.map((subentry) => (
            <div key={subentry.id}>
              <p className="text-gray-700 mb-3 font-normal">Definition in Auslan:</p>
              <div className="flex space-x-2 overflow-x-auto">
                {subentry.videoLinks && (subentry.videoLinks.map((videoLink) => (
                  <video key={videoLink} controls className="max-w-full w-50 h-50">
                    <source src={videoLink} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )))}
              </div>

              {subentry.keywords && (
                <div className="text-sm text-gray-700 mb-3">Keywords: {subentry.keywords.join(', ')}</div>
              )}

              <div className="flex flex-col gap-y-3 mb-8">
                {Object.entries(subentry.definitions as { [key: string]: string }).map(([definitionType, definition]) => (
                  <div className="w-full p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{definitionType}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{definition}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </Suspense>
  )
}

export default Results
