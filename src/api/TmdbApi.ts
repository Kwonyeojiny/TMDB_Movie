import axios from 'axios';

// TMDB API 통신을 위한 인스턴스 생성
const tmdbApi = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: 'ko-KR',
  },
});

export const fetchPopularMovies = async () => {
  try {
    const response = await tmdbApi.get(`/movie/popular`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

export const fetchMovieDetail = async (movieId: string | undefined) => {
  try {
    const response = await tmdbApi.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies detail:', error);
    return [];
  }
};

export const fetchMovieSearchResults = async (query: string) => {
  try {
    const response = await tmdbApi.get(`/search/movie`, {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching search results:', error);
    return [];
  }
};
