import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetail } from '../api/TmdbApi';

const baseUrl = 'https://image.tmdb.org/t/p/w500';

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [movieData, setMovieData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const { backdrop_path, poster_path, title, vote_average, genres, overview } = movieData || {};

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

  if (loading) return <div>Loading...</div>;

  if (!movieData) {
    return <div>영화 정보를 불러올 수 없습니다</div>;
  }

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${baseUrl}${backdrop_path})`,
      }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-60" />

      <div className="relative flex justify-center items-center m-8 mt-24 w-[800px] rounded-lg overflow-hidden shadow-xl transition-all duration-300 bg-white bg-opacity-80">
        <article className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
          <div className="flex justify-center items-center">
            <img
              src={`${baseUrl}${poster_path}`}
              className="object-cover m-4 rounded-lg w-full h-full"
            />
          </div>
          <section className="flex flex-col m-4">
            <div className="flex mt-4 mb-4">
              <h1 className="flex-grow text-left font-bold text-4xl">{title}</h1>
              <p className="flex justify-center items-center text-l mr-4">평점: {vote_average}</p>
            </div>
            <hr />
            <ul className="m-4 flex gap-4 list-none justify-center ">
              {genres &&
                genres.map((genre: any, index: number) => (
                  <li
                    key={index}
                    className="bg-gray-200 text-xs text-gray-800 px-4 py-1 rounded-full border border-gray-300 shadow-sm"
                  >
                    {genre.name}
                  </li>
                ))}
            </ul>
            <hr />
            <div className="mt-4 text-base">{overview}</div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default MovieDetail;
