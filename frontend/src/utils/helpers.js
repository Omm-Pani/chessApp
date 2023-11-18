export default function isValidSquare(file, rank) {
  return file >= 1 && file <= 8 && rank >= 1 && rank <= 8;
}
