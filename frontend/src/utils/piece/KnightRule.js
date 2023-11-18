export default function KnightRule(pieceToMove) {
  const knightId = pieceToMove.id;
  const knightRank = Number(knightId[0]);
  const knightFile = Number(knightId[1]);
  const knightValidMoves = [];

  const directions = [
    { rank: 1, file: 2 },
    { rank: -1, file: 2 },
    { rank: 1, file: -2 },
    { rank: -1, file: -2 },
    { rank: 2, file: 1 },
    { rank: 2, file: -1 },
    { rank: -2, file: 1 },
    { rank: -2, file: -1 },
  ];

  for (const direction of directions) {
    const nextRank = knightRank + direction.rank;
    const nextFile = knightFile + direction.file;

    if (isValidSquare(nextFile, nextRank)) {
      const square = document.getElementById(`${nextRank}${nextFile}`);
      const pieceAtSquare = square.classList.contains("containPiece");

      if (!pieceAtSquare) {
        // If the square is empty or occupied by an opponent's piece, it's a valid move
        knightValidMoves.push(`${nextRank}${nextFile}`);
      }
    }
  }

  return knightValidMoves;
}

function isValidSquare(file, rank) {
  return file >= 1 && file <= 8 && rank >= 1 && rank <= 8;
}
