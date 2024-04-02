import { Metadata } from "next";
import Link from "next/link"


export default function Resources() {
  return (
    <div className="flex flex-col gap-16">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">Blog</h1>

          <Link href="/">Link to Home Page</Link>

      </div>
      <p className="animate-in text-secondary" >
        Support
          Coming soon...
      </p>
    </div>
  );
}
