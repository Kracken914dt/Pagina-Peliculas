import {Link} from 'react-router-dom';

function MovieCard({movie}) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <ul class = 'max-w-md mx-auto hover:opacity-50 translate-x-4  transition-all'>
        
        <Link to={"/movies/"+movie.id}>
            <img 
            width={230}
            height={345}
            src={imageUrl} 
            alt={movie.title}
            class = 'rounded-lg width to-90% h-auto'
            />
        </Link>
        <div class = 'text-xl font-bold text-center text-white'>{movie.title}</div>
    </ul>
  )
}

export default MovieCard
