import React from "react";
import FlipCard from "@/components/FlipCard";
import styles from "@/styles/FlipCard.module.css";

const cardData = [
  {
    id: 11,
    frontContent: "Visual Support",
    backContent:
      "Use images, charts, and everyday items to reinforce understanding of language and concepts.",
  },
  {
    id: 12,
    frontContent: "Daily Routine",
    backContent: "How they look and sound, and what they’re called.",
  },
  {
    id: 3,
    frontContent: "Review & Repetition",
    backContent:
      "Deepen memory and understanding through repeating language patterns and daily activities.",
  },

  {
    id: 4,
    frontContent: "Activity Preparation",
    backContent:
      "Use images and items in advance to introduce upcoming activities or outings to deaf children, enhancing understanding and engagement.",
  },
  {
    id: 5,
    frontContent: "Reading & Storytelling",
    backContent:
      "Adjust reading methods to ensure rich pictorial content and use body language during storytelling.",
  },
  {
    id: 6,
    frontContent: "Expressive Creation",
    backContent:
      "Encourage deaf children to use facial expressions and gestures in storytelling to enhance participation and expression skills.",
  },

  {
    id: 7,
    frontContent: "Interactive Experience",
    backContent:
      "Offer activities with strong interactive elements, such as games and self-exploration, to encourage active learning.",
  },
  {
    id: 8,
    frontContent: "Educational Technology",
    backContent:
      "Utilize educational software and technologies suitable for deaf children, focusing on visual learning tools.",
  },

  {
    id: 9,
    frontContent: "Music & Group Time",
    backContent:
      "Consider the special needs of deaf children in music and group activities, ensuring visual accessibility and participation.",
  },
  {
    id: 10,
    frontContent: "Environmental Adaptation",
    backContent:
      "Create a deaf-friendly learning environment, including specially designed toys and teaching materials.",
  },
  // more card info
];

const TeachingStrategies = () => {
  return (
    <div>
      {/* Header */}
        <div className="bg-amber-200">
            <div className="animate-in max-w-5xl px-4 py-10 max-container padding-container">
                <h1 className="text-5xl font-bold text-white leading-tight whitespace-normal">
                    Teaching Strategies
                </h1>
                <p className="text-2xl text-white mt-2">
                    Provide personalized teaching support for deaf children, ensuring
                    equal participation in learning and activities.
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
        <div className="max-w-5xl px-4 pt-6 pb-2 max-container padding-container">
            <h1 className="text-2xl font-bold mb-4">Visual Aids & Routine</h1>
        </div>

        {/* Cards 1-3 */}
        <div className="container px-4 pt-2 pb-6 mt-0 mb-4 max-container padding-container">
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
      <div className="max-w-5xl px-4 pt-6 pb-2 max-container padding-container">
        <h1 className="text-2xl font-bold mb-4">
          Personalized Learning Experience
        </h1>
      </div>

      {/* Cards 4-6 */}
      <div className="container mx-auto px-4 pt-2 pb-6 mt-0 mb-2 max-container padding-container">
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
      <div className="max-w-5xl px-4 pt-6 pb-2 max-container padding-container">
        <h1 className="text-2xl font-bold mb-4">
          Interactive Learning & Technology
        </h1>
      </div>

      {/* Cards 7-8 */}
      <div className="container mx-auto px-4 pt-2 pb-6 mt-0 mb-2 max-container padding-container">
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
      <div className="max-w-5xl px-4 pt-6 pb-2 max-container padding-container">
        <h1 className="text-2xl font-bold mb-4">
          Inclusive Educational Environment
        </h1>
      </div>

      {/* Cards 9-10 */}
      <div className="container mx-auto px-4 pt-2 pb-6 mt-0 mb-2 max-container padding-container">
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
      <footer
        style={{
          fontSize: "12px",
          color: "#aaa",
          textAlign: "center",
          marginTop: "50px",
          padding: "10px",
        }}
      >
        Reference: Information supplied by{" "}
        <a
          href="https://www.cumbria.gov.uk/elibrary/Content/Internet/537/3953/6769/6772/41739151054.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#aaa", textDecoration: "underline" }}
        >
          National Sensory Impairment Partnership
        </a>
        <br />
        Disclaimer: The information contained on this website is not intended as
        a substitute for independent professional advice.
      </footer>
    </div>
  );
};

export default TeachingStrategies;
