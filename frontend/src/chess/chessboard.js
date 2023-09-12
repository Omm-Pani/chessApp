import React, { useState, useRef, useEffect } from "react";
import "./chessboard.css";
import "./tile.css";
import PawnRule from "./PawnRule";

export default function Chessboard({ isWhite }) {
  const y = [1, 2, 3, 4, 5, 6, 7, 8];
  const x = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const [toMove, setToMove] = useState({});

  const pieces = [];
  let board = [];
  const handleClick = (e) => {
    const element = e.currentTarget;
    if (element.classList.contains("bp") || element.classList.contains("wp")) {
      PawnRule(element);
    }
  };

  // adding rook knight bishop queen and king
  for (let p = 0; p < 2; p++) {
    const type = p === 0 ? "b" : "w";
    const y = p === 0 ? 7 : 0;
    pieces.push({ image: `assets/${type}n.png`, x: 6, y, type: `${type}n` });
    pieces.push({ image: `assets/${type}r.png`, x: 0, y, type: `${type}r` });
    pieces.push({ image: `assets/${type}n.png`, x: 1, y, type: `${type}n` });
    pieces.push({ image: `assets/${type}b.png`, x: 2, y, type: `${type}b` });
    pieces.push({ image: `assets/${type}q.png`, x: 3, y, type: `${type}q` });
    pieces.push({ image: `assets/${type}k.png`, x: 4, y, type: `${type}k` });
    pieces.push({ image: `assets/${type}b.png`, x: 5, y, type: `${type}b` });
    pieces.push({ image: `assets/${type}r.png`, x: 7, y, type: `${type}r` });
  }

  for (let i = y.length - 1; i >= 0; i--) {
    for (let j = 0; j < x.length; j++) {
      let sum = i + j + 2;
      let cell = `${x[j]}${y[i]}`;
      let image = undefined;
      let type = "";

      // adding white pawns
      pieces.push({
        image: "assets/wp.png",
        x: j,
        y: 1,
        type: "wp",
      });

      // adding black pawns
      pieces.push({
        image: "assets/bp.png",
        x: j,
        y: 6,
        type: "bp",
      });

      // to display pieces
      pieces.forEach((p) => {
        if (p.x === j && p.y === i) {
          image = p.image;
          type = p.type;
        }
      });
      board.push(
        <div
          className={`tile ${sum % 2 === 0 ? "black_tile" : "white_tile"} ${
            type && `${type}`
          }`}
          id={`${cell}`}
          key={cell}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          {image && (
            <div
              className={`piece ${type}`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          )}
        </div>
      );
    }
  }

  return (
    <div className="homepage">
      <div className="homepage_wrap">
        <div className="player_top player">Opponent</div>

        <div className="chessboard_wrap">
          <div className="chessboard">{board}</div>
        </div>

        <div className="player_bottom player">Player</div>
      </div>
    </div>
  );
}
