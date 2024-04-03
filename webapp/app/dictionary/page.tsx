import { Metadata } from "next";
import Link from "next/link"

// //
// // export default function Dictionary() {
// //   return (
// //     <div className="flex flex-col gap-16">
// //
// //     </div>
// //   );
// // }
// 'use client';
// import { useState } from "react";
// import Image from "next/image";
//
// export default function Dictionary() {
//   const [searchTerm, setSearchTerm] = useState("");
//
//   const handleSearch = () => {
//     console.log(`Search for ${searchTerm}`);
//     // Here, you would implement your search functionality
//   };
//
//   return (
//     <div className="flex flex-col gap-16 bg-green-100 min-h-screen p-10">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-semibold text-green-800">Free Auslan Dictionary</h1>
//       </div>
//
//       <div className="flex flex-col items-center">
//         <div className="flex items-center mb-4">
//           <input
//             className="shadow appearance-none border rounded-l py-2 px-3 text-grey-darker"
//             type="text"
//             placeholder="Search for a Sign"
//             onChange={(e) => setSearchTerm(e.target.value)}
//             value={searchTerm}
//           />
//           <button
//             className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-r"
//             onClick={handleSearch}
//           >
//             Search
//           </button>
//         </div>
//
//         {/* Placeholder for search results */}
//         <div className="flex flex-wrap justify-center gap-4">
//           {/* ... */}
//         </div>
//       </div>
//     </div>
//   );
// }


'use client'; // Make sure this is the very first line in your file

import React, { useState } from 'react';
import Image from 'next/image';

export default function Dictionary() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        // Implement your search functionality
        console.log(`Search for ${searchTerm}`);
    };

    return (
        <div className="flex flex-col items-center justify-center bg-green-100 min-h-screen p-10">
            <header className="layout-header text-center">
                <h1 className="text-5xl text-primary font-bold">Free Auslan Dictionary</h1>
                <p className="text-secondary mt-1 text-lg">Find signs and meanings easily</p>
                <p className="text-tertiary mt-1 text-md">Enter a word or sentence to see the corresponding Auslan sign
                    video.</p>
            </header>

            <div className="flex flex-col items-center w-full max-w-md">
                <input
                    className="w-full shadow appearance-none border rounded py-3 px-4 text-grey-darker text-lg"
                    type="text"
                    placeholder="Type a word or sentence here"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
                <button
                    className="w-full bg-green-500 hover:bg-green-700 text-white py-3 px-4 rounded mt-4 text-lg"
                    onClick={handleSearch}
                >
                    Search
                </button>
                <p className="text-center text-sm text-gray-600 mt-4">Results will appear here</p>
            </div>
        </div>
    );
}