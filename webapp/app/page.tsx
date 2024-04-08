import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Practice Australian Sign Language</title>
      </Head>
      <div className="bg-green-100 min-h-screen">
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-green-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-green-100 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-green-600 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Practice Australian Sign Language</span>{' '}
                    <span className="block text-green-800 xl:inline">Empowering Voices through Auslan (Australian Sign Language)</span>
                  </h1>
                  {/*<p className="mt-3 text-base text-green-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">We have translated nearly 2 billion words since the Hand Talk Plugin was launched in Brazil.</p>*/}
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link href="/get-access">
                        <p className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                          Get early access to the platform
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/path-to-your-image.jpg" alt="" />
          </div>
        </div>
        <div className="max-w-md mx-auto grid grid-cols-2 gap-4 py-10">
          {/* Link components */}
        </div>
      </div>
    </>
  );
}
