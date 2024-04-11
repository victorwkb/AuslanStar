'use client'; // Make sure this is the very first line in your file

import React from 'react';
import SearchBar from "@/components/SearchBar";

export default function Dictionary() {

  return (
    <div className="flex flex-col items-center justify-center bg-green-100 min-h-[700px] p-10">
      <header className="layout-header text-center">
        <h1 className="text-5xl text-primary font-bold">Free Auslan Dictionary</h1>
        <p className="text-secondary mt-1 text-lg">Find signs and meanings easily</p>
        <p className="text-tertiary mt-1 text-md">Enter a word or sentence to see the corresponding Auslan sign
          video.</p>
      </header>

      <SearchBar />
    </div>
  );
}
