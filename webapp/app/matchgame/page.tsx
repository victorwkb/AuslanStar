// "use client";
//
// import { useState, useEffect } from "react";
//
// // Define a type for the board
//
//
// // const board: BoardType = ["🤖", "👽", "👻", "🤡", "🐧", "🦚", "😄", "🚀"];
// type BoardType = { letter: string; sign: string }[];
//
// const board: BoardType = [
//   { letter: "A.png", sign: "signA.png" },
//   { letter: "B.png", sign: "signB.png" },
//   { letter: "C.png", sign: "signC.png" },
//   { letter: "D.png", sign: "signD.png" },
//   { letter: "E.png", sign: "signE.png" },
//   { letter: "F.png", sign: "signF.png" },
//   { letter: "G.png", sign: "signG.png" },
//   { letter: "H.png", sign: "signH.png" },
// ];
//
// export default function Match() {
//   // Explicitly type the useState hooks
//   const [boardData, setBoardData] = useState<BoardType>([]);
//   const [flippedCards, setFlippedCards] = useState<number[]>([]);
//   const [matchedCards, setMatchedCards] = useState<number[]>([]);
//   const [moves, setMoves] = useState<number>(0);
//   const [gameOver, setGameOver] = useState<boolean>(false);
//
//   useEffect(() => {
//     initialize();
//   }, []);
//
//   useEffect(() => {
//     if (matchedCards.length === 16) {
//       setGameOver(true);
//     }
//   }, [matchedCards, moves]);
//
// const initialize = () => {
//   // 拓展和混合字母图片与手势图片
//   const extendedBoard = board.flatMap((item) => [item.letter, item.sign]);
//   shuffle(extendedBoard);
//   setGameOver(false);
//   setFlippedCards([]);
//   setMatchedCards([]);
//   setMoves(0);
// };
//
// const shuffle = (items: string[]) => {
//   const shuffledItems: string[] = items.sort(() => Math.random() - 0.5);
//   setBoardData(shuffledItems);
// };
//
//
//
//   const updateActiveCards = (i: number) => {
//   if (flippedCards.length === 1 && !flippedCards.includes(i)) {
//     const firstCard = boardData[flippedCards[0]];
//     const secondCard = boardData[i];
//
//     // 检查是否为匹配的一对
//     const isMatch = board.some(pair =>
//       (pair.letter === firstCard && pair.sign === secondCard) ||
//       (pair.sign === firstCard && pair.letter === secondCard)
//     );
//
//     if (isMatch) {
//       setMatchedCards((prev) => [...prev, flippedCards[0], i]);
//     }
//
//     setFlippedCards([...flippedCards, i]);
//   } else if (flippedCards.length === 2) {
//     setFlippedCards([i]);
//   } else {
//     setFlippedCards([...flippedCards, i]);
//   }
//
//   setMoves((v) => v + 1);
// };
//
//
//   return (
//       <div className="max-container padding-container layout-main bg-white">
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
//
//
//         <div className="menu">
//           <p>{`GameOver - ${gameOver}`}</p>
//           <button onClick={() => initialize()} className="reset-btn">
//             Reset
//           </button>
//         </div>
//       </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";

// Define a type for the board

interface Card {
  letter: string;
  sign: string;
}

// Define a type for the board state, which will be an array of strings (image paths)
type BoardState = string[];

// Define your board with pairs of images
const boardPairs: Card[] = [
  { letter: "A.png", sign: "signA.png" },
  { letter: "B.png", sign: "signB.png" },
  { letter: "C.png", sign: "signC.png" },
  { letter: "D.png", sign: "signD.png" },
  { letter: "E.png", sign: "signE.png" },
  { letter: "F.png", sign: "signF.png" },
  { letter: "G.png", sign: "signG.png" },
  { letter: "H.png", sign: "signH.png" },
];

export default function Match() {
  // Explicitly type the useState hooks
  const [boardData, setBoardData] = useState<BoardState>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    if (matchedCards.length === boardPairs.length * 2) {
      setGameOver(true);
    }
  }, [matchedCards]);

  const initialize = () => {
    // Mix the image paths together for shuffling
    const imagePaths: BoardState = boardPairs.flatMap(card => [card.letter, card.sign]);
    const shuffledImages = shuffle(imagePaths);
    setBoardData(shuffledImages);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setGameOver(false);
  };

  const shuffle = (imagePaths: BoardState): BoardState => {
    return [...imagePaths].sort(() => Math.random() - 0.5);
  };



  const updateActiveCards = (i: number) => {
  if (flippedCards.length === 1 && !flippedCards.includes(i)) {
    const firstCard = boardData[flippedCards[0]];
    const secondCard = boardData[i];

    // 检查是否为匹配的一对
    const isMatch = boardPairs.some(pair =>
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
        <div className="menu">
          <p>{`Moves : ${moves}`}</p>
        </div>

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


        <div className="menu">
          <p>{`GameOver - ${gameOver}`}</p>
          <button onClick={() => initialize()} className="reset-btn">
            Reset
          </button>
        </div>
      </div>
  );
}
