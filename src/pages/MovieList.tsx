import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { fetchPopularMovies } from '../api/TmdbApi';
import { Link } from 'react-router-dom';

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {movies.map(movie => (
        <Link to={`/details/${movie.id}`} key={movie.id}>
          <MovieCard
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
          />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
