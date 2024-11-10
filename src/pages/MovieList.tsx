// MovieList.tsx - 검색 결과를 렌더링하는 컴포넌트
import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { fetchPopularMovies } from '../api/TmdbApi';
import { Link } from 'react-router-dom';

interface MovieListProps {
  searchResults: any[];
}

const MovieList: React.FC<MovieListProps> = ({ searchResults }) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchPopularMovies();
      setMovies(data);
      setLoading(false);
    };

    // 검색 결과가 있을 경우 해당 결과 표시, 없으면 인기 영화 표시
    if (searchResults.length > 0) {
      setMovies(searchResults);
      setLoading(false);
    } else {
      fetchData();
    }
  }, [searchResults]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center mt-24">
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
