import "./tile.css";
// import "./piece.css";

export default function Tile({ sum, cell, image }) {
  return (
    <div
      className={`tile ${sum % 2 === 0 ? "black_tile" : "white_tile"}`}
      id={`${cell}`}
    >
      {image && (
        <div
          className="piece"
          style={{ backgroundImage: `url(${image})` }}
          id={`${cell}`}
        ></div>
      )}
    </div>
  );
}
