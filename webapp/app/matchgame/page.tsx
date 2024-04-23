
// Testing Mode
//
//
// "use client";
//
// import {useState, useEffect} from "react";
//
// // Define a type for the board
// function seededRandom(seed) {
//   function random() {
//     var x = Math.sin(seed++) * 10000;
//     return x - Math.floor(x);
//   }
//
//   return random;
// }
//
// interface Card {
//   letter: string;
//   sign: string;
// }
//
// // Define a type for the board state, which will be an array of strings (image paths)
// type BoardState = string[];
//
// // Define your board with pairs of images
// const boardPairs: Card[] = [
//   {letter: "A.png", sign: "signA.png"},
//   {letter: "B.png", sign: "signB.png"},
//   {letter: "C.png", sign: "signC.png"},
//   {letter: "D.png", sign: "signD.png"},
//   {letter: "E.png", sign: "signE.png"},
//   {letter: "F.png", sign: "signF.png"},
//   {letter: "G.png", sign: "signG.png"},
//   {letter: "H.png", sign: "signH.png"},
// ];
//
// export default function Match() {
//   // Explicitly type the useState hooks
//   const [boardData, setBoardData] = useState<BoardState>([]);
//   const [flippedCards, setFlippedCards] = useState<number[]>([]);
//   const [matchedCards, setMatchedCards] = useState<number[]>([]);
//   const [moves, setMoves] = useState<number>(0);
//   const [gameOver, setGameOver] = useState<boolean>(false);
//   const [showModal, setShowModal] = useState<boolean>(false);
//
//   useEffect(() => {
//     if (matchedCards.length === boardPairs.length * 2 && !gameOver) {
//       // Wait for 2 seconds, then show the modal and set the game as over
//       const timer = setTimeout(() => {
//         setGameOver(true);
//         setShowModal(true);
//       }, 500);
//
//       // Clear the timer if the component unmounts
//       return () => clearTimeout(timer);
//     }
//   }, [matchedCards, gameOver]);
//
//   useEffect(() => {
//     initialize();
//   }, []);
//
//
//   const initialize = (seed = 1) => { // 默认种子为1
//     const imagePaths: BoardState = boardPairs.flatMap(card => [card.letter, card.sign]);
//     const shuffledImages = shuffle(imagePaths, seed); // 使用种子来洗牌
//     setBoardData(shuffledImages);
//     setFlippedCards([]);
//     setMatchedCards([]);
//     setMoves(0);
//     setGameOver(false);
//   };
//
//   const shuffle = (imagePaths: BoardState, seed: number): BoardState => {
//     const random = seededRandom(seed);
//     return [...imagePaths].sort(() => random() - 0.5);
//   };
//
//
//   const updateActiveCards = (i: number) => {
//     if (flippedCards.length === 1 && !flippedCards.includes(i)) {
//       const firstCard = boardData[flippedCards[0]];
//       const secondCard = boardData[i];
//
//
//       const isMatch = boardPairs.some(pair =>
//           (pair.letter === firstCard && pair.sign === secondCard) ||
//           (pair.sign === firstCard && pair.letter === secondCard)
//       );
//
//       if (isMatch) {
//         setMatchedCards((prev) => [...prev, flippedCards[0], i]);
//       }
//
//       setFlippedCards([...flippedCards, i]);
//     } else if (flippedCards.length === 2) {
//       setFlippedCards([i]);
//     } else {
//       setFlippedCards([...flippedCards, i]);
//     }
//
//     setMoves((v) => v + 1);
//   };
//
//
//   return (
//       <div className="max-container layout-main bg-white">
//         <header className="game-header">
//           <h1 className="game-title">Memory Match Challenge</h1>
//           <p className="game-instructions">Match all pairs to win!</p>
//         </header>
//         <div className="menu">
//           <p>{`Moves : ${moves}`}</p>
//         </div>
//
//         <div className="board">
//           {boardData.map((imageName, i) => {
//             const flipped = flippedCards.includes(i);
//             const matched = matchedCards.includes(i);
//             const imagePath = `/game/${imageName}`; // 动态构建图片路径
//             return (
//                 <div
//                     onClick={() => updateActiveCards(i)}
//                     key={i}
//                     className={`card ${flipped || matched ? "active" : ""} ${
//                         matched ? "matched" : ""
//                     } ${gameOver ? "gameover" : ""}`}
//                 >
//                   {flipped || matched ? (
//                       <img src={imagePath} alt={`Card ${imageName}`} className="card-image"/>
//                   ) : (
//                       <div className="card-back"></div>
//                   )}
//                 </div>
//             );
//           })}
//         </div>
//         {showModal && (
//             <div className="modal-overlay">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <h3>Congratulations!</h3>
//                 </div>
//                 <div className="modal-body">
//                   <p>You've completed this round with <strong>{moves}</strong> moves!</p>
//                   <div className="modal-actions">
//                     <button onClick={() => { /* logic for next stage */
//                     }} className="modal-button next">
//                       Back to Spelling Menu
//                     </button>
//                     <button onClick={() => {
//                       initialize();
//                       setShowModal(false);
//                     }} className="modal-button replay">
//                       Play Again
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//         )}
//
//
//         <div className="menu">
//           {/*<p>{`GameOver - ${gameOver}`}</p>*/}
//           <button onClick={() => initialize()} className="reset-btn">
//             Reset
//           </button>
//         </div>
//       </div>
//   );
// }
//


