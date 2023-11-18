export default function PawnRule(pieceToMove) {
  const black = pieceToMove.classList.contains("bp");
  const pawnId = pieceToMove.id;
  const pawnRank = Number(pawnId[0]);
  const pawnFile = Number(pawnId[1]);
  const pawnValidMoves = [];

  if (pawnId[1] === "2" || pawnId[1] === "7") {
    for (let i = 0; i < 2; i++) {
      const nextFile = !black ? pawnFile + i + 1 : pawnFile - i - 1;

      if (isValidSquare(pawnRank, nextFile)) {
        const square = document.getElementById(`${pawnRank}${nextFile}`);
        const pieceAtSquare = square.classList.contains("containPiece");

        if (!pieceAtSquare) {
          pawnValidMoves.push(`${pawnRank}${nextFile}`);
        }
      }
    }
  } else {
    const nextFile = !black ? pawnFile + 1 : pawnFile - 1;

    if (isValidSquare(pawnRank, nextFile)) {
      const square = document.getElementById(`${pawnRank}${nextFile}`);
      const pieceAtSquare = square.classList.contains("containPiece");

      if (!pieceAtSquare) {
        pawnValidMoves.push(`${pawnRank}${nextFile}`);
      }
    }
  }
  return pawnValidMoves;
}
function isValidSquare(file, rank) {
  return file >= 1 && file <= 8 && rank >= 1 && rank <= 8;
}
