import { useState, useEffect } from "react";
import { get } from "../data/Datos";
import MovieCard from "../components/MovieCard";

function ContextMovieTargeta() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  return (
    <ul class = 'grid grid-cols-4 gap-4 content-center'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default ContextMovieTargeta;