// 测试stage

"use client";

import { useState, useEffect } from "react";

// Define a type for the board

interface Card {
  letter: string;
  sign: string;
}

// Define a type for the board state, which will be an array of strings (image paths)
type BoardState = string[];

type Stage = 'stage1' | 'stage2' | 'stage3' | 'stage4';
const currentStage: Stage = 'stage1';

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

  const handleShowGuide = () => {
    setShowGuide(true);
  };

   useEffect(() => {
      if (matchedCards.length === stagePairs[currentStage].length * 2 && !gameOver) {
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




  const initialize = () => {
    let boardPairs = stagePairs[currentStage];
    if (currentStage === "stage3" || currentStage === "stage4") {
      boardPairs = shuffle(boardPairs).slice(0, 8); // Select 8 pairs for stage 3 and stage 4
    }
    const imagePaths: BoardState = boardPairs.flatMap(card => [card.letter, card.sign]);
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
    if (flippedCards.length === 1 && !flippedCards.includes(i)) {
      const firstCard = boardData[flippedCards[0]];
      const secondCard = boardData[i];

      // Correcting boardPairs to stagePairs[currentStage]
      const isMatch = stagePairs[currentStage].some((pair: Card) => // Specified type Card for pair
        (pair.letter === firstCard && pair.sign === secondCard) ||
        (pair.sign === firstCard && pair.letter === secondCard)
      );

      if (isMatch) {
        setMatchedCards((prev) => [...prev, flippedCards[0], i]);
      }

      setFlippedCards([...flippedCards, i]);
    } else if (flippedCards.length === 2) {
      setFlippedCards([i]);
    } else {
      setFlippedCards([...flippedCards, i]);
    }

    setMoves((v) => v + 1);
  };



  return (
      <div className="max-container padding-container layout-main bg-white">
        <div className="game-container">

          <header className="game-header">
            <h1 className="game-title">Memory Match Challenge</h1>
            <p className="game-instructions">Match all pairs to win!</p>
          </header>
          <div className="menu">
            <p>{`Moves : ${moves}`}</p>
          </div>
          {/* Instruction area */}
          <div className="girl-container" onClick={handleShowGuide}>
            <img src="/game/girl.png" alt="Guide" className="girl-image"/>
          </div>
          <div className="girl-container">
                <img src="/game/girl.png" alt="Guide" className="girl-image"/>
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
              const imagePath = `/game/${imageName}`; // 动态构建图片路径
              return (
                  <div
                      onClick={() => updateActiveCards(i)}
                      key={i}
                      className={`card ${flipped || matched ? "active" : ""} ${
                          matched ? "matched" : ""
                      } ${gameOver ? "gameover" : ""}`}
                  >
                    {flipped || matched ? (
                        <img src={imagePath} alt={`Card ${imageName}`} className="card-image"/>
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
                  <img src="/game/guide.gif" alt="How to Play" className="guide-animation"/>
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
                      <button onClick={() => { /* logic for next stage */
                      }} className="modal-button next">
                        Back to Spelling Menu
                      </button>
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


          <div className="menu">
            {/*<p>{`GameOver - ${gameOver}`}</p>*/}
            <button onClick={() => initialize()} className="reset-btn">
              Reset
            </button>
          </div>
        </div>
      </div>
  );
}
