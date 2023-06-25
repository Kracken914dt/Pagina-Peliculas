import {Link} from 'react-router-dom';

function MovieCard({movie}) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <ul class = 'max-w-md mx-auto hover:opacity-50 translate-x-4  transition-all'>
        <div class = 'text-2xl font-medium text-center text-gray-300'>{movie.title}</div>
        <Link to={"/movies/"+movie.id}>
            <img 
            width={230}
            height={345}
            src={imageUrl} 
            alt={movie.title}
            class = 'rounded-lg width to-90% h-auto'
            />
        </Link>
    </ul>
  )
}

export default MovieCard
