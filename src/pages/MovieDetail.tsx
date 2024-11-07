import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetail } from '../api/TmdbApi';

const baseUrl = 'https://image.tmdb.org/t/p/w500';

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [movieData, setMovieData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const { poster_path, title, vote_average, genres, overview } = movieData || {};

  useEffect(() => {
    const getMovieData = async () => {
      if (id) {
        setLoading(true);
        const data = await fetchMovieDetail(id);
        setMovieData(data);
        setLoading(false);
      }
    };
    getMovieData();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (!movieData) {
    return <div>영화 정보를 불러올 수 없습니다</div>;
  }

  return (
    <div className="flex justify-center items-center m-8 rounded-lg overflow-hidden shadow-xl transition-all duration-300">
      <article className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
        <div className="flex justify-center items-center">
          <img src={`${baseUrl}${poster_path}`} className="object-cover m-4 rounded-lg w-full " />
        </div>
        <section className="flex flex-col m-4">
          <div className="flex mt-4 mb-4">
            <h1 className="flex-grow text-left font-bold text-4xl">{title}</h1>
            <p className="flex justify-center items-center text-xl mr-8">{vote_average}</p>
          </div>
          <ul className="m-4 flex gap-4 list-none justify-center font-bold">
            {genres && genres.map((genre: any) => <li key={genre.id}>{genre.name}</li>)}
          </ul>
          <div className="mt-4 text-base">{overview}</div>
        </section>
      </article>
    </div>
  );
};

export default MovieDetail;
