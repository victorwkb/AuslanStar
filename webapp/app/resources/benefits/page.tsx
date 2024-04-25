import Image from "next/image";
import React from "react";
//
export default function Resources() {
  return (
      <>
        <div className="bg-green-100">
          <div className="max-w-5xl px-4 py-10 max-container padding-container">
            <h1 className="text-5xl font-bold text-white leading-tight whitespace-normal">
              The benefits of Learning Auslan
            </h1>
            <p className="text-2xl text-white mt-2">
              Unlocking the Power of Non-Verbal Communication
            </p>
          </div>
        </div>
        <div className="container max-container padding-container px-4 py-4">
          {/* topic 1*/}
          <h1 className="text-2xl font-bold mb-4 ">What is Auslan?</h1>
          <div className="quote">
            <span className="font-bold">Australian Sign Language</span>, the
            native language of the Australian Deaf community, and is a
            visual-spatial, natural language with its own grammar and vocabulary.
          </div>

          <h1 className="text-2xl font-bold mb-4 py-4 ">
            What Are the Benefits of Learning Auslan?
          </h1>
          <section className="mb-4">
            <div className="quote mb-2">
              Enhance children’s <span className="font-bold">educational</span>{" "}
              and <span className="font-bold">personal development</span>
            </div>
            <div className="quote mb-2">
              Increase <span className="font-bold">memory retention</span> and{" "}
              <span className="font-bold">motion processing</span>
            </div>
            <div className="quote mb-2">
              Stimulate <span className="font-bold">brain development</span> and{" "}
              <span className="font-bold">mental flexibility</span>
            </div>
            <div className="quote mb-2">
              Increase{" "}
              <span className="font-bold">enjoyment in communicating </span>for
              both hearing and deaf children
            </div>
          </section>

          <h1 className="text-2xl font-bold mb-4 py-6">
            Lifetime Benefit of Learning Auslan
          </h1>
          <div className="relative w-full quote mb-2">
            <h1 className="mb-2">
              Learn Australian Sign Language (Auslan) with economic, educational, health benefits.
            </h1>
            <Image
                src="/benefits/lifetime benefits.png"
                alt="Picture of the author"
                width={800}
                height={800}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
            />
          </div>

          <h1 className="text-2xl font-bold mb-4 py-6 ">
            Educational Outcome at Age 10
          </h1>
          <div className="relative w-full quote mb-2">
            <h1 className="mb-2">
              Early learning Auslan has a positive impact on improving children's
              later learning outcomes and cognitive development.
            </h1>
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
          <footer className="text-xs text-slate-400 text-center mt-6 p-3">
            Reference: Information supplied by{" "}
            <a
                href="https://www.vic.gov.au/education"
                target="_blank"
                rel="noopener noreferrer"
                style={{color: "#aaa", textDecoration: "underline"}}
            >
              VIC.GOV.AC
            </a>
            <br/>
            Disclaimer: The information contained on this website is not intended
            as a substitute for independent professional advice.
          </footer>
        </div>
        <svg width="100%" height="20%" id="svg" className="fill-current bg-yellow-50 text-indigo-900 pt-8"
             viewBox="0 80 1440 70" xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M 0,400 L 0,150 C 84.29999999999998,140.8948717948718 168.59999999999997,131.78974358974358 248,125 C 327.40000000000003,118.2102564102564 401.9,113.73589743589744 475,123 C 548.1,132.26410256410256 619.8,155.26666666666668 714,146 C 808.2,136.73333333333332 924.9000000000001,95.19743589743588 1001,87 C 1077.1,78.80256410256412 1112.6,103.94358974358974 1179,120 C 1245.4,136.05641025641026 1342.7,143.02820512820512 1440,150 L 1440,400 L 0,400 Z"></path>
        </svg>
      </>
  );
}
