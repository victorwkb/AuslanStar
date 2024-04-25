"use client"; // Make sure this is the very first line in your file

import React, { Suspense } from "react";
import SearchBar from "@/components/SearchBar";

export default function Dictionary() {
  return (
    <div>
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
          <Suspense>
            <SearchBar />
          </Suspense>
        </div>

      </div>

      <svg width="100%" height="20%" id="svg" className="fill-current bg-lime-100 text-indigo-900"
        viewBox="0 80 1440 70" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 0,400 L 0,150 C 84.29999999999998,140.8948717948718 168.59999999999997,131.78974358974358 248,125 C 327.40000000000003,118.2102564102564 401.9,113.73589743589744 475,123 C 548.1,132.26410256410256 619.8,155.26666666666668 714,146 C 808.2,136.73333333333332 924.9000000000001,95.19743589743588 1001,87 C 1077.1,78.80256410256412 1112.6,103.94358974358974 1179,120 C 1245.4,136.05641025641026 1342.7,143.02820512820512 1440,150 L 1440,400 L 0,400 Z"></path>
      </svg>
    </div>
  );
}
