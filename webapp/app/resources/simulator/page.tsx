"use client";

import React, { useState, useRef, useEffect } from "react";
import { SITUATION_SCRIPTS, HEARING_LOSS_INFO } from "@/constants";
// Define situations and their corresponding icons.
const situations = [
  { label: "Tutorial", icon: "/simulator/class.png" },
  { label: "Playground", icon: "/simulator/playground.png" },
  { label: "Shopping", icon: "/simulator/shoppingmall.png" },
  { label: "Restaurant", icon: "/simulator/restaurant.png" },
  { label: "Traffic", icon: "/simulator/traffic.png" },
  { label: "Music", icon: "/simulator/musical.png" },
];
// Define different levels of hearing loss for selection
const hearingLossLevels = [
  "Normal",
  "Mild",
  "Moderate",
  "Severe",
  "Profound Impairment",
];

// The main simulator page functional component.
const SimulatorPage: React.FC = () => {
  // State hooks for situation selection, level of hearing loss, and audio play state.
  const [selectedSituation, setSelectedSituation] = useState<
    string | "Tutorial"
  >("Tutorial");
  const [selectedLevel, setSelectedLevel] = useState<string>("Normal");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // Refs for the Web Audio API and the HTMLAudioElement
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);

  const [isSelfTestPlaying, setIsSelfTestPlaying] = useState<boolean>(false);

  const [selfTestVolume, setSelfTestVolume] = useState<number | null>(null);
  useEffect(() => {
    if (selfTestVolume !== null && audioRef.current) {
      audioRef.current.volume = selfTestVolume / 100;
      audioRef.current.play();
      setIsSelfTestPlaying(true); // Automatically start playing and update the button state
    }
  }, [selfTestVolume]);


  const toggleSelfTestPlayPause = () => {
    if (audioRef.current) {
      if (isSelfTestPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsSelfTestPlaying(!isSelfTestPlaying);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsSelfTestPlaying(false); // Reset the play state
      }
    };
  }, []);



  const audioRef = useRef<HTMLAudioElement>(null);
  // Effect hook to handle situation changes and apply audio play toggle.
  useEffect(() => {
    if (isPlaying) {
      togglePlayPause();
      setTimeout(() => {
        togglePlayPause();
      }, 100);
    }
  }, [selectedSituation, selectedLevel]);
  // Effect hook to handle self-test volume changes and play audio.
  useEffect(() => {
    if (selfTestVolume !== null && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.volume = selfTestVolume / 100;
      audioRef.current.play();
    }
  }, [selfTestVolume]);

  // Function to map volume to hearing loss level.
  const getHearingLossLevel = (volume: number): string => {
    if (volume > 25 && volume <= 40) return "Mild";
    if (volume >= 41 && volume <= 60) return "Moderate";
    if (volume >= 61 && volume <= 80) return "Severe";
    if (volume >= 81) return "Profound";
    return "Normal";
  };
  // Determine the self-test result based on volume.
  const selfTestResult = selfTestVolume
    ? getHearingLossLevel(selfTestVolume)
    : null;
  // Async function to process and simulate audio based on the situation and hearing loss level.
  const processAudio = async (audioFile: string, level: string) => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }
    const audioContext = audioContextRef.current;

    const response = await fetch(audioFile);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    const lowPassFilter = audioContext.createBiquadFilter();
    lowPassFilter.type = "lowpass";
    lowPassFilter.frequency.value = 4000;

    const highPassFilter = audioContext.createBiquadFilter();
    highPassFilter.type = "highpass";
    highPassFilter.frequency.value = 20;

    const gainNode = audioContext.createGain();
    const midFrequencyGain = audioContext.createGain();

    switch (level) {
      case "Normal":
        lowPassFilter.frequency.value = 20000;
        highPassFilter.frequency.value = 20;
        gainNode.gain.value = 1;
        midFrequencyGain.gain.value = 1;
        break;
      case "Mild":
        lowPassFilter.frequency.value = 2000;
        highPassFilter.frequency.value = 500;
        gainNode.gain.value = 0.8;
        midFrequencyGain.gain.value = 0.6;
        break;
      case "Moderate":
        lowPassFilter.frequency.value = 1000;
        highPassFilter.frequency.value = 1000;
        gainNode.gain.value = 0.6;
        midFrequencyGain.gain.value = 0.4;
        break;
      case "Severe":
        lowPassFilter.frequency.value = 500;
        highPassFilter.frequency.value = 1500;
        gainNode.gain.value = 0.4;
        midFrequencyGain.gain.value = 0.2;
        break;
      case "Profound Impairment":
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

  const playAudio = async () => {
    if (!selectedSituation) return;

    const audioUrl = `/audio/${selectedSituation}.mp3`;
    const { audioContext, source } = await processAudio(
      audioUrl,
      selectedLevel,
    );
    source.start(0);
    setIsPlaying(true);
    source.onended = () => {
      setIsPlaying(false);
      audioContext.close();
      audioContextRef.current = null;
    };
  };

  const togglePlayPause = async () => {
    if (!isPlaying) {
      await playAudio();
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

  const selectedScript = selectedSituation
    ? SITUATION_SCRIPTS[selectedSituation]
    : "Please select a situation to view the script.";

  return (
    <div>
      {/* Header */}
      <div className="bg-green-100">
        <div className="max-w-5xl px-4 py-10 max-container padding-container">
          <h1 className="text-5xl font-bold text-white leading-tight whitespace-normal">
            Hearing Loss Simulator
          </h1>
          <p className=" text-2xl text-white  mt-2">
            Experience the World Through Your Child's Ears
          </p>
        </div>
      </div>

      <div className="max-container padding-container layout-main bg-white">
        <audio ref={audioRef} src="/audio/1000hz.MP3"></audio>
        {/* Self-test volume adjustment section */}
        <div className="text-primary mb-8">
          <h2 className="text-2xl mb-4 font-bold">
            Step 1: Please adjust the volume to find the softest tone you can
            hear
          </h2>

          <div className="volume-container">
            {Array.from({length: 15}, (_, i) => (i + 3) * 5).map((volume) => (
                <button
                    key={volume}
                    className={`volume-button ${selfTestVolume === volume ? "volume-button-selected" : ""}`}
                    onClick={() => setSelfTestVolume(volume)}
                >
                  {volume}
                </button>
            ))}
            {/* Self-test play/pause button */}
            <button className="volume-button" onClick={toggleSelfTestPlayPause}>
              {isSelfTestPlaying ? (
                  <svg
                      className="pause-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{width: '1em', height: '1em'}} // Adjust size to match other buttons
                  >
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
              ) : (
                  <svg
                      className="play-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{width: '1em', height: '1em'}} // Adjust size to match other buttons
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
              )}
            </button>
          </div>


          {selfTestVolume && (
              <div className="i flex items-center">
                <p className={`text-tertiary text-l `}>
                  Your volume level:<span>&nbsp;</span>
                </p>
                <h3 className="text-text-primary text-l font-semibold ">
                  {selfTestVolume}dB
                </h3>
              </div>
          )}
          {selfTestResult && (
              <div className="i flex items-center">
                <p className={`text-tertiary text-l `}>
                  Your hearing loss level is:<span>&nbsp;</span>
                </p>
                <h3 className="text-primary text-l font-semibold ">
                  {selfTestResult}
                </h3>
              </div>
          )}
        </div>

        {/* Situation selection section */}
        <div className=" mb-8">
          <h1 className="text-primary text-2xl mb-4 font-bold">
            Step 2: Choose a situation you want to simulate
          </h1>
          <div className="flex justify-around flex-wrap">
            {situations.map((situation, index) => (
                <button
                    key={index}
                    className={`situation-button ${selectedSituation === situation.label ? "situation-button-selected" : ""}`}
                    onClick={() => setSelectedSituation(situation.label)}
                >
                  <img
                      src={situation.icon}
                      alt={situation.label}
                      className="w-12 h-12"
                  />
                  <span>{situation.label}</span>
                </button>
            ))}
          </div>
        </div>
        {/* Hearing loss level selection section */}
        <div className="text-primary mb-8">
          <h2 className="text-primary text-2xl mb-4 font-bold">
            Step 3: Select a hearing loss level and Click play button to
            simulate
          </h2>
          <div className="flex items-center mb-4">
            {/* Hearing loss level buttons */}
            <div className="flex flex-wrap">
              {hearingLossLevels.map((level, index) => (
                <button
                  key={index}
                  className={`level-button ${selectedLevel === level ? "level-button-selected" : ""}`}
                  onClick={() => setSelectedLevel(level)}
                >
                  {level}
                </button>
              ))}
            </div>

            {/* Play button aligned with the level buttons */}
            <div className="ml-4">
              <button className="play-button" onClick={togglePlayPause}>
                {isPlaying ? (
                  <svg
                    className="pause-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                ) : (
                  <svg
                    className="play-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="i flex items-center">
            <h3 className="text-tertiary text-l font-semibold performance-info">
              Performance:<span>&nbsp;</span>
            </h3>
            <p
              className={`text-tertiary text-l performance-info ${selfTestResult ? "highlight-change" : ""}`}
            >
              {selectedLevelInfo.performance}
            </p>
          </div>

          <div className="i flex items-center">
            <h3 className="text-tertiary  text-l font-semibold recommendation-info">
              Recommendation:<span>&nbsp;</span>
            </h3>
            <p
              className={`text-tertiary text-l recommendation-info ${selfTestResult ? "highlight-change" : ""}`}
            >
              {selectedLevelInfo.recommendation}
            </p>
          </div>
        </div>
        {/* Script display section */}
        <div className="text-primary mb-8">
          <h2 className="text-2xl mb-4 font-bold">Here is the script:</h2>
          <div className="text-tertiary bg-gray-100 p-4 rounded-lg shadow-inner">
            <pre>{selectedScript}</pre>
          </div>
        </div>

        <footer className="text-xs text-slate-400 text-center mt-6 p-3">
          Disclaimer: The content and simulations on this Website are for
          educational use only and do not replace professional advice. For
          accurate assessments and recommendations, consult a healthcare
          professional.
          <br />
          All audio materials are copyright-free and AI-generated.
          <br />
          Reference sources:
          <a
            href="https://pixabay.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-500 underline"
          >
            Pixabay
          </a>
          ,
          <a
            href="https://elevenlabs.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-500 underline"
          >
            ElevenLabs
          </a>
        </footer>
      </div>
    </div>
  );
};

export default SimulatorPage;
