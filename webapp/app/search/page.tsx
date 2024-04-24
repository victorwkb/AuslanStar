import React from "react";
import Results from "@/components/Results";
import SearchBar from "@/components/SearchBar";
import { Suspense } from "react";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Search = async ({ searchParams }: PageProps) => {
  const query = searchParams.query;
  if (Array.isArray(query) || !query) {
    return redirect("/");
  }

  return (
    <div className="flex flex-col items-center justify-center bg-lime-100 min-h-[500px] p-10">
      <div className="animate-in flex flex-row text-center items-center gap-x-6">
        <h2
          className="animate-in container mx-auto min-w-[150px] text-xl text-primary font-bold"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Auslan Dictionary
        </h2>
        <div className="animate-in container mx-auto min-w-[300px] w-full"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <SearchBar />
        </div>
      </div>
      <div
        className="animate-in w-2/3 flex flex-col justify-center"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <Results query={query} />
      </div>
    </div>
  );
};

export default Search;

