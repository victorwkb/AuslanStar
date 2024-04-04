
'use client'

import React, { useState, useRef } from 'react';
import { SITUATION_SCRIPTS } from "@/constants";

const situations = [
  { label: 'Tutorial', icon: '/class.png' },
  { label: 'Playground', icon: '/playground.png' },
  { label: 'Shopping', icon: '/shoppingmall.png' },
  { label: 'Restaurant', icon: '/restaurant.png' },
  { label: 'Traffic', icon: '/traffic.png' },
  { label: 'Music', icon: '/musical.png' }
];

const hearingLossLevels = ['Normal', 'Mild', 'Moderate', 'Severe', 'Profound Impairment'];

const SimulatorPage = () => {
  const [selectedSituation, setSelectedSituation] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string>('Normal');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);

  const processAudio = async (audioFile: string, level: string) => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }
    const audioContext = audioContextRef.current;

    const response = await fetch(audioFile);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    const biquadFilter = audioContext.createBiquadFilter();
    biquadFilter.type = 'lowpass';

    const gainNode = audioContext.createGain();
    const midFrequencyGain = audioContext.createGain();

    switch (level) {
      case 'Normal':
        biquadFilter.frequency.value = 20000;
        gainNode.gain.value = 1;
        midFrequencyGain.gain.value = 1;
        break;
      case 'Mild':
        biquadFilter.frequency.value = 2000;
        gainNode.gain.value = 0.8;
        midFrequencyGain.gain.value = 0.6;
        break;
      case 'Moderate':
        biquadFilter.frequency.value = 800;
        gainNode.gain.value = 0.6;
        midFrequencyGain.gain.value = 0.4;
        break;
      case 'Severe':
        biquadFilter.frequency.value = 350;
        gainNode.gain.value = 0.4;
        midFrequencyGain.gain.value = 0.2;
        break;
      case 'Profound Impairment':
        biquadFilter.frequency.value = 100;
        gainNode.gain.value = 0.1;
        midFrequencyGain.gain.value = 0.1;
        break;
      default:
        break;
    }

    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(biquadFilter);
    biquadFilter.connect(midFrequencyGain);
    midFrequencyGain.connect(gainNode);
    gainNode.connect(audioContext.destination);

    if (audioSourceRef.current) {
      audioSourceRef.current.stop();
    }
    audioSourceRef.current = source;

    return { audioContext, source };
  };

  const togglePlayPause = async () => {
    if (!selectedSituation) return;

    const audioUrl = `/audio/${selectedSituation}.mp3`;
    if (!isPlaying) {
      const { audioContext, source } = await processAudio(audioUrl, selectedLevel);
      source.start(0);
      setIsPlaying(true);
      source.onended = () => {
        setIsPlaying(false);
        audioContext.close();
        audioContextRef.current = null;
      };
    } else {
      if (audioContextRef.current && audioSourceRef.current) {
        audioSourceRef.current.stop();
        setIsPlaying(false);
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    }
  };
  const selectedScript = selectedSituation ? SITUATION_SCRIPTS[selectedSituation] : 'Please select a situation to view the script.';

  return (
    <div className="max-container padding-container layout-main bg-white">
      <div className="text-tertiary mb-8">
        <h1 className="text-primary text-2xl mb-4 font-semibold">Choose the situation you want to simulate</h1>
        <div className="flex justify-around flex-wrap">
          {situations.map((situation, index) => (
            <button
              key={index}
              className={`situation-button ${selectedSituation === situation.label ? 'situation-button-selected' : ''}`}
              onClick={() => setSelectedSituation(situation.label)}
            >
              <img src={situation.icon} alt={situation.label} className="w-12 h-12" />
              <span>{situation.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="text-tertiary mb-8">
        <h2 className="text-primary text-2xl mb-4 font-semibold">Select the hearing loss level you want to hear
        </h2>
        <div className="flex justify-center items-center mb-4">
          {hearingLossLevels.map((level, index) => (
              <button
                  key={index}
                  className={`level-button ${selectedLevel === level ? 'level-button-selected' : ''}`}
                  onClick={() => setSelectedLevel(level)}
              >
                {level}
              </button>
          ))}
        </div>

        <div className="text-tertiary mb-8">
        <h2 className="text-primary text-2xl mb-4 font-semibold">Click to Play</h2>
        </div>

        <div className="flex justify-center items-center">
          <button className="play-button" onClick={togglePlayPause}>
            {isPlaying ? (
                <svg className="pause-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
            ) : (
                <svg className="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
            )}
          </button>


        </div>

      </div>

      <div className="text-tertiary mb-8">
        <h2 className="text-2xl mb-4 font-semibold">Here is the script:</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
          <pre>{selectedScript}</pre>
        </div>
      </div>
    </div>
  );
};

export default SimulatorPage;
