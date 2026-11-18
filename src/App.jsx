import useTable from "./useTable.js";
import PaintingCard from "./PaintingCard.jsx";

function App() {
  const { data, error } = useTable("paintings");

  return (
    <div>
      <h1>Ross Gallery Wall</h1>
      <p>{error}</p>
      {data.map((painting) => (
        <PaintingCard key={painting.id} painting={painting} />
      ))}
    </div>
  );
}

export default App;
