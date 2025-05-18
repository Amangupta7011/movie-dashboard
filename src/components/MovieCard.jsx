import React from 'react';

const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="group relative bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
      <div className="aspect-[2/3] relative overflow-hidden">
        <img
          src={imageUrl}
          alt={movie.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 p-4 text-white">
            <p className="text-sm line-clamp-3">{movie.overview}</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 min-h-[3.5rem]">{movie.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <span className="bg-yellow-500 text-black px-2 py-1 rounded-lg text-sm font-medium">
              ⭐ {movie.vote_average.toFixed(1)}
            </span>
            <span className="text-yellow-500 text-sm">
              ({movie.vote_count.toLocaleString()} votes)
            </span>
          </div>
          <span className="text-slate-400 text-sm">
            {new Date(movie.release_date).getFullYear()}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-slate-700 rounded-lg text-xs text-slate-300">
            {movie.original_language.toUpperCase()}
          </span>
          <span className="px-2 py-1 bg-slate-700 rounded-lg text-xs text-slate-300">
            Popularity: {Math.round(movie.popularity)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard; 