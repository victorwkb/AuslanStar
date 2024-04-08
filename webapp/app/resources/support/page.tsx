import Link from "next/link"
import React from 'react';
import Image from 'next/image';


const ResourcesPage = () => {
    return (
        <div> 
            {/* Header */}
            <div className="bg-green-100">
                <div className="max-w-5xl px-4 py-10">
                    <h1 className="text-5xl font-bold text-white leading-tight whitespace-normal max-container padding-container">
                        How to Support Hearing-Impaired Children
                    </h1>
                    <p className="text-base text-white mt-2 max-container padding-container">
                        Discover effective strategies and resources to support hearing-impaired children in their journey.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-2 gap-6 -mx-2">

                    {/* Cards 1 */}
                    <div className="w-full px-2 mb-4">
                        <div className="bg-white rounded overflow-hidden shadow-lg">
                            <div className="h-32 sm:h-48 relative">
                                <Image
                                    src="/support/communication strategies.png"
                                    layout="fill"
                                    objectFit="cover"
                                    alt="Description"
                                />
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Communication Strategies</div>
                                <p className="text-gray-700 text-base">
                                    As children grow, it's important to communicate well with them, and with the deaf adults you meet.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <Link href="/resources/support/communicationstrategies" className="text-indigo-600 hover:text-indigo-900">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Cards 2 */}
                    <div className="w-full px-2 mb-4">
                        <div className="bg-white rounded overflow-hidden shadow-lg">
                            <div className="h-32 sm:h-48 relative">
                                <Image
                                    src="/support/teching strategies.png"
                                    layout="fill"
                                    objectFit="cover"
                                    alt="Description"
                                />
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Teaching Strategies</div>
                                <p className="text-gray-700 text-base">
                                    Individualized teaching support to ensure that they have equal access to learning and activities.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <Link href="/resources/support/teachingstrategies" className="text-indigo-600 hover:text-indigo-900">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Cards 3 */}
                    <div className="w-full px-2 mb-4">
                        <div className="bg-white rounded overflow-hidden shadow-lg">
                            <div className="h-32 sm:h-48 relative">
                                <Image
                                    src="/support/buildconfidence.png"
                                    layout="fill"
                                    objectFit="cover"
                                    alt="Description"
                                />
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Build Confidence</div>
                                <p className="text-gray-700 text-base">
                                    Confidence enables children to navigate life's hurdles with resilience and poise.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <a href="/resources/support/buildconfidence" className="text-indigo-600 hover:text-indigo-900">Learn More</a>
                            </div>
                        </div>
                    </div>

                    {/* Cards 4 */}
                    <div className="w-full px-2 mb-4">
                        <div className="bg-white rounded overflow-hidden shadow-lg">
                            <div className="h-32 sm:h-48 relative">
                                <Image
                                    src="/support/social and emotion.png"
                                    layout="fill"
                                    objectFit="cover"
                                    alt="Description"
                                />
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Social and Emotion</div>
                                <p className="text-gray-700 text-base">
                                    Promote social integration, establish a healthy self-image, and cultivate independence and self-assertion.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <a href="/resources/support/socialandemotion" className="text-indigo-600 hover:text-indigo-900">Learn More</a>
                            </div>
                        </div>
                    </div>
                    {/* ...other cards */}
                </div>
            </div>
        </div>
    );
}


export default ResourcesPage;