"use client";

import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import Link from 'next/link';

// Define the type for an episode
type Episode = {
  id: string;
  title: string;
};

// YouTube video id list
const episodes: Episode[] = [
  { id: 'xu6JMJTEaXc', title: 'E1 Too sticky' },
  { id: '84nURKHLDdY', title: 'E2 A very hot day' },
  { id: 'FuO0oxGT55I', title: 'E3 Let the paint dry' },
  { id: 'QDLr5SIUTMU', title: 'E4 Possum wants a pet' },
  { id: 'nocJRFFl60c', title: 'E5 How does your garden grow?' },
  { id: 'apbqKLID9ig', title: 'E6 Possum\'s Door' },
  { id: 't-3-ekRdt7w', title: 'E7 Surprise for Sally' },
  { id: 'JZSfZAGwHTw', title: 'E8 Missing fridge' },
  { id: 'ueYN1vZ1xjc', title: 'E9 Big Balloon Ride' },
  { id: 'M_3HdU8uhZs', title: 'E10 Sally has a party' },
  { id: 'af77Zz1yfhw', title: 'E11 Very cold day' },
  { id: 'w5d8I0Pj3X4', title: 'E12 Great race' },
  { id: 'qVOx3mpx6SA', title: 'E13 What goes up' },
  { id: 'bJ9mISWgL4s', title: 'E14 What can you do with a pumpkin' },
  { id: '2uW_fCgaNH4', title: 'E15 Obstacle course' },
];

export default function VideoPlayer() {
  const [currentVideoId, setCurrentVideoId] = useState<string>(episodes[0].id);
  const [watchedEpisodes, setWatchedEpisodes] = useState<string[]>([]);
  const [showPrompt, setShowPrompt] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(5);

  const videoOptions = {
    height: '1000',
    width: '1200',
    playerVars: {
      autoplay: 1,
      origin: 'https://main.d3qpulcxrhg1d0.amplifyapp.com/'
    },
  };

  const handleEnd = () => {
    const currentIndex = episodes.findIndex(ep => ep.id === currentVideoId);
    if (currentIndex < episodes.length - 1) {
      setShowPrompt(true);
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev === 1) {
            clearInterval(timer);
            handleContinue();
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const handleContinue = () => {
    const currentIndex = episodes.findIndex(ep => ep.id === currentVideoId);
    if (currentIndex < episodes.length - 1) {
      setCurrentVideoId(episodes[currentIndex + 1].id);
      if (!watchedEpisodes.includes(currentVideoId)) {
        setWatchedEpisodes(prev => [...prev, currentVideoId]);
      }
      setShowPrompt(false);
      setCountdown(5);
    }
  };

  const handleStay = () => {
    setShowPrompt(false);
    setCountdown(5);
  };

  const handleVideoClick = (id: string) => {
    setCurrentVideoId(id);
    if (!watchedEpisodes.includes(id)) {
      setWatchedEpisodes(prev => [...prev, id]);
    }
    setShowPrompt(false);
    setCountdown(5);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-orange-300">
        <div className="animate-in max-w-5xl px-4 py-10 max-container padding-container">
          <h1 className="text-5xl font-bold text-white leading-tight whitespace-normal">
            Sally and Possum - Season 1
          </h1>
        </div>
        <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"
          preserveAspectRatio="none" style={{ display: 'block' }}>
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
                className={`cursor-pointer p-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-125 ${currentVideoId === episode.id
                  ? 'bg-orange-600 text-white'
                  : watchedEpisodes.includes(episode.id)
                    ? 'bg-gray-200 text-gray-500'
                    : 'bg-orange-200 text-gray-800'
                  }`}
                onClick={() => handleVideoClick(episode.id)}
              >
                {episode.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-grow p-10">
          <YouTube videoId={currentVideoId} opts={videoOptions} onEnd={handleEnd} />
        </div>
      </div>

      {showPrompt && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Do you want to continue to the next episode?</h2>
            <p className="mb-4">Continuing in {countdown} seconds...</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleContinue}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Continue
              </button>
              <button
                onClick={handleStay}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Stay
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto mt-4 flex justify-between space-x-10 px-4">
        <Link href="/story">
          <p className="flex items-center space-x-2 cursor-pointer hover:scale-125 active:scale-100 hover:font-bold transition-all duration-100">
            <img src="/game/left_video.png" alt="Backward" className="w-20 h-20" />
            <span className="text-lg">Back to Storytelling Page</span>
          </p>
        </Link>

        <Link href="/story/season2">
          <p className="flex items-center space-x-2 cursor-pointer hover:scale-125 active:scale-100 hover:font-bold transition-all duration-100">
            <span className="text-lg">Go to Season 2</span>
            <img src="/game/right_video.png" alt="Forward" className="w-20 h-20" />
          </p>
        </Link>
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
        Reference: Video supported by{" "}
        <a
          href="https://www.youtube.com/@theearlyyearscount1864"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#aaa", textDecoration: "underline" }}
        >
          The Early Years Count
        </a>
        <br />
        Disclaimer: The information contained on this website is not intended as
        a substitute for independent professional advice.
      </footer>

      <svg width="100%" height="20%" className="fill-current bg-yellow-50 text-indigo-900 pt-8" viewBox="0 80 1440 70" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0,400 L 0,150 C 84.29999999999998,140.8948717948718 168.59999999999997,131.78974358974358 248,125 C 327.40000000000003,118.2102564102564 401.9,113.73589743589744 475,123 C 548.1,132.26410256410256 619.8,155.26666666666668 714,146 C 808.2,136.73333333333332 924.9000000000001,95.19743589743588 1001,87 C 1077.1,78.80256410256412 1112.6,103.94358974358974 1179,120 C 1245.4,136.05641025641026 1342.7,143.02820512820512 1440,150 L 1440,400 L 0,400 Z"></path>
      </svg>
    </div >
  );
}
