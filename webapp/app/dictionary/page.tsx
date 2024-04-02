// import { Metadata } from "next";
// import Link from "next/link"
//
//
// export default function Dictionary() {
//   return (
//     <div className="flex flex-col gap-16">
//
//     </div>
//   );
// }
'use client';
import { useState } from "react";
import Image from "next/image";

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log(`Search for ${searchTerm}`);
    // Here, you would implement your search functionality
  };

  return (
    <div className="flex flex-col gap-16 bg-green-100 min-h-screen p-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-green-900">Free Auslan Dictionary</h1>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center mb-4">
          <input
            className="shadow appearance-none border rounded-l py-2 px-3 text-grey-darker"
            type="text"
            placeholder="Search for a Sign"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-r"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Placeholder for search results */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* ... */}
        </div>
      </div>
    </div>
  );
}
