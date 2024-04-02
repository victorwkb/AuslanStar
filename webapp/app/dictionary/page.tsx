import { Metadata } from "next";
import Link from "next/link"


export default function Dictionary() {
  return (
    <div className="flex flex-col gap-16">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">Blog</h1>
        <p className="animate-in text-secondary" >
          Posts about coding, hackathons and more ...
        </p>

          <Link href="/">Link to Home Page</Link>

      </div>
      <p className="animate-in text-secondary" >
        Coming soon...
      </p>
    </div>
  );
}
