import Image from "next/image";
import React from "react";
//
export default function Resources() {
  return (
      <>
        <div className="bg-amber-200">
          <div className="animate-in max-w-5xl px-4 py-10 max-container padding-container">
            <h1 className="text-5xl font-bold text-white leading-tight whitespace-normal">
              The benefits of Learning Auslan
            </h1>
            <p className="text-2xl text-white mt-2">
              Unlocking the Power of Non-Verbal Communication
            </p>
          </div>
          <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"
               preserveAspectRatio="none" style={{display: 'block'}}>
            {/* Modify the fill color to match your bg-green-100; use the correct color code */}
            <path fill="#FEFCE8"
                  d="M0,0 L48,14.7 C96,29,192,59,288,74.7 C384,91,480,101,576,85.3 C672,69,768,27,864,16 C960,5,1056,35,1152,48 C1248,61,1344,59,1392,57.3 L1440,56 L1440,150 L1392,150 C1344,150,1248,150,1152,150 C1056,150,960,150,864,150 C768,150,672,150,576,150 C480,150,384,150,288,150 C192,150,96,150,48,150 L0,150 Z"></path>
          </svg>
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
