// Navbar.tsx - 검색 결과를 업데이트하는 컴포넌트
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';
import { fetchMovieSearchResults } from '../api/TmdbApi';

interface NavbarProps {
  setSearchResults: React.Dispatch<React.SetStateAction<any[]>>;
}

const Navbar: React.FC<NavbarProps> = ({ setSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    const searchMovies = async () => {
      if (debouncedSearchQuery) {
        const results = await fetchMovieSearchResults(debouncedSearchQuery);
        setSearchResults(results);
      } else {
        setSearchResults([]); // 검색어가 없을 경우 검색 결과를 초기화
      }
    };
    searchMovies();
  }, [debouncedSearchQuery, setSearchResults]);

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          MOVIE
        </Link>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="영화 검색"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="px-2 py-1 rounded bg-gray-700 text-white focus:outline-none"
          />
          <Link to="/signup">회원가입</Link>
          <Link to="/signin">로그인</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
