"use client";

// app/story/page.tsx

import Link from 'next/link';

export default function SeasonsOverview() {
  const seasons = [
    { id: 1, title: 'Season 1', description: 'Sally and Possum explore learning opportunities and adventures in everyday life through a variety of interactive and creative activities.', image: '/story/season1.png' },
    { id: 2, title: 'Season 2', description: 'Sally and Possum explore science and math through daily activities.', image: '/story/season2.png' },
    { id: 3, title: 'Season 3', description: 'Sally and Possum engage in a variety of educational adventures, learning about nature, animals, crafts, and everyday objects through interactive and playful experiences.', image: '/story/season3.png' },
    { id: 4, title: 'Season 4', description: 'Sally and Possum explore practical skills, safety, nature, and creativity through various engaging activities and experiments.', image: '/story/season4.png' },
    { id: 5, title: 'Season 5', description: 'Sally and Possum learn about tools, reflections, motion, and problem-solving through various fun and interactive adventures.', image: '/story/season5.png' },
    { id: 6, title: 'Season 6', description: 'Sally and Possum learn about science, practical skills, and sustainability through fun lessons with Sally and Skip.', image: '/story/season6.png' },
  ];

  return (
    <div>
      {/* Header */}
      <div className="bg-orange-300">
        <div className="animate-in max-w-5xl px-4 py-10 max-container padding-container">
          <h1 className="text-5xl font-bold text-white leading-tight whitespace-normal">
            StoryTelling in Auslan
          </h1>
          <p className="text-2xl text-white mt-2">
            An innovative and beautiful video series for young children who use Auslan as their primary means of communication
          </p>
        </div>
        <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"
          preserveAspectRatio="none" style={{ display: 'block' }}>
          {/* Modify the fill color to match your bg-green-100; use the correct color code */}
          <path fill="#FEFCE8"
            d="M0,0 L48,14.7 C96,29,192,59,288,74.7 C384,91,480,101,576,85.3 C672,69,768,27,864,16 C960,5,1056,35,1152,48 C1248,61,1344,59,1392,57.3 L1440,56 L1440,150 L1392,150 C1344,150,1248,150,1152,150 C1056,150,960,150,864,150 C768,150,672,150,576,150 C480,150,384,150,288,150 C192,150,96,150,48,150 L0,150 Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-10">
        <h2 className="text-4xl font-bold text-center mb-14">Choose a Season now!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {seasons.map((season) => (
            <Link key={season.id} href={`/story/season${season.id}`} passHref>
              <div className="block p-4 rounded-lg shadow-lg bg-orange-100 hover:bg-orange-200 hover:scale-125 hover:font-bold">
                <div className="img-container">
                  <img src={season.image} alt={`Cover of ${season.title}`} className="w-full object-cover rounded" style={{ height: '200px' }} />
                </div>
                <div className="mt-4 text-container">
                  <h3 className="text-xl font-semibold">{season.title}</h3>
                  <p className="text-gray-600">{season.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
