import React from "react";
import FlipCard from "@/components/FlipCard";
import styles from "@/styles/FlipCard.module.css";

const cardData = [
  {
    id: 1,
    frontContent: "Well-Lit",
    backContent:
      "Use good lighting and avoid standing with your back to the window to reduce shadows on facial expressions and lip-reading.",
  },
  {
    id: 2,
    frontContent: "Proper Distance",
    backContent:
      "Keep a distance of one to two meters to facilitate signing or lip-reading while maintaining good eye contact.",
  },
  {
    id: 3,
    frontContent: "Minimize Background Noise",
    backContent:
      "Try to minimize background noise. Carpets or curtains can help absorb sound in the room, which is especially important for children using hearing aids or cochlear implants.",
  },

  {
    id: 4,
    frontContent: "Clear Pronunciation",
    backContent:
      "Speak clearly, naturally, and at a normal pace. Avoid shouting, as it may appear angry to your child and distorts lip patterns.",
  },
  {
    id: 5,
    frontContent: "Use Gestures",
    backContent:
      "Even if your child does not use sign language, using hand gestures and facial expressions to support your words can be helpful.",
  },
  {
    id: 6,
    frontContent: "Avoid Covering Your Face",
    backContent:
      "Don't eat, smoke, or block your face while talking. Keep beards trimmed, and ensure glasses don't hinder eye contact.",
  },

  {
    id: 7,
    frontContent: "Take Turns Speaking",
    backContent:
      "Ensure only one person speaks at a time in group settings. The speaker can raise their hand so the child knows who is speaking.",
  },
  {
    id: 8,
    frontContent: "Signal Topic Changes",
    backContent:
      "Make sure to signal when the topic of conversation changes to avoid confusing the child.",
  },

  {
    id: 9,
    frontContent: "Simplify Language",
    backContent:
      "f a word or sign is not easily understood, try using a more common word or sign with the same meaning.",
  },
  {
    id: 10,
    frontContent: "Check for Understanding",
    backContent:
      "Pause between sentences to check if your child has understood you, and make sure you have understood them. Encourage them to stop you if they do not understand what is being discussed.",
  },
  // more card info
];

const CommunicationStrategies = () => {
  return (
      <div>
        {/* Header */}
        <div className="bg-amber-200">
          <div className="max-w-5xl px-4 py-10 max-container padding-container">
            <h1 className="text-5xl font-bold text-white leading-tight whitespace-normal">
              Communication Strategies
            </h1>
            <p className="text-2xl text-white mt-2">
              A quick guide to communication
            </p>
          </div>
          <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"
               preserveAspectRatio="none" style={{display: 'block'}}>
            {/* Modify the fill color to match your bg-green-100; use the correct color code */}
            <path fill="#FEFCE8"
                  d="M0,0 L48,14.7 C96,29,192,59,288,74.7 C384,91,480,101,576,85.3 C672,69,768,27,864,16 C960,5,1056,35,1152,48 C1248,61,1344,59,1392,57.3 L1440,56 L1440,150 L1392,150 C1344,150,1248,150,1152,150 C1056,150,960,150,864,150 C768,150,672,150,576,150 C480,150,384,150,288,150 C192,150,96,150,48,150 L0,150 Z"></path>
          </svg>
        </div>

        {/* Topic 1 */}
        <div className="max-w-5xl px-4 pt-8 pb-2 max-container padding-container">
          <h1 className="text-2xl font-bold mb-4">
            What to Consider in the Communication Environment?
          </h1>
        </div>

        {/* Cards 1-3 */}
        <div className="container mx-auto pt-2 pb-6 mt-0 mb-4 max-container padding-container">
          <div className="flex flex-wrap -mx-2">
            <div className={styles.cardContainer}>
              {cardData.slice(0, 3).map((card) => (
                  <FlipCard
                      key={card.id}
                      frontContent={card.frontContent}
                      backContent={card.backContent}
                  />
              ))}
            </div>
          </div>
        </div>

        {/* Topic 2 */}
        <div className="max-w-5xl px-4 pt-8 pb-2 max-container padding-container">
          <h1 className="text-2xl font-bold mb-4">
            How to Ensure Effective Communication?
          </h1>
        </div>

        {/* Cards 4-6 */}
        <div className="container mx-auto pt-2 pb-6 mt-0 mb-4 max-container padding-container">
          <div className="flex flex-wrap -mx-2">
            <div className={styles.cardContainer}>
              {cardData.slice(3, 6).map((card) => (
                  <FlipCard
                      key={card.id}
                      frontContent={card.frontContent}
                      backContent={card.backContent}
                  />
              ))}
            </div>
          </div>
        </div>

        {/* Topic 3 */}
        <div className="max-w-5xl px-4 pt-8 pb-2 max-container padding-container">
          <h1 className="text-2xl font-bold mb-4">
            Communication Strategies in Groups
          </h1>
        </div>

        {/* Cards 7-8 */}
        <div className="container mx-auto px-4 pt-2 pb-6 mt-0 mb-4 max-container padding-container">
          <div className="flex flex-wrap -mx-2">
            <div className={styles.cardContainer}>
              {cardData.slice(6, 8).map((card) => (
                  <FlipCard
                      key={card.id}
                      frontContent={card.frontContent}
                      backContent={card.backContent}
                  />
              ))}
            </div>
          </div>
        </div>

        {/* Topic 4 */}
        <div className="max-w-5xl px-4 pt-8 pb-2 max-container padding-container">
          <h1 className="text-2xl font-bold mb-4">
            Enhancing Understanding and Feedback
          </h1>
        </div>

        {/* Cards 9-10 */}
        <div className="container mx-auto px-4 pt-2 pb-6 mt-0 mb-4 max-container padding-container">
          <div className="flex flex-wrap -mx-2">
            <div className={styles.cardContainer}>
              {cardData.slice(8, 10).map((card) => (
                  <FlipCard
                      key={card.id}
                      frontContent={card.frontContent}
                      backContent={card.backContent}
                  />
              ))}
            </div>
          </div>
        </div>

        {/* Reference and Disclaimer */}
        <footer className="text-xs text-slate-400 text-center mt-6 p-3">
          Reference: Information supplied by{" "}
          <a
              href="https://www.aussiedeafkids.org.au/resources/language-and-communication/"
              target="_blank"
              rel="noopener noreferrer"
              style={{color: "#aaa", textDecoration: "underline"}}
          >
            Aussie Deaf Kids
          </a>
          <br/>
          Disclaimer: The information contained on this website is not intended as
          a substitute for independent professional advice.
        </footer>
        <svg width="100%" height="20%" id="svg" className="fill-current bg-yellow-50 text-indigo-900 pt-8"
             viewBox="0 80 1440 70" xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M 0,400 L 0,150 C 84.29999999999998,140.8948717948718 168.59999999999997,131.78974358974358 248,125 C 327.40000000000003,118.2102564102564 401.9,113.73589743589744 475,123 C 548.1,132.26410256410256 619.8,155.26666666666668 714,146 C 808.2,136.73333333333332 924.9000000000001,95.19743589743588 1001,87 C 1077.1,78.80256410256412 1112.6,103.94358974358974 1179,120 C 1245.4,136.05641025641026 1342.7,143.02820512820512 1440,150 L 1440,400 L 0,400 Z"></path>
        </svg>
      </div>
  );
};

export default CommunicationStrategies;
