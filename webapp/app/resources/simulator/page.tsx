
'use client'

import React, { useState, useRef, useEffect } from 'react';
import { SITUATION_SCRIPTS,  HEARING_LOSS_INFO } from "@/constants";

const situations = [
  { label: 'Tutorial', icon: '/class.png' },
  { label: 'Playground', icon: '/playground.png' },
  { label: 'Shopping', icon: '/shoppingmall.png' },
  { label: 'Restaurant', icon: '/restaurant.png' },
  { label: 'Traffic', icon: '/traffic.png' },
  { label: 'Music', icon: '/musical.png' }
];

const hearingLossLevels = ['Normal', 'Mild', 'Moderate', 'Severe', 'Profound Impairment'];


const SimulatorPage: React.FC  = () => {
  const [selectedSituation, setSelectedSituation] = useState<string | 'Tutorial'>('Tutorial');
  const [selectedLevel, setSelectedLevel] = useState<string>('Normal');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);

  const [selfTestVolume, setSelfTestVolume] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);




  useEffect(() => {
    if (selfTestVolume !== null && audioRef.current) {
      audioRef.current.volume = selfTestVolume / 100;
      audioRef.current.play();
    }
  }, [selfTestVolume]);

  const getHearingLossLevel = (volume: number): string => {
    if (volume > 25 && volume < 40) return 'Mild';
    if (volume >= 41 && volume < 60) return 'Moderate';
    if (volume >= 61 && volume < 80) return 'Severe';
    if (volume >= 81) return 'Profound';
    return 'Normal';
  };

  const selfTestResult = selfTestVolume ? getHearingLossLevel(selfTestVolume) : null;




  const processAudio = async (audioFile: string, level: string) => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }
    const audioContext = audioContextRef.current;

    const response = await fetch(audioFile);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    const lowPassFilter = audioContext.createBiquadFilter();
    lowPassFilter.type = 'lowpass';
    lowPassFilter.frequency.value = 4000;

    const highPassFilter = audioContext.createBiquadFilter();
    highPassFilter.type = 'highpass';
    highPassFilter.frequency.value = 20;

    const gainNode = audioContext.createGain();
    const midFrequencyGain = audioContext.createGain();

    switch (level) {
      case 'Normal':
        lowPassFilter.frequency.value = 20000;
        highPassFilter.frequency.value = 20;
        gainNode.gain.value = 1;
        midFrequencyGain.gain.value = 1;
        break;
      case 'Mild':
        lowPassFilter.frequency.value = 2000;
        highPassFilter.frequency.value = 500;
        gainNode.gain.value = 0.8;
        midFrequencyGain.gain.value = 0.6;
        break;
      case 'Moderate':
        lowPassFilter.frequency.value = 1000;
        highPassFilter.frequency.value = 1000;
        gainNode.gain.value = 0.6;
        midFrequencyGain.gain.value = 0.4;
        break;
      case 'Severe':
        lowPassFilter.frequency.value = 500;
        highPassFilter.frequency.value = 1500;
        gainNode.gain.value = 0.4;
        midFrequencyGain.gain.value = 0.2;
        break;
      case 'Profound Impairment':
        lowPassFilter.frequency.value = 250;
        highPassFilter.frequency.value = 2000;
        gainNode.gain.value = 0.2;
        midFrequencyGain.gain.value = 0.1;
        break;
      default:
        break;
    }

    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(highPassFilter);
    highPassFilter.connect(lowPassFilter);
    lowPassFilter.connect(midFrequencyGain);
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
  const selectedLevelInfo = HEARING_LOSS_INFO[selectedLevel];

  const selectedScript = selectedSituation ? SITUATION_SCRIPTS[selectedSituation] : 'Please select a situation to view the script.';

  return (
      <div className="max-container padding-container layout-main bg-white">

        <audio ref={audioRef} src="/audio/1000hz.mp3" ></audio>

        <div className="text-primary mb-8">
          <h2 className="text-2xl mb-4 font-bold">Self-Test Your Hearing</h2>
          <p>Please click to select the lowest volume you can hear:</p>
          <div className="volume-container">
            {Array.from({length: 15}, (_, i) => (i + 3) * 5).map((volume) => (
                <button
                    key={volume}
                    className={`volume-button ${selfTestVolume === volume ? 'volume-button-selected' : ''}`}
                    onClick={() => setSelfTestVolume(volume)}
                >
                  {volume}
                </button>
            ))}
          </div>
          {selfTestVolume && (
              <div className="volume-level-indicator">
                <p>Your volume level: {selfTestVolume}dB</p>
              </div>
          )}
          {selfTestResult && (
              <div>
                <h3>Your hearing loss level is: {selfTestResult}</h3>
              </div>
          )}
        </div>


        <div className=" mb-8">
          <h1 className="text-primary text-2xl mb-4 font-bold">Choose the situation you want to simulate</h1>
          <div className="flex justify-around flex-wrap">
            {situations.map((situation, index) => (
                <button
                    key={index}
                    className={`situation-button ${selectedSituation === situation.label ? 'situation-button-selected' : ''}`}
                    onClick={() => setSelectedSituation(situation.label)}
                >
                  <img src={situation.icon} alt={situation.label} className="w-12 h-12"/>
                  <span>{situation.label}</span>
                </button>
            ))}
          </div>
        </div>

        <div className="text-primary mb-8">
          <h2 className="text-primary text-2xl mb-4 font-bold">Select the hearing loss level you want to hear
          </h2>
          <div className="flex justify-between items-center mb-4">

            {/* Flex container for levels */}
            <div className="flex">
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

            {/* Play button */}
            <button className="play-button" onClick={togglePlayPause}>
              {isPlaying ? (
                  <svg className="pause-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                       fill="currentColor">
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
              ) : (
                  <svg className="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                       fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
              )}
            </button>
          </div>

          <div className="flex justify-center items-center">
            <h3 className="text-primary text-l font-semibold performance-info">Performance:<span>&nbsp;</span></h3>
            <p className={`text-primary text-l performance-info ${selfTestResult ? 'highlight-change' : ''}`}>{selectedLevelInfo.performance}</p>
          </div>
          <div className="flex justify-center items-center">
            <h3 className="text-tertiary text-l font-semibold recommendation-info">Recommendation:<span>&nbsp;</span>
            </h3>
            <p className={`text-tertiary text-l recommendation-info ${selfTestResult ? 'highlight-change' : ''}`}>{selectedLevelInfo.recommendation}</p>
          </div>

          <div className="text-primary mb-8">
            <h2 className="text-primary  text-2xl mb-4 font-bold">Click to Play</h2>
          </div>


        </div>

        <div className="text-primary mb-8">
          <h2 className="text-2xl mb-4 font-bold">Here is the script:</h2>
          <div className="text-tertiary bg-gray-100 p-4 rounded-lg shadow-inner">
            <pre>{selectedScript}</pre>
          </div>
        </div>
      </div>


  );
};

export default SimulatorPage;


