import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { fetchPopularMovies } from '../api/TmdbApi';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchPopularMovies();
      setMovies(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {movies.map(movie => (
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
