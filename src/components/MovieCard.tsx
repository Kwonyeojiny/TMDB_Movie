import React from 'react';

interface MovieCardProps {
  title: string;
  poster_path: string;
  vote_average: number;
}

const baseUrl = 'https://image.tmdb.org/t/p/w500';

const MovieCard: React.FC<MovieCardProps> = ({ title, poster_path, vote_average }) => {
  return (
    <div className=" rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={`${baseUrl}${poster_path}`}
        alt={title}
        className="w-64 aspect-[3/4] object-cover"
      />
      <h3 className="text-lg text-left pt-4 ml-4">{title}</h3>
      <p className="text-base text-right text-gray-400 p-2 mr-2 ">평점: {vote_average}</p>
    </div>
  );
};

export default MovieCard;
