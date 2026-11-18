function PaintingCard({ painting }) {
  return (
    <div>
      <h2>{painting.title}</h2>
      <p>
        {painting.episode_code} · {painting.style}
      </p>
    </div>
  );
}

export default PaintingCard;
