
// import Head from "next/head";
//
// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Practice Australian Sign Language</title>
//       </Head>
//       <div className="bg-green-100 min-h-screen">
//         <div className="relative overflow-hidden">
//           <div className="max-w-7xl mx-auto">
//             <div className="relative z-10 pb-8 bg-green-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
//               <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-green-100 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
//                 <polygon points="50,0 100,0 50,100 0,100" />
//               </svg>
//               <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
//                 <div className="sm:text-center lg:text-left">
//                   <h1 className="text-5xl tracking-tight font-extrabold text-teal-600 sm:text-6xl md:text-7xl">
//                     Practice Australian Sign Language
//                   </h1>
//                   <p className="mt-3 text-xl sm:mt-5 sm:text-2xl lg:mx-0 text-teal-800">
//                     Empowering Voices through Auslan (Australian Sign Language)
//                   </p>
//
//                 </div>
//               </main>
//             </div>
//           </div>
//           <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
//             <img className="h-100 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/homepage.png"
//                  alt=""/>
//           </div>
//         </div>
//         <div className="max-w-md mx-auto grid grid-cols-2 gap-4 py-10">
//           {/* Link components */}
//         </div>
//       </div>
//     </>
//   );
// }
//

//
// import Head from "next/head";
//
// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Practice Australian Sign Language</title>
//       </Head>
//       <div className="min-h-screen bg-gradient-to-r bg-green-100">
//         <div className="relative overflow-hidden">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div
//                 className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 shadow-lg rounded-b-3xl">
//               <svg
//                   className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
//                   fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
//                 <polygon points="50,0 100,0 50,100 0,100"/>
//               </svg>
//               <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
//                 <div className="sm:text-center lg:text-left">
//                   <h1 className="text-5xl tracking-tight font-extrabold text-gray-800 sm:text-6xl md:text-7xl">
//                     Practice Australian Sign Language
//                   </h1>
//                   <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg lg:mx-0">
//                     Empowering Voices through Auslan (Australian Sign Language)
//                   </p>
//                 </div>
//               </main>
//             </div>
//           </div>
//           <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
//             <img className="h-200 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/homepage.png" alt=""/>
//           </div>
//         </div>
//         <div className="py-10">
//           {/* Link components */}
//         </div>
//       </div>
//     </>
//   );
// }
//
//




import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Practice Australian Sign Language</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-r bg-green-100">
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
                className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 shadow-lg rounded-b-3xl">
              <svg
                  className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                  fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100"/>
              </svg>
              <main className="mt-20 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 md:mt-28 lg:mt-32 lg:px-8 xl:mt-36">
                <div className="mt-10"></div>
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-5xl tracking-tight font-extrabold text-purple-300 sm:text-6xl md:text-7xl">
                    Practice Australian Sign Language
                  </h1>
                  <div className="mt-10"></div>

                  <p className="mt-3 text-xl sm:mt-5 sm:text-2xl lg:mx-0 text-teal-800">
                    Empowering Voices through Auslan
                  </p>
                  <p className="mt-3 text-xl sm:mt-0 sm:text-2xl lg:mx-0 text-teal-800">
                    (Australian Sign Language)
                  </p>


                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-200 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/homepage.png" alt=""/>
          </div>
        </div>
        <div className="py-10">
          {/* Link components */}
        </div>
      </div>
    </>
  );
}


