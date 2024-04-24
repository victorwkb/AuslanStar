import React from 'react';
import LevelCard from '@/components/LevelCard';

const SpellingPage = () => {
  const cardData = [
    {
      title: "Level 1",
      letters: "A B C D E F G H",
      detailLinks: [
        { label: 'Learn and Practice', path: '/resources/support/teachingstrategies' },
        { label: 'Take Quiz', path: '/resources/support/teachingstrategies' },
        { label: 'Start Game', path: '/resources/support/teachingstrategies' }
      ],
      bgColor: 'bg-green-300',
    },
    {
      title: "Level 2",
      letters: "I J K L M N O P",
      detailLinks: [
        { label: 'Learn and Practice', path: '/resources/support/teachingstrategies' },
        { label: 'Take Quiz', path: '/resources/support/teachingstrategies' },
        { label: 'Start Game', path: '/resources/support/teachingstrategies' }
      ],
      bgColor: 'bg-red-300',
    },
    {
      title: "Level 3",
      letters: "Q R S T U V W X Y Z",
      detailLinks: [
        { label: 'Learn and Practice', path: '/resources/support/teachingstrategies' },
        { label: 'Take Quiz', path: '/resources/support/teachingstrategies' },
        { label: 'Start Game', path: '/resources/support/teachingstrategies' }
      ],
      bgColor: 'bg-orange-300',
    },
    {
      title: "Final Level",
      letters: "All Letters",
      detailLinks: [
        { label: 'Learn and Practice', path: '/resources/support/teachingstrategies' },
        { label: 'Take Quiz', path: '/resources/support/teachingstrategies' },
        { label: 'Start Game', path: '/resources/support/teachingstrategies' }
      ],
      bgColor: 'bg-blue-300',
    },

  ];

  return (
    <><div>
      {/* Header */}
      <div className="bg-green-100">
        <div className="max-w-5xl px-4 py-10 max-container padding-container">
          <h1 className="text-5xl font-bold text-white leading-tight whitespace-normal">
            Spelling in Auslan
          </h1>
          <p className="text-2xl text-white mt-2">
            Learn and practice spelling by chooseing different levels
          </p>
        </div>
      </div>
    </div>

      <div className="lg:flex lg:flex-row grid grid-cols-1 md:grid-cols-2 justify-center mt-12 px-12">
        {cardData.map((data, index) => (
          <LevelCard key={index} {...data} />
        ))}
      </div>
    </>
  );
}

export default SpellingPage;

