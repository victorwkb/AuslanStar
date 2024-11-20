
"use client";
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants";
// Define a type for the board

interface Card {
  letter: string;
  sign: string;
}

type BoardState = string[];

type Stage = 'stage1' | 'stage2' | 'stage3' | 'stage4';
const currentStage: Stage = 'stage3';
type Difficulty = "easy" | "medium" | "hard";

// Define your board with pairs of images
const stagePairs: { [key: string]: Card[] } = {
  stage1: [
    { letter: "A.png", sign: "signA.png" },
    { letter: "B.png", sign: "signB.png" },
    { letter: "C.png", sign: "signC.png" },
    { letter: "D.png", sign: "signD.png" },
    { letter: "E.png", sign: "signE.png" },
    { letter: "F.png", sign: "signF.png" },
    { letter: "G.png", sign: "signG.png" },
    { letter: "H.png", sign: "signH.png" },
  ],
  stage2: [
    { letter: "I.png", sign: "signI.png" },
    { letter: "J.png", sign: "signJ.png" },
    { letter: "K.png", sign: "signK.png" },
    { letter: "L.png", sign: "signL.png" },
    { letter: "M.png", sign: "signM.png" },
    { letter: "N.png", sign: "signN.png" },
    { letter: "O.png", sign: "signO.png" },
    { letter: "P.png", sign: "signP.png" },
  ],
  stage3: [
    { letter: "Q.png", sign: "signQ.png" },
    { letter: "R.png", sign: "signR.png" },
    { letter: "S.png", sign: "signS.png" },
    { letter: "T.png", sign: "signT.png" },
    { letter: "U.png", sign: "signU.png" },
    { letter: "V.png", sign: "signV.png" },
    { letter: "W.png", sign: "signW.png" },
    { letter: "X.png", sign: "signX.png" },
    { letter: "Y.png", sign: "signY.png" },
    { letter: "Z.png", sign: "signZ.png" },
  ],
  stage4: [
    // All cards combined
    { letter: "A.png", sign: "signA.png" },
    { letter: "B.png", sign: "signB.png" },
    { letter: "C.png", sign: "signC.png" },
    { letter: "D.png", sign: "signD.png" },
    { letter: "E.png", sign: "signE.png" },
    { letter: "F.png", sign: "signF.png" },
    { letter: "G.png", sign: "signG.png" },
    { letter: "H.png", sign: "signH.png" },
    { letter: "I.png", sign: "signI.png" },
    { letter: "J.png", sign: "signJ.png" },
    { letter: "K.png", sign: "signK.png" },
    { letter: "L.png", sign: "signL.png" },
    { letter: "M.png", sign: "signM.png" },
    { letter: "N.png", sign: "signN.png" },
    { letter: "O.png", sign: "signO.png" },
    { letter: "P.png", sign: "signP.png" },
    { letter: "Q.png", sign: "signQ.png" },
    { letter: "R.png", sign: "signR.png" },
    { letter: "S.png", sign: "signS.png" },
    { letter: "T.png", sign: "signT.png" },
    { letter: "U.png", sign: "signU.png" },
    { letter: "V.png", sign: "signV.png" },
    { letter: "W.png", sign: "signW.png" },
    { letter: "X.png", sign: "signX.png" },
    { letter: "Y.png", sign: "signY.png" },
    { letter: "Z.png", sign: "signZ.png" },
  ]
};



