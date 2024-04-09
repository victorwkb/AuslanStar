import { Metadata } from "next";
import Link from "next/link"
import Image from 'next/image';

export default function Resources() {
    return (
        <><div className="bg-green-100">
            <div className="max-w-5xl px-4 py-10 max-container padding-container">
                <h1 className="text-5xl font-bold text-white leading-tight whitespace-normal">
                    The benefits of Learning Auslan
                </h1>
                <p className="text-2xl text-white mt-2">
                Unlocking the Power of Non-Verbal Communication
                </p>
            </div>

        </div><div className="container max-container padding-container px-4 py-4">
                {/* topic 1*/}
                <h1 className="text-2xl font-bold mb-4 ">What is Auslan?</h1>
                <div className="quote">
                    <span className="font-bold">Australian Sign Language</span>, the native language of the Australian Deaf community, and is a visual-spatial, natural language with its own grammar and vocabulary.
                </div>

                <h1 className="text-2xl font-bold mb-4 py-4 ">What Are the Benefits of Learning Auslan?</h1>
                <section className="mb-4">
                    <div className="quote mb-2">
                        Enhance children’s <span className="font-bold">educational</span> and <span className="font-bold">personal development</span>
                    </div>
                    <div className="quote mb-2">
                        Increase <span className="font-bold">memory retention</span> and <span className="font-bold">motion processing</span>
                    </div>
                    <div className="quote mb-2">
                        Stimulate <span className="font-bold">brain development</span> and <span className="font-bold">mental flexibility</span>
                    </div>
                    <div className="quote mb-2">
                        Increase <span className="font-bold">enjoyment in communicating </span>for both hearing and deaf children
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
                <div className="relative w-full quote mb-2">
                <h1 className="mb-2">Early learning Auslan has a positive impact on improving children's later learning outcomes and cognitive development.</h1>
                    <Image
                        src="/benefits/educational outcome.png"
                        alt="Picture of the author"
                        width={800} 
                        height={800}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    />
                </div>



            {/* Reference and Disclaimer */}
            <footer 
                className="text-xs text-slate-400 text-center mt-6 p-3"
                >
                Reference: Information supplied by <a
                    href="https://www.vic.gov.au/education"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#aaa', textDecoration: 'underline' }}
                >
                    VIC.GOV.AC
                </a>
                <br />Disclaimer: The information contained on this website is not intended as a substitute for independent professional advice.
            </footer>



            </div ></>

            
    );
}
