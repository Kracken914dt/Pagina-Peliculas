import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import imagenmovie from "../utils/imagenmovie";
import { get } from "../data/Datos";

function DetallesPelicula() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([]);
  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGeneros(data.genres[0]);
    });
  }, [movieId]);

  const imageUrl = imagenmovie(movie.poster_path, 400);

  return (
    <section class = 'p-10 justify-center items-center flex flex-col gap-10  dark:bg-gray-600 rounded-lg w-auto h-auto max-w-xl mx-auto mt-10'>
      <img src={imageUrl} alt={movie.title} class = 'rounded-lg'/>
      <div class = 'p-6 text-justify dark:text-gray-300 rounded-lg -mt-1 shadow-xl shadow-violet-900 dark:bg-gray-900 w-auto h-auto max-w-xl mx-auto'>

        <p>
          <strong>Titulo: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Genero: </strong>
          {generos.name}
        </p>
        <p>
          <strong>Descripcion: </strong>
          {movie.overview}
        </p>
        <p>
            <strong>Fecha de lanzamiento: </strong>
            {movie.release_date}
        </p>
      </div>
    </section>
  );
}

export default DetallesPelicula;
