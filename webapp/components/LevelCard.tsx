import React from 'react';

interface LevelCardProps {
  title: string;
  letters: string;
  detailLinks: { label: string; path: string }[];
  bgColor: string;
}

const LevelCard: React.FC<LevelCardProps> = ({ title, letters, detailLinks, bgColor }) => {
  return (
    <div className={`max-w-md rounded-2xl overflow-hidden ${bgColor} p-8 m-4`}>
      <div className="font-bold text-3xl mb-2 text-center text-yellow-800">{title}</div>
      <p className="text-xl text-yellow-700 text-center mb-4">{letters}</p>
      <div className="flex flex-col mt-4">
        {detailLinks.map((detail, index) => (
          <a
            key={index}
            href={detail.path}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl mb-2"
          >
            {detail.label}
          </a>
        ))}
      </div>
    </div>
  );
};


export default LevelCard;
