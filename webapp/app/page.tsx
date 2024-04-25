import Link from "next/link";
import { NAV_LINKS, RESOURCE_LINKS } from "@/constants";
export default function Home() {
  const dictionaryLink = NAV_LINKS.find((link) => link.key === "dictionary")!;
  const simulatorLink = RESOURCE_LINKS.find((link) => link.key === "simulator")!;
  return (
    <>
      <div className="animate-in">
        <svg width="100%" height="150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"
          preserveAspectRatio="none" style={{ display: 'block' }}>
          <path fill="#FEE2E2"
            d="M0,0 L48,14.7 C96,29,192,59,288,74.7 C384,91,480,101,576,85.3 C672,69,768,27,864,16 C960,5,1056,35,1152,48 C1248,61,1344,59,1392,57.3 L1440,56 L1440,150 L1392,150 C1344,150,1248,150,1152,150 C1056,150,960,150,864,150 C768,150,672,150,576,150 C480,150,384,150,288,150 C192,150,96,150,48,150 L0,150 Z"></path>
        </svg>
        <div
          className=" bg-red-100 min-h-[600px]" style={{ marginTop: '-1px' }}>
          <div
            className="animate-in container mx-auto px-4 sm:px-6 lg:px-8 py-12"
            style={{ "--index": 1 } as React.CSSProperties}
          >
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

                  <Link href={simulatorLink.href}>
                    <p className="transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg bg-white rounded-xl py-6 px-12 text-xl font-semibold text-custom-purple-light shadow-md cursor-pointer capitalize">
                      {simulatorLink.label}
                    </p>
                  </Link>

                </div>
              </div>
              <img
                className="rounded-xl shadow-lg"
                src="/homepage.png"
                alt="Communicate with Auslan"
              />
            </div>
          </div>
        </div>
      </div>
      <svg width="100%" height="20%" id="svg" className="fill-current bg-red-100 text-indigo-900"
        viewBox="0 80 1440 70" xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 L 0,150 C 84.29999999999998,140.8948717948718 168.59999999999997,131.78974358974358 248,125 C 327.40000000000003,118.2102564102564 401.9,113.73589743589744 475,123 C 548.1,132.26410256410256 619.8,155.26666666666668 714,146 C 808.2,136.73333333333332 924.9000000000001,95.19743589743588 1001,87 C 1077.1,78.80256410256412 1112.6,103.94358974358974 1179,120 C 1245.4,136.05641025641026 1342.7,143.02820512820512 1440,150 L 1440,400 L 0,400 Z"></path>
      </svg>

    </>
  );
}

//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.6" d="M0,128L26.7,149.3C53.3,171,107,213,160,197.3C213.3,181,267,107,320,85.3C373.3,64,427,96,480,112C533.3,128,587,128,640,149.3C693.3,171,747,213,800,240C853.3,267,907,277,960,240C1013.3,203,1067,117,1120,112C1173.3,107,1227,181,1280,202.7C1333.3,224,1387,192,1413,176L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>

