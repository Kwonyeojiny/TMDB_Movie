import React from 'react';
import movieDatas from '../data/movieListData.json';
import MovieCard from '../components/MovieCard';

const MovieList: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {movieDatas.results.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          vote_average={movie.vote_average}
        />
      ))}
    </div>
  );
};

export default MovieList;
