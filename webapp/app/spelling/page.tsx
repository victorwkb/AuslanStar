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
    <>
      <div>
        {/* Header */}
        <div className="bg-emerald-100">
          <div
            className="animate-in max-w-5xl px-4 py-10 max-container padding-container"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            <h1 className="text-5xl font-bold leading-tight whitespace-normal">
              Spelling in Auslan
            </h1>
            <p className="text-2xl mt-2">
              Learn and practice spelling by chooseing different levels
            </p>
          </div>
        </div>
      </div>

      <div
        className="animate-in lg:flex lg:flex-row grid grid-cols-1 md:grid-cols-2 justify-center mt-12 px-12"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        {cardData.map((data, index) => (
          <LevelCard key={index} {...data} />
        ))}
      </div>
      <svg width="100%" height="20%" id="svg" className="fill-current bg-yellow-50 text-indigo-900 pt-8"
        viewBox="0 80 1440 70" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 0,400 L 0,150 C 84.29999999999998,140.8948717948718 168.59999999999997,131.78974358974358 248,125 C 327.40000000000003,118.2102564102564 401.9,113.73589743589744 475,123 C 548.1,132.26410256410256 619.8,155.26666666666668 714,146 C 808.2,136.73333333333332 924.9000000000001,95.19743589743588 1001,87 C 1077.1,78.80256410256412 1112.6,103.94358974358974 1179,120 C 1245.4,136.05641025641026 1342.7,143.02820512820512 1440,150 L 1440,400 L 0,400 Z"></path>
      </svg>
    </>
  );
}

export default SpellingPage;

