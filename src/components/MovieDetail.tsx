import { useEffect, useState } from 'react';
import movieDetailData from '../data/movieDetailData.json';

const baseUrl = 'https://image.tmdb.org/t/p/w500';

const MovieDetail = () => {
  const [movieData, setMovieData] = useState<any>(null);

  useEffect(() => {
    const DetailData = {
      poster_path: movieDetailData.belongs_to_collection.poster_path,
      title: movieDetailData.title,
      vote_average: movieDetailData.vote_average,
      genres: movieDetailData.genres,
      overview: movieDetailData.overview,
    };
    setMovieData(DetailData);
  }, []);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center m-8 rounded-lg overflow-hidden shadow-xl transition-all duration-300">
      <article className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
        <div className="flex justify-center items-center">
          <img
            src={`${baseUrl}${movieData.poster_path}`}
            className="object-cover m-4 rounded-lg w-full "
          />
        </div>
        <section className="flex flex-col m-4">
          <div className="flex mt-4 mb-4">
            <h1 className="flex-grow text-left font-bold text-4xl">{movieData.title}</h1>
            <p className="flex justify-center items-center text-xl mr-8">
              {movieData.vote_average}
            </p>
          </div>
          <ul className="m-4 flex gap-4 list-none justify-center font-bold">
            {movieData.genres.map((genre: any, index: number) => (
              <li key={index}>{genre.name}</li>
            ))}
          </ul>
          <div className="mt-4 text-base">{movieData.overview}</div>
        </section>
      </article>
    </div>
  );
};

export default MovieDetail;