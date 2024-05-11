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
    <div className="bg-purple-100 p-12">
      <div className="container mx-auto flex flex-row gap-x-12 items-center justify-center min-h-[500px]">
        <div className="flex flex-col items-center justify-center rounded-lg w-3/4 h-[700px] bg-purple-200">
          <div className="w-full h-full items-center justify-center">
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

          <div className="flex flex-row items-center justify-center h-12 gap-x-12 m-3">
            <Button onClick={startCountdown} >
              <CameraIcon className="w-[50px] h-[50px] border-2 border-black rounded-lg p-2 hover:scale-125 transition-all duration-100" />
            </Button>

            <Button
              onClick={() => {
                setVideo((video) => !video)
              }}
            >
              {video ? (
                <VideoIcon className="w-[50px] h-[50px] border-2 border-black rounded-lg p-2 hover:scale-125 transition-all duration-100" />)
                : (
                  <VideoOffIcon className="w-[50px] h-[50px] border-2 border-black rounded-lg p-2 hover:scale-125 transition-all duration-100" />)
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
                    <p className="text-2xl font-bold text-purple-600 text-center">
                      {effect.word}
                    </p>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          <div className="min-h-[200px] border border-gray-300 rounded-lg p-6 text-center">
            <div className="h-full text-4xl font-bold text-purple-600">
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
    </div>
  )
}
