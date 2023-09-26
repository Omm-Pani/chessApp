export default function PawnRule(pieceToMove) {
  const black = pieceToMove.classList.contains("bp");
  const pawnId = pieceToMove.id;
  let changingPartOfId = parseInt(pawnId[1]);
  const pawnValidSteps = [];

  if (pawnId[1] === "2" || pawnId[1] === "7") {
    for (let i = 0; i < 2; i++) {
      pawnValidSteps.push(
        !black
          ? pawnId[0] + (changingPartOfId + i + 1)
          : pawnId[0] + (changingPartOfId - i - 1)
      );
    }
  } else {
    pawnValidSteps.push(
      !black
        ? pawnId[0] + (changingPartOfId + 1)
        : pawnId[0] + (changingPartOfId - 1)
    );
  }
  return pawnValidSteps;
}