export default function Match() {
  // Explicitly type the useState hooks
  const [boardData, setBoardData] = useState<BoardState>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showGuide, setShowGuide] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');


  const handleShowGuide = () => {
    setShowGuide(true);
  };

  useEffect(() => {
    console.log(`Matched Cards: ${matchedCards.length}, Required Matches: ${stagePairs[currentStage].length * 2}`);
    if (matchedCards.length === stagePairs[currentStage].length * 2 && !gameOver) {
      console.log("All cards matched, setting game over.");
      const timer = setTimeout(() => {
        setGameOver(true);
        setShowModal(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [matchedCards, gameOver]);


  useEffect(() => {
    initialize();
  }, [currentStage]);  // Reinitialize when stage changes

  useEffect(() => {
    initialize(); // Call initialize whenever difficulty changes
  }, [difficulty]);

  const initialize = () => {
    let boardPairs = stagePairs[currentStage];
    let pairsToUse = [];

    switch (difficulty) {
      case 'easy':
        pairsToUse = shuffle(boardPairs).slice(0, 2);
        break;
      case 'medium':
        pairsToUse = shuffle(boardPairs).slice(0, 4);
        break;
      case 'hard':
        pairsToUse = shuffle(boardPairs).slice(0, 8);
        break;
      default:
        pairsToUse = shuffle(boardPairs).slice(0, 8); // Defaults to 'hard' if somehow an unknown difficulty is selected
    }

    const imagePaths: BoardState = pairsToUse.flatMap(card => [card.letter, card.sign]);
    const shuffledImages = shuffle(imagePaths);
    setBoardData(shuffledImages);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setGameOver(false);
  };



  const shuffle = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
  };



  const updateActiveCards = (i: number) => {
    if (!flippedCards.includes(i) && flippedCards.length < 2) {
      const newFlippedCards = [...flippedCards, i];
      setFlippedCards(newFlippedCards);
      setMoves(moves + 1);

      if (newFlippedCards.length === 2) {
        const [firstIndex, secondIndex] = newFlippedCards;
        const firstCard = boardData[firstIndex];
        const secondCard = boardData[secondIndex];

        const isMatch = stagePairs[currentStage].some((pair: Card) =>
          (pair.letter === firstCard && pair.sign === secondCard) ||
          (pair.sign === firstCard && pair.letter === secondCard)
        );

        if (isMatch) {
          const newMatchedCards = [...matchedCards, firstIndex, secondIndex];
          setMatchedCards(newMatchedCards);

          if (newMatchedCards.length === boardData.length) {
            setTimeout(() => {
              setGameOver(true);
              setShowModal(true);
            }, 500); // A short delay to see the last match
          }
        }

        // Reset flipped cards after a short delay whether it's a match or not
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };







  return (
    <div>
      <div className="bg-blue-200 text-white">
        <div
          className="animate-in max-w-5xl px-4 py-10 max-container padding-container"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <h1 className="text-5xl font-bold leading-tight whitespace-normal">
            Memory Match Challenge: Level 3
          </h1>
          <p className="text-2xl mt-2">
            Match all pairs to win!
          </p>
        </div>

        <svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"
          preserveAspectRatio="none" style={{ display: 'block' }}>
          <path fill="#FEFCE8"
            d="M0,0 L48,14.7 C96,29,192,59,288,74.7 C384,91,480,101,576,85.3 C672,69,768,27,864,16 C960,5,1056,35,1152,48 C1248,61,1344,59,1392,57.3 L1440,56 L1440,150 L1392,150 C1344,150,1248,150,1152,150 C1056,150,960,150,864,150 C768,150,672,150,576,150 C480,150,384,150,288,150 C192,150,96,150,48,150 L0,150 Z"></path>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto p-4 ">
        <div className="game-container ">
          <div className="menu bg-blue-200 flex justify-center items-center w-full py-4 ">
            <select
              value={difficulty}
              onChange={e => setDifficulty(e.target.value as Difficulty)}
              className="bg-white border border-blue-500 text-gray-700 py-2 px-4 rounded shadow hover:border-blue-700 focus:outline-none focus:border-blue-700 transition-colors"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <p className="text-center mx-4">{`Moves: ${moves}`}</p>

          </div>
          {/* Instruction area */}
          <div className="girl-container" onClick={handleShowGuide}>
            <img src="/game/girl.png" alt="Guide" className="girl-image" />
          </div>
          <div className="girl-container">
            <img src="/game/girl.png" alt="Guide" className="girl-image" />
            <div className="speech-bubble" onClick={handleShowGuide}>
              <span className="speech-bubble-text">
                Do you know how to play? Click here.
              </span>
            </div>
          </div>
          {/*<div className="guide-container" onClick={handleShowGuide}>*/}
          {/*  <img src="/game/howtoplay.png" alt="How to play" className="guide-image"/>*/}
          {/*</div>*/}

          <div className="board">
            {boardData.map((imageName, i) => {
              const flipped = flippedCards.includes(i);
              const matched = matchedCards.includes(i);
              const imagePath = `/spellingletter/${imageName}`;
              return (
                <div
                  onClick={() => updateActiveCards(i)}
                  key={i}
                  className={`card ${flipped || matched ? "active" : ""} ${matched ? "matched" : ""
                    } ${gameOver ? "gameover" : ""}`}
                >
                  {flipped || matched ? (
                    <img src={imagePath} alt={`Card ${imageName}`} className="card-image" />
                  ) : (
                    <div className="card-back"></div>
                  )}
                </div>
              );
            })}
          </div>


          {showGuide && (
            <div className="guide-modal-overlay" onClick={() => setShowGuide(false)}>
              <div className="guide-modal-content">
                <img src="/game/guide.gif" alt="How to Play" className="guide-animation" />
              </div>
            </div>
          )}

          {showModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <div className="modal-header">
                  <h3>Congratulations!</h3>
                </div>
                <div className="modal-body">
                  <p>You've completed this round with <strong>{moves}</strong> moves!</p>
                  <div className="modal-actions">

                    <Link href="/spelling">
                      <button onClick={() => { /* logic for next stage */
                      }} className="modal-button next">
                        Back to Spelling Menu
                      </button>
                    </Link>
                    <button onClick={() => {
                      initialize();
                      setShowModal(false);
                    }} className="modal-button replay">
                      Play Again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}


          <div className="menu bg-blue-200">
            {/*<p>{`GameOver - ${gameOver}`}</p>*/}
            <button onClick={() => initialize()} className="reset-btn">
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="max-container mt-4 flex justify-between space-x-10">
        <Link href="/matchgame/game2">
          <p className="flex items-center space-x-2 cursor-pointer hover:scale-125 active:scale-100 hover:font-bold transition-all duration-100">
            <img src="/game/left.png" alt="Backward" className="w-20 h-20" />
            <p className="text-lg">
              Back to Level 2
            </p>
          </p>
        </Link>

        <Link href="/matchgame/game4">
          <p className="flex items-center space-x-2 cursor-pointer hover:scale-125 active:scale-100 hover:font-bold transition-all duration-100">
            <p className="text-lg">
              Go to Spelling Page
            </p>
            <img src="/game/right.png" alt="Forward" className="w-20 h-20" />
          </p>
        </Link>
      </div>


      <svg width="100%" height="20%" id="svg" className="fill-current bg-yellow-50 text-indigo-900 pt-8"
        viewBox="0 80 1440 70" xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 L 0,150 C 84.29999999999998,140.8948717948718 168.59999999999997,131.78974358974358 248,125 C 327.40000000000003,118.2102564102564 401.9,113.73589743589744 475,123 C 548.1,132.26410256410256 619.8,155.26666666666668 714,146 C 808.2,136.73333333333332 924.9000000000001,95.19743589743588 1001,87 C 1077.1,78.80256410256412 1112.6,103.94358974358974 1179,120 C 1245.4,136.05641025641026 1342.7,143.02820512820512 1440,150 L 1440,400 L 0,400 Z"></path>
      </svg>
    </div>
  );
}
