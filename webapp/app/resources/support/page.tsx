import Link from "next/link"
import React from 'react';



const ResourcesPage = () => {
    return (
        <div>
            {/* Header */}
            <div className="bg-gray-400">
                <div className="max-w-5xl px-4 py-10 ml-16">
                    <h1 className="text-5xl font-bold text-white leading-tight whitespace-normal">
                        How to Support Hearing-Impaired Children
                    </h1>
                    <p className="text-base text-white mt-2">
                        Discover effective strategies and resources to support hearing-impaired children in their journey.
                    </p>
                </div>
            </div>

            {/* Cards 1 */}
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-wrap -mx-2">
                    {/* Repeat this div for each card */}
                    <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
                        <div className="bg-white rounded overflow-hidden shadow-lg">
                            <div className="bg-gray-200 h-32 sm:h-48"></div>
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
                    <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
                        <div className="bg-white rounded overflow-hidden shadow-lg">
                            <div className="bg-gray-200 h-32 sm:h-48"></div>
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
                    <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
                        <div className="bg-white rounded overflow-hidden shadow-lg">
                            <div className="bg-gray-200 h-32 sm:h-48"></div>
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
                    <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
                        <div className="bg-white rounded overflow-hidden shadow-lg">
                            <div className="bg-gray-200 h-32 sm:h-48"></div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Social and Emotion</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
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