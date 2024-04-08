import Link from "next/link";
import Head from "next/head";
import {  NAV_LINKS, RESOURCE_LINKS } from "@/constants";
export default function Home() {
  const dictionaryLink = NAV_LINKS.find(link => link.key === 'dictionary')!;
  return (
    <>
      <Head>
        <title>Practice Australian Sign Language</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-r bg-green-100 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-6xl font-extrabold text-custom-purple-light">
                Practice Australian Sign Language
              </h1>
              <div className="mt-10"></div>
              <p className="mt-4 text-2xl font-semibold text-custom-purple-dark ">
                Empowering Voices through Auslan (Australian Sign Language)
              </p>
              <div className="mt-10"></div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                {/* Dictionary Link */}
                 <Link href={dictionaryLink.href}>
                <p className="transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg bg-white rounded-xl py-6 px-12 text-xl font-semibold text-custom-purple-light shadow-md cursor-pointer capitalize">
                  {dictionaryLink.label}
                </p>
              </Link>
                {/* Resource Links */}
                {RESOURCE_LINKS.map((link) => (
                  <Link key={link.key} href={link.href}>
                    <p className="transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg bg-white rounded-xl py-6 px-12 text-xl font-semibold text-custom-purple-light shadow-md cursor-pointer capitalize">
                      {link.label}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <img
              className="rounded-xl shadow-lg transform transition duration-300"
              src="/homepage.png"
              alt="Communicate with Auslan"
            />
          </div>
        </div>
      </div>
    </>
  );
}