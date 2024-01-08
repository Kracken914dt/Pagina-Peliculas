import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  
  return (
    <ul className="max-w-md mx-auto hover:opacity-50 transform transition-transform">
      <Link to={"/movies/"+movie.id}>
        <img 
          src={imageUrl} 
          alt={movie.title}
          className="rounded-lg w-full h-auto"
        />
      </Link>
      <div className="text-xl font-bold text-center text-white mt-2">{movie.title}</div>
    </ul>
  );
}

export default MovieCard;

