export default function PawnRule(element) {
  const black = element.classList.contains("bp");
  const pawnId = element.id;
  console.log(pawnId);
  let changingPartOfId = parseInt(pawnId[1]);
  const initialPawnValidSteps = [];
  for (let i = 0; i < 2; i++) {
    initialPawnValidSteps.push(
      !black
        ? document.getElementById(pawnId[0] + (changingPartOfId + i + 1))
        : document.getElementById(pawnId[0] + (changingPartOfId - i - 1))
    );
  }
  console.log(initialPawnValidSteps);
}
