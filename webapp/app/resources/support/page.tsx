import Link from "next/link";
import React from "react";
import Image from "next/image";

const ResourcesPage = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-green-100">
        <div className="max-w-5xl px-4 py-10 max-container padding-container">
          <h1 className="text-5xl font-bold text-white leading-tight whitespace-normal">
            How to Support Hearing-Impaired Children
          </h1>
          <p className="text-2xl text-white mt-2">
            Discover effective strategies and resources to support
            hearing-impaired children in their journey.
          </p>
        </div>
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
            <Link href = "/resources/support/socialandemotion">
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
    </div>
  );
};

export default ResourcesPage;

