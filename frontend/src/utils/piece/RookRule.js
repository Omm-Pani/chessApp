export default function getrookMoves(pieceToMove) {
  const rookId = pieceToMove.id;
  const rookRank = Number(rookId[0]);
  const rookFile = Number(rookId[1]);
  const validrookMoves = [];
  const directions = [
    { file: 1, rank: 0 },
    { file: 0, rank: 1 },
    { file: -1, rank: 0 },
    { file: 0, rank: -1 },
  ];

  for (const direction of directions) {
    let nextFile = rookFile + direction.file;
    let nextRank = rookRank + direction.rank;

    while (isValidSquare(nextFile, nextRank)) {
      const square = document.getElementById(`${nextRank}${nextFile}`);
      const pieceAtSquare = square.classList.contains("containPiece");

      if (!pieceAtSquare) {
        // If the square is empty or occupied by an opponent's piece, it's a valid move
        validrookMoves.push(`${nextRank}${nextFile}`);
      }

      if (pieceAtSquare) {
        // If there's a piece in this direction, stop searching in this direction
        break;
      }

      nextFile += direction.file;
      nextRank += direction.rank;
    }
  }

  return validrookMoves;
}

function isValidSquare(file, rank) {
  return file >= 1 && file <= 8 && rank >= 1 && rank <= 8;
}
