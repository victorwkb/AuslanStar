import Link from "next/link";
import React from "react";
import Image from "next/image";

const ResourcesPage = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-amber-200">
        <div className="animate-in max-w-5xl px-4 py-10 max-container padding-container">
          <h1 className="text-5xl font-bold text-white leading-tight whitespace-normal">
            How to Support Hearing-Impaired Children
          </h1>
          <p className="text-2xl text-white mt-2">
            Discover effective strategies and resources to support
            hearing-impaired children in their journey.
          </p>
        </div>
        <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"
          preserveAspectRatio="none" style={{ display: 'block' }}>
          {/* Modify the fill color to match your bg-green-100; use the correct color code */}
          <path fill="#FEFCE8"
            d="M0,0 L48,14.7 C96,29,192,59,288,74.7 C384,91,480,101,576,85.3 C672,69,768,27,864,16 C960,5,1056,35,1152,48 C1248,61,1344,59,1392,57.3 L1440,56 L1440,150 L1392,150 C1344,150,1248,150,1152,150 C1056,150,960,150,864,150 C768,150,672,150,576,150 C480,150,384,150,288,150 C192,150,96,150,48,150 L0,150 Z"></path>
        </svg>
      </div>

      <div className="max-container padding-container px-4 py-6">
        <div className="grid grid-cols-2 gap-6 -mx-2 ">
          {/* Cards 1 */}
          <div className="w-full px-2 mb-4">
            <Link href="/resources/support/communicationstrategies">
              <div className="bg-white rounded overflow-hidden shadow-lg cursor-pointer">
                <div className="h-52 sm:h-64 relative">
                  <Image
                    src="/support/communication strategies.png"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    alt="Description"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-2xl mb-2">
                    Communication Strategies
                  </div>
                  <p className="text-gray-700 text-1xl">
                    As children grow, it's important to communicate well with
                    them, and with the deaf adults you meet.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <p className="text-indigo-600 hover:text-indigo-900 arrow">
                    Start to Learn
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Cards 2 */}
          <div className="w-full px-2 mb-4">
            <Link href="/resources/support/teachingstrategies">
              <div className="bg-white rounded overflow-hidden shadow-lg cursor-pointer">
                <div className="h-52 sm:h-64 relative">
                  <Image
                    src="/support/teching strategies.png"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    alt="Description"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-2xl mb-2">
                    Teaching Strategies
                  </div>
                  <p className="text-gray-700 text-1xl">
                    Individualized teaching support to ensure that they have equal
                    access to learning and activities.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <p className="text-indigo-600 hover:text-indigo-900 arrow">
                    Start to Learn
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Cards 3 */}
          <div className="w-full px-2 mb-4">
            <Link href="/resources/support/buildconfidence">
              <div className="bg-white rounded overflow-hidden shadow-lg cursor-pointer">
                <div className="h-52 sm:h-64 relative">
                  <Image
                    src="/support/buildconfidence.png"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    alt="Description"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-2xl mb-2">
                    Build Confidence
                  </div>
                  <p className="text-gray-700 text-1xl">
                    Confidence enables children to navigate life's hurdles with
                    resilience and poise.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <p className="text-indigo-600 hover:text-indigo-900 arrow">
                    Start to Learn
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Cards 4 */}
          <div className="w-full px-2 mb-4">
            <Link href="/resources/support/socialandemotion">
              <div className="bg-white rounded overflow-hidden shadow-lg cursor-pointer">
                <div className="h-52 sm:h-64 relative">
                  <Image
                    src="/support/social and emotion.png"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    alt="Description"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-2xl mb-2">
                    Social and Emotion
                  </div>
                  <p className="text-gray-700 text-1xl">
                    Promote social integration, establish a healthy self-image,
                    and cultivate independence and self-assertion.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <p className="text-indigo-600 hover:text-indigo-900 arrow">
                    Start to Learn
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* ...other cards */}
        </div>
      </div>
      <svg width="100%" height="20%" id="svg" className="fill-current bg-yellow-50 text-indigo-900 pt-8"
        viewBox="0 80 1440 70" xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 L 0,150 C 84.29999999999998,140.8948717948718 168.59999999999997,131.78974358974358 248,125 C 327.40000000000003,118.2102564102564 401.9,113.73589743589744 475,123 C 548.1,132.26410256410256 619.8,155.26666666666668 714,146 C 808.2,136.73333333333332 924.9000000000001,95.19743589743588 1001,87 C 1077.1,78.80256410256412 1112.6,103.94358974358974 1179,120 C 1245.4,136.05641025641026 1342.7,143.02820512820512 1440,150 L 1440,400 L 0,400 Z"></path>
      </svg>
    </div>
  );
};

export default ResourcesPage;

