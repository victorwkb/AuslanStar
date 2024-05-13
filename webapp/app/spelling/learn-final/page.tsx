'use client'

import React, { useRef, useState } from 'react'
import Webcam from 'react-webcam'
import { CameraIcon, CameraOffIcon, VideoIcon, VideoOffIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Thumbs } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link";

export default function Learn() {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [video, setVideo] = useState<boolean>(false);
  const [mirrored] = useState<boolean>(true);
  const [sign, setSign] = useState<string>("A");
  const [countdown, setCountdown] = useState<number>(0);
  const [thumbsSwiper] = useState<any>(null)
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showFailureModal, setShowFailureModal] = useState<boolean>(false);

  const levels = {
    title: "Final Level",
    letters: [
      { letter: "A", path: "/spellingletter/A.png", videoPath: "/video/signA.mp4" },
      { letter: "B", path: "/spellingletter/B.png", videoPath: "/video/signB.mp4" },
      { letter: "C", path: "/spellingletter/C.png", videoPath: "/video/signC.mp4" },
      { letter: "D", path: "/spellingletter/D.png", videoPath: "/video/signD.mp4" },
      { letter: "E", path: "/spellingletter/E.png", videoPath: "/video/signE.mp4" },
      { letter: "F", path: "/spellingletter/F.png", videoPath: "/video/signF.mp4" },
      { letter: "G", path: "/spellingletter/G.png", videoPath: "/video/signG.mp4" },
      { letter: "H", path: "/spellingletter/H.png", videoPath: "/video/signH.mp4" },
      { letter: "I", path: "/spellingletter/I.png", videoPath: "/video/signI.mp4" },
      { letter: "J", path: "/spellingletter/J.png", videoPath: "/video/signJ.mp4" },
      { letter: "K", path: "/spellingletter/K.png", videoPath: "/video/signK.mp4" },
      { letter: "L", path: "/spellingletter/L.png", videoPath: "/video/signL.mp4" },
      { letter: "M", path: "/spellingletter/M.png", videoPath: "/video/signM.mp4" },
      { letter: "N", path: "/spellingletter/N.png", videoPath: "/video/signN.mp4" },
      { letter: "O", path: "/spellingletter/O.png", videoPath: "/video/signO.mp4" },
      { letter: "P", path: "/spellingletter/P.png", videoPath: "/video/signP.mp4" },
      { letter: "Q", path: "/spellingletter/Q.png", videoPath: "/video/signQ.mp4" },
      { letter: "R", path: "/spellingletter/R.png", videoPath: "/video/signR.mp4" },
      { letter: "S", path: "/spellingletter/S.png", videoPath: "/video/signS.mp4" },
      { letter: "T", path: "/spellingletter/T.png", videoPath: "/video/signT.mp4" },
      { letter: "U", path: "/spellingletter/U.png", videoPath: "/video/signU.mp4" },
      { letter: "V", path: "/spellingletter/V.png", videoPath: "/video/signV.mp4" },
      { letter: "W", path: "/spellingletter/W.png", videoPath: "/video/signW.mp4" },
      { letter: "X", path: "/spellingletter/X.png", videoPath: "/video/signX.mp4" },
      { letter: "Y", path: "/spellingletter/Y.png", videoPath: "/video/signY.mp4" },
      { letter: "Z", path: "/spellingletter/Z.png", videoPath: "/video/signZ.mp4" },
    ],
  };


  const startCountdown = () => {
    setCountdown(3);
    const countdownInterval = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(countdownInterval);
      captureImage();
    }, 3000);
  };

  const captureImage = async () => {
    if (!webcamRef.current) {
      console.log('Webcam not found');
      return;
    } else {
      const imageSrc = webcamRef.current.getScreenshot();
      if (!imageSrc) {
        console.log('Image not found');
        return;
      } else {
        const success = await sendImageToAPI(imageSrc);
        if (success) {
          setShowModal(true);
          return success
        } else {
          setShowFailureModal(true);
        }
      }
    };
  }

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

  return (
      <div>
        <div className="bg-orange-200">
          <div className="animate-in max-w-5xl px-4 py-10 max-container padding-container">
            <h1 className="text-5xl font-bold text-white leading-tight whitespace-normal">
              Spelling in Auslan: Level 4
            </h1>
            <p className="text-white font-bold text-xl mt-3">Select the letters or navigate via the arrows for the
              Auslan demonstration</p>
          </div>
          <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"
               preserveAspectRatio="none" style={{display: 'block'}}>
            <path fill="#FEFCE8"
                  d="M0,0 L48,14.7 C96,29,192,59,288,74.7 C384,91,480,101,576,85.3 C672,69,768,27,864,16 C960,5,1056,35,1152,48 C1248,61,1344,59,1392,57.3 L1440,56 L1440,150 L1392,150 C1344,150,1248,150,1152,150 C1056,150,960,150,864,150 C768,150,672,150,576,150 C480,150,384,150,288,150 C192,150,96,150,48,150 L0,150 Z"></path>
          </svg>
        </div>

        <div className="container mx-auto flex flex-row gap-x-12 items-center justify-center min-h-[500px]">
          <div className="flex flex-col items-center justify-center rounded-lg w-[700px] h-[700px] bg-purple-100">
            <h3 className="text-3xl font-bold text-gray-900 py-6">{levels.title}</h3>

            <Swiper
                navigation
                thumbs={{
                  swiper: thumbsSwiper
                }}
                modules={[Navigation, Pagination, Thumbs]}
                pagination={{clickable: true, type: 'progressbar'}}
                className="h-96 w-full rounded-lg"
                onSlideChange={(swiper) => {
                  const activeSlideIndex = swiper.activeIndex;
                  const activeSign = levels.letters[activeSlideIndex]?.letter;
                  setSign(activeSign);
                }}
            >
              {levels.letters.map((letter, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="flex h-full w-full items-center justify-center">
                      <video
                          key={letter.videoPath}
                          controls
                          className="block h-4/5 object-fit"
                      >
                        <source src={letter.videoPath} type="video/mp4"/>
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </SwiperSlide>
              ))}
            </Swiper>

            <div className="text-center mt-4">
              <div className="flex h-16 w-16 items-center justify-center">
                {sign && (
                    <Image
                        src={levels.letters.find((item) => newFunction(item, sign))?.path ?? ""}
                        alt={sign}
                        width={50}
                        height={50}
                        className="block h-full w-full object-fit hover:cursor-pointer"
                    />
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-lg w-[700px] h-[700px] bg-orange-200">
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
                    <canvas ref={canvasRef} className="h-full w-full bg-gray-300 object-contain p-2"/>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <CameraOffIcon className="w-[100px] h-[100px]"/>
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
                    className="w-[50px] h-[50px] border-2 border-black rounded-lg p-2 hover:scale-125 transition-all duration-100"/>
              </Button>

              <Button
                  onClick={() => {
                    setVideo((video) => !video)
                  }}
              >
                {video ? (
                        <VideoIcon
                            className="w-[50px] h-[50px] border-2 border-black rounded-lg p-2 hover:scale-125 transition-all duration-100"/>)
                    : (
                        <VideoOffIcon
                            className="w-[50px] h-[50px] border-2 border-black rounded-lg p-2 hover:scale-125 transition-all duration-100"/>)
                }
              </Button>

            </div>
          </div>
        </div>

        <div className="max-container mt-4 flex justify-between space-x-10">
          <Link href="/spelling/learn-3">
            <p className="flex items-center space-x-2 cursor-pointer hover:scale-125 active:scale-100 hover:font-bold transition-all duration-100">
              <img src="/game/left_learn.png" alt="Backward" className="w-20 h-20"/>
              <p className="text-lg">
                Back to Level 3
              </p>
            </p>
          </Link>

          <Link href="/spelling">
            <p className="flex items-center space-x-2 cursor-pointer hover:scale-125 active:scale-100 hover:font-bold transition-all duration-100">
              <p className="text-lg">
                Go to Spelling Page
              </p>
              <img src="/game/right_learn.png" alt="Forward" className="w-20 h-20"/>
            </p>
          </Link>
        </div>

        <footer className="text-xs text-slate-400 text-center mt-6 p-3">
          Disclaimer: The content and simulations on this Website are for
          educational use only and do not replace professional advice. For
          accurate assessments and recommendations, consult a healthcare
          professional.
          <br/>
          All video materials in this course are sourced from Asphyxia's blog. This course is free.
          <br/>
          Reference sources:
          <a
              href="https://helloasphyxia.wordpress.com/blog/learn-auslan-australian-sign-language-online-course/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-500 underline"
          >
            Blog created by Asphyxia
          </a>
        </footer>

        <svg width="100%" height="20%" id="svg" className="fill-current bg-yellow-50 text-indigo-900 pt-8"
             viewBox="0 80 1440 70" xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M 0,400 L 0,150 C 84.29999999999998,140.8948717948718 168.59999999999997,131.78974358974358 248,125 C 327.40000000000003,118.2102564102564 401.9,113.73589743589744 475,123 C 548.1,132.26410256410256 619.8,155.26666666666668 714,146 C 808.2,136.73333333333332 924.9000000000001,95.19743589743588 1001,87 C 1077.1,78.80256410256412 1112.6,103.94358974358974 1179,120 C 1245.4,136.05641025641026 1342.7,143.02820512820512 1440,150 L 1440,400 L 0,400 Z"></path>
        </svg>
      </div>
  )
}


function newFunction(item: { letter: string; path: string; videoPath: string }, sign: string): unknown {
  return item.letter === sign
}

// <div className="w-full h-full items-center justify-center">
//   {sign && words.find((word) => word.letter === sign) &&
//     <Image
//       src={words.find((word) => word.letter === sign).sign}
//       alt={sign}
//       width={500}
//       height={500}
//       className="object-contain p-2"
//     />
//   }
// </div>
