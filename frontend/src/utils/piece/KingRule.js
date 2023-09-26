export default function KingRule(pieceToMove) {
  const kingId = pieceToMove.id;
  const kingRank = Number(kingId[0]);
  const kingFile = Number(kingId[1]);

  const kingValidMoves = [];
  const directions = [
    { file: 1, rank: 0 },
    { file: 1, rank: 1 },
    { file: 0, rank: 1 },
    { file: -1, rank: 1 },
    { file: -1, rank: 0 },
    { file: -1, rank: -1 },
    { file: 0, rank: -1 },
    { file: 1, rank: -1 },
  ];

  for (const direction of directions) {
    const nextFile = kingFile + direction.file;
    const nextRank = kingRank + direction.rank;

    if (isValidSquare(nextRank, nextFile)) {
      const square = document.getElementById(`${nextRank}${nextFile}`);
      const pieceAtSquare = square.classList.contains("containPiece");

      if (!pieceAtSquare) {
        // If the square is empty or occupied by an opponent's piece, it's a valid move
        kingValidMoves.push(`${nextRank}${nextFile}`);
      }
    }
  }

  return kingValidMoves;
}

function isValidSquare(file, rank) {
  return file >= 1 && file <= 8 && rank >= 1 && rank <= 8;
}
