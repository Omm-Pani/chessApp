import React, { useState } from "react";
import "./chessboard.css";

import PawnRule from "../../utils/piece/PawnRule";
import RookRule from "../../utils/piece/RookRule";
import BishopRule from "../../utils/piece/BishopRule";
import QueenRule from "../../utils/piece/QueenRule";
import KingRule from "../../utils/piece/KingRule";
import KnightRule from "../../utils/piece/KnightRule";

export default function Chessboard() {
  const y = [1, 2, 3, 4, 5, 6, 7, 8];
  const x = [1, 2, 3, 4, 5, 6, 7, 8];

  const initialBoardState = [];
  let board = [];

  const [pieces, setPieces] = useState(initialBoardState);
  const [pieceId, setPieceId] = useState("");
  const [allowedMoves, setAllowedMoves] = useState([]);

  const handlePiece = (e) => {
    const pieceToMove = e.target;
    const isWhite = pieceToMove.classList.contains("w");
    console.log(isWhite);
    setPieceId(pieceToMove.id);

    if (
      pieceToMove.classList.contains("wp") ||
      pieceToMove.classList.contains("bp")
    ) {
      setAllowedMoves(PawnRule(pieceToMove));
    }
    if (
      pieceToMove.classList.contains("wr") ||
      pieceToMove.classList.contains("br")
    ) {
      setAllowedMoves(RookRule(pieceToMove));
    }
    if (
      pieceToMove.classList.contains("wb") ||
      pieceToMove.classList.contains("bb")
    ) {
      setAllowedMoves(BishopRule(pieceToMove));
    }
    if (
      pieceToMove.classList.contains("wq") ||
      pieceToMove.classList.contains("bq")
    ) {
      setAllowedMoves(QueenRule(pieceToMove));
    }
    if (
      pieceToMove.classList.contains("wk") ||
      pieceToMove.classList.contains("bk")
    ) {
      setAllowedMoves(KingRule(pieceToMove));
    }
    if (
      pieceToMove.classList.contains("wn") ||
      pieceToMove.classList.contains("bn")
    ) {
      setAllowedMoves(KnightRule(pieceToMove));
    }
  };

  const handleSquare = (e) => {
    const square = e.currentTarget;
    const squareId = square.id;
    console.log(squareId);
    allowedMoves.map((m) => {
      if (m === squareId) {
        setPieces((value) => {
          const pieces = value.map((p) => {
            if (
              p.x === Number(pieceId[0]) - 1 &&
              p.y === Number(pieceId[1]) - 1
            ) {
              p.x = Number(squareId[0]) - 1;
              p.y = Number(squareId[1]) - 1;
            }
            return p;
          });
          return pieces;
        });
      }
    });
  };

  // adding rook knight bishop queen and king
  for (let p = 0; p < 2; p++) {
    const type = p === 0 ? "b" : "w";
    const y = p === 0 ? 7 : 0;
    initialBoardState.push({
      image: `assets/${type}r.png`,
      x: 0,
      y,
      type: `${type}r`,
      color: `${type}`,
    });
    initialBoardState.push({
      image: `assets/${type}n.png`,
      x: 1,
      y,
      type: `${type}n`,
      color: `${type}`,
    });
    initialBoardState.push({
      image: `assets/${type}b.png`,
      x: 2,
      y,
      type: `${type}b`,
      color: `${type}`,
    });
    initialBoardState.push({
      image: `assets/${type}q.png`,
      x: 3,
      y,
      type: `${type}q`,
      color: `${type}`,
    });
    initialBoardState.push({
      image: `assets/${type}k.png`,
      x: 4,
      y,
      type: `${type}k`,
      color: `${type}`,
    });
    initialBoardState.push({
      image: `assets/${type}b.png`,
      x: 5,
      y,
      type: `${type}b`,
      color: `${type}`,
    });
    initialBoardState.push({
      image: `assets/${type}n.png`,
      x: 6,
      y,
      type: `${type}n`,
      color: `${type}`,
    });
    initialBoardState.push({
      image: `assets/${type}r.png`,
      x: 7,
      y,
      type: `${type}r`,
      color: `${type}`,
    });
  }
  //adding pawns
  for (let i = 0; i <= 7; i++) {
    // adding white pawns
    initialBoardState.push({
      image: "assets/wp.png",
      x: i,
      y: 1,
      type: "wp",
      color: "w",
    });

    // adding black pawns
    initialBoardState.push({
      image: "assets/bp.png",
      x: i,
      y: 6,
      type: "bp",
      color: "b",
    });
  }

  //displaying all pieces on board
  for (let i = y.length - 1; i >= 0; i--) {
    for (let j = 0; j < x.length; j++) {
      let sum = i + j + 2;
      let cell = `${x[j]}${y[i]}`;
      let image = undefined;
      let type = "";
      let color = "";
      // to display pieces
      pieces.forEach((p) => {
        if (p.x === j && p.y === i) {
          image = p.image;
          type = p.type;
          color = p.color;
        }
      });

      board.push(
        <div
          className={`tile ${sum % 2 === 0 ? "black_tile" : "white_tile"} ${
            type ? "containPiece" : ""
          } `}
          id={`${cell}`}
          key={cell}
          onClick={(e) => {
            handleSquare(e);
          }}
        >
          {image && (
            <div
              className={`piece ${type} ${color}`}
              id={`${cell}`}
              style={{ backgroundImage: `url(${image})` }}
              onClick={(e) => {
                handlePiece(e);
              }}
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
