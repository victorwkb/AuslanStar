"use client";

import React, { useState } from 'react';
import YouTube from 'react-youtube';

// YouTube video id list
const episodes = [
  { id: 'xu6JMJTEaXc', title: 'Episode 1' }, 
  { id: '84nURKHLDdY', title: 'Episode 2' },
  { id: 'FuO0oxGT55I', title: 'Episode 3' },
  { id: 'QDLr5SIUTMU', title: 'Episode 4' }, 
  { id: 'nocJRFFl60c', title: 'Episode 5' },
  { id: 'apbqKLID9ig', title: 'Episode 6' }, 
  { id: 't-3-ekRdt7w', title: 'Episode 7' },
  { id: 'ZSfZAGwHTw', title: 'Episode 8' },
  { id: 'ueYN1vZ1xjc', title: 'Episode 9' },
  { id: 'M_3HdU8uhZs', title: 'Episode 10' },
  { id: 'af77Zz1yfhw', title: 'Episode 11' }, 
  { id: 'w5d8I0Pj3X4', title: 'Episode 12' },
  { id: 'qVOx3mpx6SA', title: 'Episode 13' },
  { id: 'bJ9mISWgL4s', title: 'Episode 14' }, 
  { id: '2uW_fCgaNH4', title: 'Episode 15' },
];



export default function VideoPlayer() {
  const [currentVideoId, setCurrentVideoId] = useState(episodes[0].id);   // The first video is played by default

  const videoOptions = {
    height: '600',
    width: '1000',
    playerVars: {
      autoplay: 1,  // 1: autoplay the video
      // Change the link based on the actual deployment address
      origin: 'http://localhost:3000'  
    },
  };

  return (
    <div className="flex">
      <div className="w-64 bg-gray-800 text-white p-5">
        <h2 className="text-xl font-bold mb-4">On this page</h2>
        <ul>
          {episodes.map((episode, index) => (
            <li key={index} className={`cursor-pointer p-2 hover:bg-gray-700 ${currentVideoId === episode.id ? 'bg-gray-600' : ''}`} onClick={() => setCurrentVideoId(episode.id)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-grow p-5">
        <YouTube videoId={currentVideoId} opts={videoOptions} />
      </div>
    </div>
  );
}
