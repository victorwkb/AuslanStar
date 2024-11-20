import React from "react";
import FlipCard from "@/components/FlipCard";
import styles from "@/styles/FlipCard.module.css";

const cardData = [
  {
    id: 1,
    frontContent: "Practice active listening during conversations",
    backContent:
      "Pay close attention to verbal and non-verbal cues and really try to understand what they are saying and feeling.",
  },
  {
    id: 2,
    frontContent: "Value their opinions and foster sound decision making",
    backContent:
      "Try to solve problems together in a positive and calm way and encourage them to think about the pros and cons by considering other perspectives.",
  },
  {
    id: 3,
    frontContent: "Offer them space when they ask for it",
    backContent:
      "If your child is slow to communicate with you, don't take it personally. Be supportive and remind them that you can talk to them when they are ready.",
  },
  {
    id: 4,
    frontContent: "Give your child responsibility",
    backContent:
      "Learning to manage new responsibilities is the first step in building independence. Start with small responsibilities and gradually take on larger and more complex responsibilities.",
  },
  {
    id: 5,
    frontContent: "Praise your child",
    backContent:
      "Use descriptive praise and encouragement to build confidence.",
  },
  {
    id: 6,
    frontContent: "Create comfort in the familiar",
    backContent:
      "Family rituals and routines can help children with hearing loss gain a sense of control and establish some predictability.",
  },
  {
    id: 7,
    frontContent: "Reinforce truths about their hearing loss",
    backContent:
      "Help children identify and resist negative influences by nurturing their pride and interest in exploration, and planning together to achieve future goals.",
  },
  {
    id: 8,
    frontContent: "Seek out positive role models",
    backContent:
      "Showing children with hearing loss positive role models can boost their self-confidence and inspire them to overcome challenges and achieve success in the future.",
  },
  // more card info
];

const BuildConfidence = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-green-100">
        <div className="animate-in max-w-5xl px-4 py-10 max-container padding-container">
          <h1 className="text-5xl font-bold text-white leading-tight whitespace-normal">
            Build Confidence
          </h1>
          <p className="text-2xl text-white mt-2">
            8 tips for parents to build confidence in kids with hearing loss
          </p>
        </div>
      </div>

      {/* Topic 1 */}
      <div className="max-w-5xl px-4 pt-8 pb-2 max-container padding-container">
        <h1 className="text-2xl font-bold mb-4">
          8 tips for parents to build confidence in kids with hearing loss
        </h1>
      </div>

      {/* Cards 1-3 */}
      <div className="container mx-auto px-4 pt-2 pb-6 mt-0 mb-4 max-container padding-container">
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

      {/* Cards 4-6 */}
      <div className="container mx-auto px-4 pt-2 pb-6 mt-0 mb-4 max-container padding-container">
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

      {/* Reference and Disclaimer */}
      <footer className="text-xs text-slate-400 text-center mt-6 p-3">
        Reference: Information supplied by{" "}
        <a
          href="https://hearandnow.cochlear.com/hearing-solutions/services/kids-with-hearing-loss/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#aaa", textDecoration: "underline" }}
        >
          Cochlear
        </a>
        <br />
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

export default BuildConfidence;
