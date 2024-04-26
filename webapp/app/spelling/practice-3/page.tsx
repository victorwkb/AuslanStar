'use client'

import React, { useRef, useState } from 'react'
import Webcam from 'react-webcam'
import { CameraIcon, CameraOffIcon, VideoIcon, VideoOffIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Thumbs, FreeMode } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Learn() {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [video, setVideo] = useState<boolean>(false);
  const [mirrored] = useState<boolean>(true);
  const [sign, setSign] = useState<string>("A");
  const [countdown, setCountdown] = useState<number>(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  const levels = {
    title: "Level 3",
    letters: [
      { letter: "Q", path: "/spellingletter/Q.png", signPath: "/spellingletter/signQ.png" },
      { letter: "R", path: "/spellingletter/R.png", signPath: "/spellingletter/signR.png" },
      { letter: "S", path: "/spellingletter/S.png", signPath: "/spellingletter/signS.png" },
      { letter: "T", path: "/spellingletter/T.png", signPath: "/spellingletter/signT.png" },
      { letter: "U", path: "/spellingletter/U.png", signPath: "/spellingletter/signU.png" },
      { letter: "V", path: "/spellingletter/V.png", signPath: "/spellingletter/signV.png" },
      { letter: "W", path: "/spellingletter/W.png", signPath: "/spellingletter/signW.png" },
      { letter: "X", path: "/spellingletter/X.png", signPath: "/spellingletter/signX.png" },
      { letter: "Y", path: "/spellingletter/Y.png", signPath: "/spellingletter/signY.png" },
      { letter: "Z", path: "/spellingletter/Z.png", signPath: "/spellingletter/signZ.png" },
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
        await sendImageToAPI(imageSrc);
      }
    }
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

  return (
    <div>
      <div className="bg-orange-200">
        <div className="animate-in max-w-5xl px-4 py-2 max-container padding-container">
          <h1 className="text-5xl font-bold text-white leading-tight whitespace-normal">
            Spelling in Auslan
          </h1>
        </div>
        <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"
          preserveAspectRatio="none" style={{ display: 'block' }}>
          <path fill="#FEFCE8"
            d="M0,0 L48,14.7 C96,29,192,59,288,74.7 C384,91,480,101,576,85.3 C672,69,768,27,864,16 C960,5,1056,35,1152,48 C1248,61,1344,59,1392,57.3 L1440,56 L1440,150 L1392,150 C1344,150,1248,150,1152,150 C1056,150,960,150,864,150 C768,150,672,150,576,150 C480,150,384,150,288,150 C192,150,96,150,48,150 L0,150 Z"></path>
        </svg>
      </div>

      <div className="container mx-auto flex flex-row gap-x-12 items-center justify-center min-h-[500px]">
        <div className="flex flex-col items-center justify-center rounded-lg w-[500px] h-[500px] bg-orange-100">
          <h3 className="text-3xl font-bold text-gray-900 py-6">{levels.title}</h3>

          <Swiper
            navigation
            thumbs={{
              swiper: thumbsSwiper
            }}
            modules={[Navigation, Pagination, Thumbs]}
            pagination={{ clickable: true, type: 'progressbar' }}
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
                  <Image
                    src={letter.path}
                    alt={letter.letter}
                    sizes="500px"
                    fill
                    className="block h-full w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={levels.letters.length}
            freeMode={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className='thumbs mt-3 h-20 w-full rounded-lg justify-center'
            watchSlidesProgress={true}
          >
            {levels.letters.map((letter, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex h-12 w-12 items-center justify-center">
                  <Image
                    src={letter.path}
                    alt={letter.letter}
                    width={50}
                    height={50}
                    className="block h-full w-full object-fit hover:cursor-pointer"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>


        </div>

        <div className="flex flex-col items-center justify-center rounded-lg w-[500px] h-[500px] bg-orange-200">
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

          <div className="flex flex-row items-center justify-center h-12 m-3">
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
    </div >
  )
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
