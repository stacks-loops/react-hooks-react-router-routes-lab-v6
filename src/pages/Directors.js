import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"

function Directors() {
const [directors, setDirectors] = useState([])

useEffect(() => {
  fetch(`http://localhost:4000/directors`)
  .then(resp => resp.json())
  .then(data => setDirectors(data))
  .catch((error) => console.error(error))
}, [])

  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Page</h1>
      </header>


      <main>
        {directors.map((director) => {
         return  <article>
          <h2>{director.name}</h2> 
          <ul>{director.movies.map((movie) => {
            return <li key={movie}>{movie}</li>
          })}
            </ul>
        </article>

       })}

      </main>
    </>
  );
};

export default Directors;
