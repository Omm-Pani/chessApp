import getBishopMoves from "./BishopRule";
import getrookMoves from "./RookRule";

export default function QueenRule(pieceToMove) {
  const rookMoves = getrookMoves(pieceToMove);
  const bishopMoves = getBishopMoves(pieceToMove);

  const queenValidMoves = rookMoves.concat(bishopMoves);

  return queenValidMoves;
}
