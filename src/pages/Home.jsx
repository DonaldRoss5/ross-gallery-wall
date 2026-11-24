import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";

const seasonOf = (painting) => Number(painting.EPISODE.slice(1, 3));
const episodeOf = (painting) => Number(painting.EPISODE.slice(4, 6));

function Home() {
  const [paintings, setPaintings] = useState([]);
  const [message, setMessage] = useState("");

  const loadPaintings = async () => {
    const { data, error } = await supabase
      .from("bob_ross_paintings")
      .select()
      .order("id")
      .limit(20);
    if (error) {
      console.log(error.message);
      return;
    }
    console.log(data);
    setPaintings(data);
  };

  // runs loadPaintings once, as soon as the page opens
  useEffect(() => {
    loadPaintings();
  }, []);

  const addInquiry = async (event) => {
    event.preventDefault();
    const form = event.target;
    const inquiry = {
      email: form.email.value,
      painting_id: Number(form.paintingId.value),
    };
    const { error } = await supabase.from("inquiries").insert(inquiry);
    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Thanks, we'll be in touch.");
      form.reset();
    }
  };

  return (
    <div className="home">
      <h1>Gallery Wall Paintings from Bob Ross</h1>

      <div className="ask">
    
        <div className="heading-box">
          <h2>Ask about a Gallery Wall Paintings from Bob Ross's paintings</h2>
        </div>

        <form className="flex-container" onSubmit={addInquiry}>
          <input name="email" type="email" placeholder="Your email" required />
          <select name="paintingId" required>
            <option value="">Pick a painting</option>
            {paintings.map((painting) => (
              <option key={painting.id} value={painting.id}>
                {painting.TITLE} (Season {seasonOf(painting)}, Episode{" "}
                {episodeOf(painting)})
              </option>
            ))}
          </select>
          <button>Send</button>
          <p className="message">{message}</p>
        </form>
      </div>
    </div>
  );
}
export default Home;
