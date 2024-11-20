'use client'

import React, { useRef, useState } from 'react'
import Webcam from 'react-webcam'
import { CameraIcon, CameraOffIcon, VideoIcon, VideoOffIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const visualEffects = [
  { word: "BK", animationPath: "navbar/value" },
  { word: "fire", animationPath: "navbar/value" },
  { word: "lightning", animationPath: "navbar/value" },
  { word: "wind", animationPath: "navbar/value" },
]

export default function Interactive() {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [video, setVideo] = useState<boolean>(false);
  const [mirrored] = useState<boolean>(true);
  const [sign, setSign] = useState<string>("A");
  const [countdown, setCountdown] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showFailureModal, setShowFailureModal] = useState<boolean>(false);
  const [effectword, setEffectword] = useState<string>("fire");


  const startCountdown = () => {
    setCountdown(3);
    const countdownInterval = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(countdownInterval);
      signWord(effectword);
    }, 3000);
  };

  const sendImageToAPI = async (image: string) => {
    const response = await fetch('https://f5q7vzkp2l.execute-api.ap-southeast-2.amazonaws.com/invoke_sage_maker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ image }),
    });

    const data = await response.json();
    console.log(data);
    const success = checkTargetSign(sign, data);
    return success;
  };

  const checkTargetSign = (sign: string, responseData: string[]) => {
    if (responseData.includes(sign)) {
      console.log('Correct, you signed ' + sign);
      return true;
    } else {
      console.log('Incorrect, you signed ' + responseData[0] + ' instead of ' + sign);
      return false;
    }
  };

  const captureImage = async () => {
    if (!webcamRef.current) {
      console.log('Webcam not found');
      return false;
    } else {
      const imageSrc = webcamRef.current.getScreenshot();
      if (!imageSrc) {
        console.log('Image not found');
        return false;
      } else {
        const success = await sendImageToAPI(imageSrc);
        if (success) {
          setShowModal(true);
          return success
        } else {
          setShowFailureModal(true);
          return success
        }
      }
    };
  }

  const signWord = async (word: string, idx: number = 0) => {
    setEffectword(word);
    setSign(word[idx]);

    if (idx < word.length - 1) {
      console.log('here');
      let correctSign = await captureImage();

      if (correctSign === true) {
        console.log('here2');
        idx++;
        signWord(word, idx);
      }
    }
  }

  return (
    <div>
      <div className="bg-cyan-300 text-white">
        <div
          className="animate-in max-w-5xl px-4 py-10 max-container padding-container"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <h1 className="text-5xl font-bold leading-tight whitespace-normal">
            Spelling Challenge
          </h1>
          <p className="text-2xl mt-2">
            Spell all letters to Win!
          </p>
        </div>

        <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"
          preserveAspectRatio="none" style={{ display: 'block' }}>
          <path fill="#FEFCE8"
            d="M0,0 L48,14.7 C96,29,192,59,288,74.7 C384,91,480,101,576,85.3 C672,69,768,27,864,16 C960,5,1056,35,1152,48 C1248,61,1344,59,1392,57.3 L1440,56 L1440,150 L1392,150 C1344,150,1248,150,1152,150 C1056,150,960,150,864,150 C768,150,672,150,576,150 C480,150,384,150,288,150 C192,150,96,150,48,150 L0,150 Z"></path>
        </svg>
      </div>
      <div className="mt-10"></div>


      <div className="container mx-auto flex flex-row gap-x-12 items-center justify-center min-h-[700px]">
        <div className="flex flex-col items-center justify-center rounded-lg h-[700px] bg-cyan-200">
          <div className="w-full h-full flex flex-col justify-center items-center">
            {video ? (
              <div className="h-full items-center">
                <Webcam
                  open={video}
                  audio={false}
                  mirrored={mirrored}
                  className="h-full w-full object-contain p-2"
                  screenshotFormat="image/jpeg"
                  ref={webcamRef}
                />

                <div className="relative text-center -translate-y-8">
                  {countdown > 0 && <p>Pose the Auslan sign quickly in: {countdown}</p>}
                </div>
                {showModal && (
                  <div className="modal-overlay">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h3>Congratulations!</h3>
                      </div>
                      <div className="modal-body">
                        <p>You've completed this round!</p>
                        <p>Select the next sign when you are ready!</p>
                        <div className="modal-actions">
                          <button onClick={() => {
                            setShowModal(false);
                          }} className="modal-button next">
                            Keep learning!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {showFailureModal && (
                  <div className="modal-overlay">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h3>Incorrect</h3>
                      </div>
                      <div className="modal-body">
                        <p>Try again!</p>
                        <div className="modal-actions">
                          <button onClick={() => {
                            setShowFailureModal(false);
                          }} className="modal-button next">
                            Try Again
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full w-full bg-gray-300 object-contain p-2 relative rounded-t-lg">
                <canvas ref={canvasRef} className="h-full w-full bg-gray-300 object-contain p-2" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <CameraOffIcon className="w-[100px] h-[100px]" />
                </div>
              </div>
            )
            }
          </div>
          <div>When you're ready, click the camera icon to capture your pose after a countdown</div>
          <div>Remember to turn your video on before capturing your pose using the recording icon</div>

          <div className="flex flex-row items-center justify-center h-12 gap-x-12 m-3">
            <Button onClick={startCountdown}>
              <CameraIcon
                className="w-[50px] h-[50px] border-2 border-black rounded-lg p-2 hover:scale-125 transition-all duration-100" />
            </Button>

            <Button
              onClick={() => {
                setVideo((video) => !video)
              }}
            >
              {video ? (
                <VideoIcon
                  className="w-[50px] h-[50px] border-2 border-black rounded-lg p-2 hover:scale-125 transition-all duration-100" />)
                : (
                  <VideoOffIcon
                    className="w-[50px] h-[50px] border-2 border-black rounded-lg p-2 hover:scale-125 transition-all duration-100" />)
              }
            </Button>
          </div>
        </div>

        <div className="w-2/5 flex flex-col gap-y-12">
          <div className="border border-gray-300 rounded-lg p-6">
            <p className="text-center pb-6">
              Select the visual effect you would like to see
            </p>
            <div className="grid grid-cols-2 gap-y-6">
              {visualEffects.map((effect, index) => (
                <Button onClick={() => signWord(effect.word)} key={index}>
                  <div className="w-[200px] py-2 flex-col items-center border border-gray-300 rounded-lg">
                    <p className="text-2xl font-bold text-cyan-600 text-center">
                      {effect.word}
                    </p>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          <div className="min-h-[200px] border border-gray-300 rounded-lg p-6 text-center">
            <div className="h-full text-4xl font-bold text-cyan-600">
              {effectword}
              {/* for each word, iterate through the letters */}
            </div>
            <div className="pt-6">
              Next Letter:
              {sign}
            </div>
          </div>
        </div>

      </div>
      <svg width="100%" height="20%" id="svg" className="fill-current bg-yellow-50 text-indigo-900 pt-8"
        viewBox="0 80 1440 70" xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 L 0,150 C 84.29999999999998,140.8948717948718 168.59999999999997,131.78974358974358 248,125 C 327.40000000000003,118.2102564102564 401.9,113.73589743589744 475,123 C 548.1,132.26410256410256 619.8,155.26666666666668 714,146 C 808.2,136.73333333333332 924.9000000000001,95.19743589743588 1001,87 C 1077.1,78.80256410256412 1112.6,103.94358974358974 1179,120 C 1245.4,136.05641025641026 1342.7,143.02820512820512 1440,150 L 1440,400 L 0,400 Z"></path>
      </svg>
    </div>
  )
}
