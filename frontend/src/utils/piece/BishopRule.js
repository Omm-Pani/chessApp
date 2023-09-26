export default function getBishopMoves(pieceToMove) {
  const bishopId = pieceToMove.id;
  const bishopRank = Number(bishopId[0]);
  const bishopFile = Number(bishopId[1]);
  const validBishopMoves = [];
  const directions = [
    { file: 1, rank: 1 },
    { file: -1, rank: 1 },
    { file: 1, rank: -1 },
    { file: -1, rank: -1 },
  ];

  for (const direction of directions) {
    let nextFile = bishopFile + direction.file;
    let nextRank = bishopRank + direction.rank;

    while (isValidSquare(nextFile, nextRank)) {
      const square = document.getElementById(`${nextRank}${nextFile}`);
      const pieceAtSquare = square.classList.contains("containPiece");

      if (!pieceAtSquare) {
        // If the square is empty or occupied by an opponent's piece, it's a valid move
        validBishopMoves.push(`${nextRank}${nextFile}`);
      }

      if (pieceAtSquare) {
        // If there's a piece in this direction, stop searching in this direction
        break;
      }

      nextFile += direction.file;
      nextRank += direction.rank;
    }
  }

  return validBishopMoves;
}

function isValidSquare(file, rank) {
  return file >= 1 && file <= 8 && rank >= 1 && rank <= 8;
}
