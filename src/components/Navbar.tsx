import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          MOVIE
        </Link>
        <div className="flex space-x-4">
          <Link
            to="/signup"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
          >
            회원가입
          </Link>
          <Link
            to="/login"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
          >
            로그인
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
