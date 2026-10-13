import { useState } from "react";

// Random movie data stored in an array of objects
const initialMovies = [
  {
    id: 1,
    title: "The Quantum Paradox",
    genre: "Sci-Fi",
    year: 2045,
    director: "Elena Vance",
    rating: 8.4,
    synopsis: "A rogue physicist discovers how to send messages five minutes into the future, triggering a race against a global syndicate."
  },
  {
    id: 2,
    title: "Midnight in Verona",
    genre: "Romance / Mystery",
    year: 2019,
    director: "Marco Bellini",
    rating: 7.6,
    synopsis: "Two strangers trapped in an Italian archive during a sudden storm uncover centuries-old letters that mirror their own lives."
  },
  {
    id: 3,
    title: "Echoes of the Canyon",
    genre: "Western / Thriller",
    year: 2022,
    director: "Sarah Jenkins",
    rating: 8.1,
    synopsis: "A retired tracker returning to his hometown stumbles upon a mysterious shipment left abandoned in the high desert."
  },
  {
    id: 4,
    title: "Chef's Gamble",
    genre: "Comedy / Drama",
    year: 2023,
    director: "Kenji Sato",
    rating: 7.9,
    synopsis: "An ambitious young chef risks everything to open a pop-up restaurant inside a moving passenger train."
  },
  {
    id: 5,
    title: "Subterranean",
    genre: "Survival Horror",
    year: 2024,
    director: "Dr. Marcus Reed",
    rating: 6.8,
    synopsis: "A geological survey crew drilling deep into the Antarctic ice shelf breaks into an uncharted subterranean ecosystem."
  }
];

function MoviePrompt(){
    const [currentMovie, setCurrentMovie] = useState(null)

    const getRandomMovie = () => {
        if (initialMovies.length === 0) return;

        let randomIndex;

        do {
            randomIndex = Math.floor(Math.random() * initialMovies.length);
        } while (
            initialMovies.length > 1 &&
            currentMovie && 
            initialMovies[randomIndex].id === currentMovie.id
        );

        setCurrentMovie(initialMovies[randomIndex]);
    };


    return (
        <div>
            <h1>Movie Recommendation Example</h1>
            <p> Select a sample movie to explore how a recommendation interface might communicate its results responsibly.</p>
            <button onClick={getRandomMovie}>
                {currentMovie ? "Pick Another Movie" : "Get Random Movie"}
            </button>

           {currentMovie ? (
          <div>
            <h2>{currentMovie.title} ({currentMovie.year})</h2>
            <div>
              <span>{currentMovie.genre}</span>
              <span>★ {currentMovie.rating} / 10</span>
            </div>
            <p><strong>Director:</strong> {currentMovie.director}</p>
            <p>{currentMovie.synopsis}</p>
            <small>This was generated using AI and may contain inaccuracies</small>
          </div>
        ) : (
          <div>
            <p>No movie selected yet!</p>
          </div>
        )}

        </div>
    )
}

export default MoviePrompt;