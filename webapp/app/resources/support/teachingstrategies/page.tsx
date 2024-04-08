import React from 'react';
import FlipCard from '@/components/FlipCard';
import styles from '@/styles/FlipCard.module.css';

const cardData = [
  { id: 11, frontContent: 'Visual Support', backContent: 'Use images, charts, and everyday items to reinforce understanding of language and concepts.' },
  { id: 12, frontContent: 'Daily Routine', backContent: 'How they look and sound, and what they’re called.' },
  { id: 3, frontContent: 'Review & Repetition', backContent: 'Deepen memory and understanding through repeating language patterns and daily activities.' },

  { id: 4, frontContent: 'Activity Preparation', backContent: 'Use images and items in advance to introduce upcoming activities or outings to deaf children, enhancing understanding and engagement.' },
  { id: 5, frontContent: 'Reading & Storytelling', backContent: 'Adjust reading methods to ensure rich pictorial content and use body language during storytelling.' },
  { id: 6, frontContent: 'Expressive Creation', backContent: 'Encourage deaf children to use facial expressions and gestures in storytelling to enhance participation and expression skills.' },

  { id: 7, frontContent: 'Interactive Experience', backContent: 'Offer activities with strong interactive elements, such as games and self-exploration, to encourage active learning.' },
  { id: 8, frontContent: 'Educational Technology', backContent: 'Utilize educational software and technologies suitable for deaf children, focusing on visual learning tools.' },

  { id: 9, frontContent: 'Music & Group Time', backContent: 'Consider the special needs of deaf children in music and group activities, ensuring visual accessibility and participation.' },
  { id: 10, frontContent: 'Environmental Adaptation', backContent: 'Create a deaf-friendly learning environment, including specially designed toys and teaching materials.' },
  // more card info



];

const TeachingStrategies = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-green-100 max-container padding-container">
        <div className="max-w-5xl px-4 py-10">
          <h1 className="text-4xl font-bold text-white leading-tight whitespace-normal">
            Teaching Strategies
          </h1>
          <p className="text-base text-white mt-2">
            Provide personalized teaching support for deaf children, ensuring equal participation in learning and activities.
          </p>
        </div>
      </div>

      {/* Topic 1 */}
      <div className="max-w-5xl px-4 pt-6 pb-2 max-container padding-container">
        <h1 className="text-3xl font-bold mb-4">Visual Aids & Routine</h1>
      </div>


        {/* Cards 1-3 */}
        <div className="container mx-auto px-4 pt-2 pb-6 mt-0 mb-4">
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
        <h1 className="text-3xl font-bold mb-4">Personalized Learning Experience</h1>
      </div>
      <div className="max-w-5xl px-4 pt- pb-2 ml-16">
      </div>


        {/* Cards 4-6 */}
        <div className="container mx-auto px-4 pt-2 pb-6 mt-0 mb-2">
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
        <h1 className="text-3xl font-bold mb-4">Interactive Learning & Technology</h1>
      </div>
      <div className="max-w-5xl px-4 pt- pb-2 ml-16">
      </div>

        {/* Cards 7-8 */}
        <div className="container mx-auto px-4 pt-2 pb-6 mt-0 mb-2">
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
        <h1 className="text-3xl font-bold mb-4">Inclusive Educational Environment</h1>
      </div>
      <div className="max-w-5xl px-4 pt- pb-2 ml-16">


        {/* Cards 9-10 */}
        <div className="container mx-auto px-4 pt-2 pb-6 mt-0 mb-2">
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
      </div>
    {/* Reference and Disclaimer */}
    <footer style={{ fontSize: '12px', color: '#aaa', textAlign: 'center', marginTop: '50px', padding: '10px' }}>
                Reference: Information supplied by <a 
                    href="https://www.natsip.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#aaa', textDecoration: 'underline' }}
                >
                    National Sensory Impairment Partnership 
                </a>
                <br />Disclaimer: The information contained on this website is not intended as a substitute for independent professional advice.
            </footer>
    </div>
  );

}

export default TeachingStrategies;




