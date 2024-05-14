"use client";

import React, { useState } from 'react';
import YouTube from 'react-youtube';
import Link from 'next/link';

// YouTube video id list
const episodes = [
  { id: 'ohG-fhzLlgA', title: 'E1 Possum wants to go to school' },
  { id: 'wqH0ZjYpJNo', title: 'E2 Bush walk' },
  { id: 'qR7Undu3jLc', title: 'E3 What is wool' },
  { id: 'Jf5fxWvg3Ng', title: 'E4 Kangaroos' },
  { id: 'TyxzjbljQKs', title: 'E5 Possum\'s classroom' },
  { id: 'CZrh_9mBEbI', title: 'E6 Dinner guest' },
  { id: '7htU6zwRfAo', title: 'E7 Where do eggs come from' },
  { id: 'id7My8UxvNE', title: 'E8 Possum breaks a plate' },
  { id: 'ddklM_kocEY', title: 'E9 Possum wants to be taller' },
  { id: 'wFWq47ENZaU', title: 'E10 Smallest carrots' },
  { id: '9xv5sxbve1I', title: 'E11 The football' },
  { id: 'RfwPfRNrKPM', title: 'E12 Possum chooses breakfast' },
  { id: 'IBq8wDjJX38', title: 'E13 King of the castle' },
  { id: 'BExZGy9m70U', title: 'E14 Possum in charge' },
  { id: 'Hxzml7EKw_U', title: 'E15 Possum joins the circus' },
];


export default function VideoPlayer() {
  const [currentVideoId, setCurrentVideoId] = useState(episodes[0].id);

  const videoOptions = {
    height: '1000',
    width: '1200',
    playerVars: {
      autoplay: 1,
      origin: 'https://main.d3qpulcxrhg1d0.amplifyapp.com/'
    },
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-orange-300">
        <div className="animate-in max-w-5xl px-4 py-10 max-container padding-container">
          <h1 className="text-5xl font-bold text-white leading-tight whitespace-normal">
            Sally and Possum - Season 3
          </h1>
        </div>
        <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"
          preserveAspectRatio="none" style={{ display: 'block' }}>
          {/* Modify the fill color to match your bg-green-100; use the correct color code */}
          <path fill="#FEFCE8"
            d="M0,0 L48,14.7 C96,29,192,59,288,74.7 C384,91,480,101,576,85.3 C672,69,768,27,864,16 C960,5,1056,35,1152,48 C1248,61,1344,59,1392,57.3 L1440,56 L1440,150 L1392,150 C1344,150,1248,150,1152,150 C1056,150,960,150,864,150 C768,150,672,150,576,150 C480,150,384,150,288,150 C192,150,96,150,48,150 L0,150 Z"></path>
        </svg>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="w-full lg:w-1/4 bg-orange-100 p-5 shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Episodes</h2>
          <ul className="space-y-3">
            {episodes.map((episode, index) => (
              <li
                key={index}
                className={`cursor-pointer p-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-125 ${
                  currentVideoId === episode.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-orange-200 text-gray-800'
                }`}
                onClick={() => setCurrentVideoId(episode.id)}
              >
                {episode.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-grow p-10">
          <YouTube videoId={currentVideoId} opts={videoOptions} />
        </div>
      </div>


      <div className="max-w-5xl mx-auto mt-4 flex justify-between space-x-10 px-4">
        <Link href="/story">
          <p className="flex items-center space-x-2 cursor-pointer hover:scale-125 active:scale-100 hover:font-bold transition-all duration-100">
            <img src="/game/left_video.png" alt="Backward" className="w-20 h-20" />
            <span className="text-lg">Back to Season 2</span>
          </p>
        </Link>

        <Link href="/story/season2">
          <p className="flex items-center space-x-2 cursor-pointer hover:scale-125 active:scale-100 hover:font-bold transition-all duration-100">
            <span className="text-lg">Go to Season 4</span>
            <img src="/game/right_video.png" alt="Forward" className="w-20 h-20" />
          </p>
        </Link>
      </div>

      

      <svg width="100%" height="20%" className="fill-current bg-yellow-50 text-indigo-900 pt-8" viewBox="0 80 1440 70" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0,400 L 0,150 C 84.29999999999998,140.8948717948718 168.59999999999997,131.78974358974358 248,125 C 327.40000000000003,118.2102564102564 401.9,113.73589743589744 475,123 C 548.1,132.26410256410256 619.8,155.26666666666668 714,146 C 808.2,136.73333333333332 924.9000000000001,95.19743589743588 1001,87 C 1077.1,78.80256410256412 1112.6,103.94358974358974 1179,120 C 1245.4,136.05641025641026 1342.7,143.02820512820512 1440,150 L 1440,400 L 0,400 Z"></path>
      </svg>


    </div>
  );
}
