import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import { useParams } from "react-router-dom";


function Movie() {
const [movie, setMovie] = useState(null);
const params = useParams();


useEffect(() => {
  fetch(`http://localhost:4000/movies${params.id}`)
  .then(resp => resp.json())
  .then(data => setMovie(data))
  // console.log(data)
  .catch((error) => console.error(error))
}, [params.id])

if (!movie) {
  return <div>Loading...</div>
}

  return (
    <>
      <header>
        {movie.title}
      </header>
      <main>
        <p>{movie.time}</p>
        <div>
          Genres:{""}
          {movie.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
};

export default Movie;
