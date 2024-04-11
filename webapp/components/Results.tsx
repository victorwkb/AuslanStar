import { db } from '@/db'
import { entry, subentry, Entry, SubEntry } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { X } from 'lucide-react'

const Results = async ({ query }) => {
  let entryData = await db.select().from(entry).limit(1).where(eq(entry.entryInEnglish, query));

  if (entryData.length === 0) {
    return (
      <div className='mt-16 text-center py-4 bg-transparent'>
        <X className='mx-auto h-8 w-8 text-gray-400' />
        <h3 className='mt-2 text-sm font-semibold text-gray-900'>No results</h3>
        <p className='mt-1 text-sm mx-auto max-w-prose text-gray-500'>
          Sorry, we couldn't find any matches for{' '}
          <span className='text-green-600 font-medium'>{query}</span>.
        </p>
      </div>
    )
  }

  let subEntries = await db.select().from(subentry).where(eq(subentry.entryId, entryData[0].id));

  return (
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
  )
}

export default Results
