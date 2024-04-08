import { Metadata } from "next";
import Link from "next/link"
import Image from 'next/image';

export default function Resources() {
    return (
        <><div className="bg-green-100">
            <div className="max-w-5xl px-4 py-10 max-container padding-container">
                <h1 className="text-5xl font-bold text-white leading-tight whitespace-normal">
                    The bebefits of Learning Auslan
                </h1>
            </div>

        </div><div className="container max-container padding-container px-4 py-4">
                {/* topic 1*/}
                <h1 className="text-2xl font-bold mb-4 ">What is Auslan?</h1>
                <div className="quote">
                    Australian Sign Language, the native language of the Australian Deaf community, and is a visual-spatial, natural language with its own grammar and vocabulary.
                </div>

                <h1 className="text-2xl font-bold mb-4 py-4 ">What Are the Benefits of Learning Auslan?</h1>
                <section className="mb-4">
                    <div className="quote mb-2">
                        Enhance children’s educational and personal development
                    </div>
                    <div className="quote mb-2">
                        Increase memory retention and motion processing
                    </div>
                    <div className="quote mb-2">
                        Stimulate brain development and mental flexibility
                    </div>
                    <div className="quote mb-2">
                        Increase enjoyment in communicating for both hearing and deaf children
                    </div>
                </section>

                <h1 className="text-2xl font-bold mb-4 py-4 ">What Are the Benefits of Learning Auslan?</h1>
                <section className="mb-4">
                    <div className="quote mb-2">
                        Enhance children’s educational and personal development
                    </div>
                    <div className="quote mb-2">
                        Increase memory retention and motion processing
                    </div>
                    <div className="quote mb-2">
                        Stimulate brain development and mental flexibility
                    </div>
                    <div className="quote mb-2">
                        Increase enjoyment in communicating for both hearing and deaf children
                    </div>
                </section>

                <h1 className="text-2xl font-bold mb-4 py-6">Lifetime Benefit of Learning Auslan</h1>
                <div className="relative w-full quote mb-2">
                <h1 className="mb-2">Learn Australian Sign Language (Auslan) with lifelong benefits.</h1>
                    <Image
                        src="/benefits/lifetime benefits.png"
                        alt="Picture of the author"
                        width={800} 
                        height={800}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    />
                </div>

                <h1 className="text-2xl font-bold mb-4 py-6 ">Educational Outcome at Age 10</h1>
                <h1 className="mb-2">Early learning Auslan has a positive impact on improving children's later learning outcomes and cognitive development.</h1>
                <div className="relative w-full quote mb-2">
                    <Image
                        src="/benefits/educational outcome.png"
                        alt="Picture of the author"
                        width={800} 
                        height={800}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    />
                </div>







            </div ></>
    );
}
