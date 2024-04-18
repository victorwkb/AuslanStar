import React from "react";
import FlipCard from "@/components/FlipCard";
import styles from "@/styles/FlipCard.module.css";

const cardData = [
  {
    id: 1,
    frontContent: "Inclusive Communication",
    backContent:
      "Creating an environment that encourages effective communication between deaf children and their peers, fostering mutual understanding.",
  },
  {
    id: 2,
    frontContent: "Role Comprehension",
    backContent:
      "Assisting deaf children in understanding and simulating various roles in social interactions through targeted teaching.",
  },
  {
    id: 3,
    frontContent: "Independent Socialization",
    backContent:
      "Enhancing the ability of deaf children to form friendships on their own through group activities and games.",
  },

  {
    id: 4,
    frontContent: "Confidence Building",
    backContent:
      "Actively praising the social contributions of deaf children to help them build confidence within the group.",
  },
  {
    id: 5,
    frontContent: "Positive Self-Awareness",
    backContent:
      "Educating deaf children to understand their deafness and how it impacts their personal development.",
  },

  {
    id: 6,
    frontContent: "Autonomous Behavior",
    backContent:
      "Offering opportunities within activities for deaf children to make their own choices, fostering independence.",
  },
  {
    id: 7,
    frontContent: "Behavioral Understanding",
    backContent:
      "Ensuring that deaf children understand behavioral rules and recognize the impact of their actions on others.",
  },
  {
    id: 9,
    frontContent: "Self-Advocacy Skills",
    backContent:
      "Teaching deaf children how to speak up for their needs and advocate for themselves.",
  },
  // more card info
];

const SocialAndEmotion = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-green-100">
        <div className="max-w-5xl px-4 py-10 max-container padding-container">
          <h1 className="text-5xl font-bold text-white leading-tight whitespace-normal">
            Social and Emotion
          </h1>
          <p className="text-2xl text-white mt-2">
            A quick guide to communication
          </p>
        </div>
      </div>

      {/* Topic 1 */}
      <div className="max-w-5xl px-4 pt-8 pb-2 max-container padding-container">
        <h1 className="text-2xl font-bold mb-4">
          Promoting Social Integration
        </h1>
      </div>

      {/* Cards 1-3 */}
      <div className="container mx-auto px-4 pt-2 pb-4 mt-0 mb-4 max-container padding-container">
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
          Building Self-Esteem and Self-Image
        </h1>
      </div>

      {/* Cards 4-5 */}
      <div className="container mx-auto px-4 pt-2 pb-6 mt-0 mb-4 max-container padding-container">
        <div className="flex flex-wrap -mx-2">
          <div className={styles.cardContainer}>
            {cardData.slice(3, 5).map((card) => (
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
          Independence and Self-Advocacy
        </h1>
      </div>

      {/* Cards 6-9 */}
      <div className="container mx-auto px-4 pt-2 pb-6 mt-0 mb-4 max-container padding-container">
        <div className="flex flex-wrap -mx-2">
          <div className={styles.cardContainer}>
            {cardData.slice(5, 9).map((card) => (
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
          href="https://www.aussiedeafkids.org.au/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#aaa", textDecoration: "underline" }}
        >
          Aussie Deaf Kids
        </a>
        <br />
        Disclaimer: The information contained on this website is not intended as
        a substitute for independent professional advice.
      </footer>
    </div>
  );
};

export default SocialAndEmotion;
