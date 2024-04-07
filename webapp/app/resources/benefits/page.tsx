import { Metadata } from "next";
import Link from "next/link"

export default function Resources() {
    return (
    <><div className="bg-gray-400">
            <div className="max-w-5xl px-4 py-10 ml-16">
                <h1 className="text-5xl font-bold text-white leading-tight whitespace-normal">
                    The bebefits of Learning Auslan
                </h1>
            </div>
        </div><div className="container mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold mb-4">What Are the Benefits of Learning Auslan?</h1>
                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-2">Social Interaction</h2>
                    <p className="text-base mb-6">
                        For someone who is deaf, learning Auslan can mean they are able to make friends more easily
                        and have more opportunities for social interaction and workplace progression. Instead of
                        relying on hearing aids, they will have a backup for any moments where they are interacting
                        with another person who knows Auslan. If you\'re not hearing impaired, but are interested
                        in learning Auslan, then it can also open up social interactions, as you will be able
                        to communicate with members of the deaf community.
                    </p>
                    <p className="text-base">
                        The more people who learn Auslan, the closer we are to creating a more inclusive society
                        for people with hearing impairments. There is also a sense of belonging to a community
                        when you know Auslan, as you immediately have something in common with others who know
                        the language.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-2">Cognitive Development</h2>
                    <p className="text-base">
                        Someone learning Auslan can actually experience improvements in their cognitive
                        development. These improvements can include increased mental flexibility and stimulated
                        brain development because your neural pathways are becoming more developed from learning
                        a visual language rather than using your normal spoken language. Learning Auslan can
                        also improve your brain’s motion processing and increase mental retention skills. Just
                        like with learning any other language, you gain a new, handy skill, and expand your
                        knowledge of how languages work.
                    </p>
                </section>
            </div></>
    );
}
