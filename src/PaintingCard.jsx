function PaintingCard({ painting }) {
  return (
    <div className="card">
      <h2>{painting.title}</h2>
      <p>
        Season {painting.season}, Episode {painting.episode}
      </p>
    </div>
  );
}

export default PaintingCard;
