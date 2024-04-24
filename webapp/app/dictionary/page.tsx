"use client"; // Make sure this is the very first line in your file

import React, { Suspense } from "react";
import SearchBar from "@/components/SearchBar";

export default function Dictionary() {
  return (
    <div className="flex flex-col items-center justify-center bg-lime-100 min-h-[500px] p-10 gap-y-2">
      <header className="animate-in text-center mb-4">
        <h1 className="text-5xl text-primary font-bold">
          Auslan Dictionary
        </h1>
      </header>

      <p
        className="animate-in text-gray-30 text-lg text-center"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        Looking for an Auslan sign? Search here!
      </p>
      <div
        className="animate-in w-2/3 flex flex-col justify-center"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <SearchBar />
      </div>

    </div>
  );
}
