import React from 'react'
import Results from '@/components/Results'
import SearchBar from '@/components/SearchBar'
import { Suspense } from 'react'
import { redirect } from 'next/navigation'


export const dynamic = 'force-dynamic'

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

const Search = async ({ searchParams }: PageProps) => {

  const query = searchParams.query;
  if (Array.isArray(query) || !query) {
    return redirect('/')
  }


  return (
    <div className="flex flex-col items-center justify-center bg-green-100 min-h-[700px] p-10">
      <header className="layout-header text-center">
        <h1 className="text-5xl text-primary font-bold">Free Auslan Dictionary</h1>
        <p className="text-secondary mt-1 text-lg">Find signs and meanings easily</p>
        <p className="text-tertiary mt-1 text-md">Enter a word or sentence to see the corresponding Auslan sign
          video.</p>
      </header>


      <Suspense>
        <SearchBar />
        <Results query={query} />
      </Suspense>
    </div>
  )
}

export default Search
